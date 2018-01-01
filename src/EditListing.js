import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Redirect } from "react-router-dom";
import swal from 'sweetalert';


class EditListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: {},
            title: 'title',
            game: 'game',
            location: 'location',
            details: 'details'
        };
    }

    componentDidMount() {
       axios.post(`https://calm-reef-86023.herokuapp.com/listings/${this.props.match.params.id}`,{
           key:""
       }).then(res => {
               this.setState({
                   listing: res.data,
                   title: res.data.title,
                   game: res.data.game,
                   location: res.data.location,
                   details: res.data.description
               })

           })
           .catch(err => console.log("some err occured", err))

    }

    sendData() {

        axios.post((`https://calm-reef-86023.herokuapp.com/listings/edit/${this.props.match.params.id}`), {
            key: "",
            title: this.state.title,
            game: this.state.game,
            description: this.state.details,
            location: this.state.location
        });

        swal("Congrats you edited your Post!" ,{buttons: {
                return: {
                    text: "Use your email to continue To monitor your post!",
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
            <div className= 'container' style={{marginTop:'50px'}}>
                <h1 className= 'text-center'> Edit  {this.state.listing.title}</h1>
                <div style = {{marginTop:'20px'}} className="card mb-3 ">
                    <div className="card-body">
                        <h4 className="card-title">{this.state.listing.title}</h4>
                        <p className="card-text">{this.state.listing.description}</p>
                        <p className="card-text">
                            <small class="text-muted">{this.state.listing.game + ' @ ' + this.state.listing.location}</small>
                        </p>
                    </div>
                </div>
                <form onSubmit={ this.onSubmit }>
                    <div className= 'container'>

                        <div className= 'form-group'>
                            <label >Title</label>
                            <input type="text" maxLength={'17'} className="form-control" value = {this.state.title} id="title" onChange={ e => this.setState({ title : e.target.value }) } placeholder="Football with Chris Collinsworth"></input>
                        </div>
                        <div className= 'form-group'>
                            <label >Game</label>
                            <select className="form-control" value = {this.state.game} onChange={ e => this.setState({ game : e.target.value }) } >
                                <option selected>Choose...</option>
                                <option value="Football">Football</option>
                                <option value="Basketball">Basketball</option>
                                <option value="Soccer">Soccer</option>
                                <option value="Baseball">Baseball</option>
                                <option value="Frisbee">Frisbee</option>
                                <option value="Running">Running</option>
                                <option value="Other">Other, Write in Details</option>
                            </select>
                        </div>
                        <div className= 'form-group'>
                            <label className="mr-sm-2" >Location</label>
                            <select className="form-control" value = {this.state.location} onChange={ e => this.setState({ location : e.target.value }) } >
                                <option selected>Choose...</option>
                                <option value="Rudolf Gym">Rudolf Fitness Center</option>
                                <option value="Mulligan">Mulligan Field</option>
                                <option value="Herak">Herak Quad</option>
                                <option value="Foley">Foley Lawn</option>
                                <option value="Rosaur">Rosaur Courtyard</option>
                                <option value="Hemmingson">Hemmingson</option>
                            </select>
                        </div>
                        <div className= 'form-group'>
                            <label >Description</label>
                            <textarea maxLength={'74'} type="text" className="form-control" value = {this.state.details} onChange={ e => this.setState({ details : e.target.value }) } id="details" placeholder="Bring gloves its Cold!"></textarea>
                        </div>
                        <div>
                            <button type="button" className="btn btn-primary" onClick = {this.sendData.bind(this)}>Submit</button>
                        </div>

                    </div>

                </form>
            </div>
        );
    }
}

export default EditListing;