import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import swal from "sweetalert";
import {Redirect } from "react-router-dom";

class DeleteListing extends Component {
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

    sendData() {
        axios.post(`https://calm-reef-86023.herokuapp.com/listings/delete/${this.props.match.params.id}`,{
            key:""
        })
        swal("Your Post has been deleted along with all of the comments" ,{buttons: {
                return: {
                    text: "Get Ready to see more listings!",
                    value: "listing",
                }
            }
        }).then((value) => {
            window.location.href = "/Home"
            return <Redirect to="/Home" />
        });
    }



    render() {

        return (
            <div className='container'>

                <h1 className= 'text-center'> Delete {this.state.listing.title}</h1>
                <form>
                    <div>

                        <div style = {{marginTop:'20px'}} className="card mb-3 ">
                            <div className="card-body">
                                <h4 className="card-title">{this.state.listing.title}</h4>
                                <p className="card-text">{this.state.listing.description}</p>
                                <p className="card-text">
                                    <small class="text-muted">{this.state.listing.game + ' @ ' + this.state.listing.location}</small>
                                </p>
                            </div>
                        </div>
                    </div>


                    <div>
                        <button type="button" className="btn btn-primary" onClick = {this.sendData.bind(this)}>Submit</button>
                        <span style = {{marginLeft:'10px'}} className= 'label-danger text-left'>Are you sure you want to delete this post?</span>
                    </div>
                </form>
            </div>
        );
    }
}

export default DeleteListing;