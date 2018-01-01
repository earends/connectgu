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
import Listings from "./Listings";


class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []

        };
        this.handleSportChange = this.handleSportChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    componentDidMount() {
        const _this = this;
        axios.post('https://calm-reef-86023.herokuapp.com/alllistings',{
            key:""
        }).then(function(response) {
                _this.setState({
                    data: response.data
                });

            })
            .catch(function(response) {
                console.log(response);
            });
    }


    handleFilterChange(e) {
        let searchVal = ''
        if (e.target.value === 'default') {
            return
        }
        if (e.target.value === 'popularity') {
            searchVal = 'popularity'
        }
        if (e.target.value === 'recent') {
            searchVal = 'recent'
        }
        const _this = this;
        axios.post('https://calm-reef-86023.herokuapp.com/' + searchVal,{
            key:""
        }).then(function(response) {
                //console.log(response)

                _this.setState({
                    data: response.data
                });


            })
            .catch(function(response) {
                console.log(response);
            });
    }

    handleLocationChange(e)  {
        let searchVal = ''
        if (e.target.value === 'default') {
            return
        }
        if (e.target.value === 'Rudolf Gym') {
            searchVal = 'Rudolf Gym'
        }
        if (e.target.value === 'Mulligan') {
            searchVal = 'Mulligan'
        }
        if (e.target.value === 'Herak') {
            searchVal = 'Herak'
        }
        if (e.target.value === 'Foley') {
            searchVal = 'Foley'
        }
        if (e.target.value === 'Rosaur') {
            searchVal = 'Rosaur'
        }
        if (e.target.value === 'Hemmingson') {
            searchVal = 'Hemmingson'
        }
        if (e.target.value === 'Other') {
            searchVal = 'Other'
        }
        const _this = this;
        axios.post('https://calm-reef-86023.herokuapp.com/listings/location/' +searchVal,{
            key:""
        }).then(function(response) {
                //console.log(response)

                _this.setState({
                    data: response.data

                });


            })
            .catch(function(response) {
                console.log(response);
            });

    }

    handleSportChange(e) {
        let searchVal = ''
        if (e.target.value === 'default') {
            return
        }
        if (e.target.value === 'basketball') {
            searchVal = 'Basketball'
        }
        if (e.target.value === 'baseball') {
            searchVal = 'Baseball'
        }
        if (e.target.value === 'football') {
            searchVal = 'Football'
        }
        if (e.target.value === 'soccer') {
            searchVal = 'Soccer'
        }
        if (e.target.value === 'running') {
            searchVal = 'Running'
        }
        if (e.target.value === 'frisbee') {
            searchVal = 'Frisbee'
        }
        if (e.target.value === 'Other') {
            searchVal = 'Other'
        }
        const _this = this;
        axios.post('https://calm-reef-86023.herokuapp.com/listings/game/' + searchVal,{
            key:""
        }).then(function(response) {

                //console.log(response.data[0])
                _this.setState({
                    data: response.data

                });


            })
            .catch(function(response) {
                console.log(response);
            });
    }



    render() {


        return (
            <div style={{marginTop: '50px'}}>
                <div style={{ marginBottom:'50px'}}>
                    <form>
                        <div className= 'btn-group'>
                            <select className="form-control"  onChange={ this.handleFilterChange } >
                                <option value = 'default' selected>Filters</option>
                                <option value="popularity">Popularity</option>
                                <option value="recent">Most Recent</option>
                            </select>
                            <select className="form-control"  onChange={ this.handleLocationChange } >
                                <option value = 'default' selected>Location</option>
                                <option value="Rudolf Gym">Rudolf Fitness Center</option>
                                <option value="Mulligan">Mulligan Field</option>
                                <option value="Herak">Herak Quad</option>
                                <option value="Foley">Foley Lawn</option>
                                <option value="Rosaur">Rosaur Courtyard</option>
                                <option value="Hemmingson">Hemmingson</option>
                                <option value="Other">Other</option>
                            </select>
                            <select className="form-control"  onChange={ this.handleSportChange } >
                                <option value = 'default' selected>Sport</option>
                                <option value="basketball">Basketball</option>
                                <option value="baseball">Baseball</option>
                                <option value="football">Football</option>
                                <option value="soccer">Soccer</option>
                                <option value="running">Running</option>
                                <option value="frisbee">Frisbee</option>
                                <option value="Other">Other</option>
                            </select>
                            <a href={'/Home'}  className="btn btn-danger rounded"  >Reset</a>

                        </div>

                    </form>
                </div>
                <Listings listings = {this.state.data} />


            </div>
        );
    }
}

export default Filters;