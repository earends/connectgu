import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import swal from "sweetalert";
import {Redirect } from "react-router-dom";
import football from './images/football.jpeg';
import CommentBoard from './CommentBoard';
import Football from './images/football.jpeg';
import Soccer from './images/soccer.jpeg';
import Baseball from './images/baseball.jpg'
import Running from './images/running.jpg';
import Basketball from './images/basketball.jpg';
import other from './images/other.jpg';
import Frisbee from './images/frisbee.jpg';


class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: {}
        };
    }

    componentDidMount() {

                    axios.post(`https://calm-reef-86023.herokuapp.com/listings/${this.props.match.params.id}`,{
                        key:""
                    }).then(res => {
                            this.setState({ listing: res.data })

                        })
                        .catch(err => console.log("some err occured", err))




    }

    render() {
        let image = null;
        if (this.state.listing.game === 'Football') {
            image = <img style={{height:'180px'}} class="card-img-top" src={Football} alt="Card image cap"></img>
        }else if (this.state.listing.game === 'Soccer') {
            image = <img style={{height:'180px'}} class="card-img-top" src={Soccer} alt="Card image cap"></img>
        }else if (this.state.listing.game === 'Baseball') {
            image = <img style={{height:'180px'}} class="card-img-top" src={Baseball} alt="Card image cap"></img>
        } else if (this.state.listing.game === 'Running') {
            image = <img style={{height:'180px'}} class="card-img-top" src={Running} alt="Card image cap"></img>
        } else if (this.state.listing.game === 'Frisbee') {
            image = <img style={{height:'180px'}} class="card-img-top" src={Frisbee} alt="Card image cap"></img>
        }else if (this.state.listing.game === 'Basketball') {
            image = <img style={{height:'180px'}} class="card-img-top" src={Basketball} alt="Card image cap"></img>
        }else {
            image = <img style={{height:'180px'}} class="card-img-top" src={other} alt="Card image cap"></img>
        }

        return (
            <div className= 'container'>
                <div style = {{marginTop:'20px'}} className="card mb-3 ">
                    {image}
                    <div className="card-body">
                        <h4 className="card-title">{this.state.listing.title}</h4>
                        <p className="card-text">{this.state.listing.description}</p>
                        <p className="card-text">
                            <small class="text-muted">{this.state.listing.game + ' @ ' + this.state.listing.location}</small>
                        </p>
                    </div>
                </div>
                <div>
                    <CommentBoard pid = {this.props.match.params.id}/>
                </div>
            </div>

        );
    }
}

export default Listing;