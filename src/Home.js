import React, { Component } from 'react';
import './App.css';
import Listings from './Listings';
import axios from "axios/index";
import swal from "sweetalert";
import {Redirect } from "react-router-dom";
import Maps from "./Maps";
import Filters from "./Filters";

class Home extends Component {

    componentDidMount() {
        console.log(process.env.TEST);
    }

    render() {

        return (
            <div className= 'container'>
                <Filters/>
            </div>

        );
    }
}

export default Home;