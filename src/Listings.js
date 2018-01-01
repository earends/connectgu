import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import {Link} from "react-router-dom";
import swal from "sweetalert";
import {Redirect } from "react-router-dom";
import Soccer from './images/soccer.jpeg';
import Football from './images/football.jpeg';
import Frisbee from './images/frisbee.jpg';
import Baseball from './images/baseball.jpg';
import Basketball from './images/basketball.jpg';
import Running from './images/running.jpg';
import Maps from "./Maps";
import other from './images/other.jpg'


class Listings extends Component {
    constructor(props) {
        super(props);
        this.state = {
           data: []
        };
    }


    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.listings });
    }



    render() {



        return (
            <div style={{marginTop: '50px'}}>

                <div className= 'row'>
                    <div className= 'col-sm-8'>
                        <div className= 'row'>
                        {

                                this.state.data.map((item, index) => (
                                <div className='col-sm-6'>
                                    <div className="card text-white bg-dark mb-3" style={{maxWidth:"20rem"}}>
                                        <div className="card-header">
                                            <div className='float-left'>
                                                <div>
                                                    {"Game: " + item.game}
                                                </div>
                                                <div>
                                                    {"Place: " + item.location}
                                                </div>
                                            </div>
                                            <div className='float-right'>
                                                <a href={`Listing/${item._id}`}  className="btn btn-light float-right"  >Check It Out!</a>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title">{item.title}</h4>
                                            <p className="card-text">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                                ))
                        }
                        </div>
                    </div>
                    <div className= 'col-sm-4'>
                        <Maps/>
                    </div>




                </div>

            </div>
        );
    }
}

export default Listings;