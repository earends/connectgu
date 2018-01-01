import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import swal from "sweetalert";
import {Redirect } from "react-router-dom";
import L from 'leaflet';
import { Map,Marker, Popup, TileLayer,Circle } from 'react-leaflet';
import {Icon} from 'leaflet';

class Maps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            locations: [
                {name: 'Rudolf Fitness Center',lat:'47.66535377',lng:'-117.40099015'}, //Rudolf
                 {name: 'Mulligan Field',lat:'47.66636115',lng:'-117.39891455'}, //muligan
                {name:'Herak Quad',lat:'47.66720289',lng:'-117.40224585'}, //herak quad
                {name:'Foley Lawn',lat:'47.66705477',lng:'-117.40057752'}, //foley lawn
                {name: 'Rosaur Courtyard',lat:'47.66779174',lng:'-117.3992686'}, //rosaur courtyard
                {name:'Hemmingson',lat:'47.66709812',lng:'-117.39903256'} //hemmingson
            ]
        }

    }



    componentDidMount() {

        axios.post('https://calm-reef-86023.herokuapp.com/alllistings',{
            key:""
        }).then(res => {
                this.setState({ data: res.data })
            })
    }






    render() {
        let hemm = 0;
        let mc = 0;
        let mull = 0;
        let her = 0;
        let fol = 0;
        let ros = 0;

        const getLocationCount = this.state.data.map((review) => {
            if (review.location === 'Hemmingson') {
                hemm = hemm + 1;
            }
            if (review.location === 'Rudolf Gym') {
                mc = mc + 1;
            }
            if (review.location === 'Mulligan') {
                mull = mull + 1;
            }
            if (review.location === 'Herak') {
                her = her + 1;
            }
            if (review.location === 'Foley') {
                fol = fol + 1;
            }
            if (review.location === 'Rosaur') {
                ros = ros + 1;
            }
        })
        let locations = [mc,mull,her,fol,ros,hemm]
        //Error occurs when i try and add the cordinates to the map
        const allCordinates = locations.map((count,index) => {
            return (
                <Marker position={[this.state.locations[index].lat,this.state.locations[index].lng]}>
                    <Popup>
                        <span>{this.state.locations[index].name + " " + count}</span>
                    </Popup>
                </Marker>
            );
        })


        return (
            <div style={{}} className= 'border-rounded'>
                <Map style={{height:'500px'}} center={[47.6672354,-117.4013339]} zoom={16}>
                    <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
                    {allCordinates}
                </Map>

            </div>
        );
    }
}

export default Maps;