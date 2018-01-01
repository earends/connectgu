import React, { Component } from 'react';
import './App.css';
import swal from 'sweetalert';
import axios from 'axios';
import {Redirect } from "react-router-dom";


class CreateListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'title',
            email: 'name@zagmail.gonzaga.edu',
            game: 'Football',
            location: 'Rosaur',
            details: 'details'

        };
    }

    componentDidMount() {

    }



    sendData() {
        if (!/^[A-Z0-9._%+-]+@zagmail.gonzaga.edu$/i.test(this.state.email) || this.state.email === 'name@zagmail.gonzaga.edu') {
            swal("Please insert a correct Gu Email" ,{buttons: {
                    return: {
                        text: "Please insert a correct GU Email",
                        value: "listing",
                    }
                }
            })
        } else {
            axios.post('https://calm-reef-86023.herokuapp.com/newlisting', {
                key:"",
                email: this.state.email,
                title: this.state.title,
                game: this.state.game,
                description: this.state.details,
                location: this.state.location,
                timestamp: Date.now()
            }).then((res) => {
                console.log(res.data);
            });

            swal("Congrats Check your Email!" ,{buttons: {
                    return: {
                        text: "To Verify, Edit, or Delete your Lisiting!",
                        value: "listing",
                    }
                }
            }).then((value) => {
                window.location.href = "/Home"
                return <Redirect to="/Home" />
            });
        }


    }
    render() {

        return (
            <div style = {{marginTop: '50px'}}>
                <h1 className= 'text-center'> Post a Sport</h1>
                <form onSubmit={ this.onSubmit }>
                    <div className= 'container'>
                        <div className= 'form-group'>
                            <label >Email</label>
                            <input type="email" className="form-control" value = {this.state.email} onChange={ e => this.setState({ email : e.target.value }) }  placeholder="name@example.com"></input>
                        </div>
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
                                <option value="Mulligan">Mulligan Field</option>
                                <option value="Herak">Herak Quad</option>
                                <option value="Foley">Foley Lawn</option>
                                <option value="Rosaur">Rosaur Courtyard</option>
                                <option value="Hemmingson">Hemmingson</option>
                                <option value="Rudolf Gym">Rudolf Fitness Center</option>
                                <option value="Other">Other, Write in</option>
                            </select>
                        </div>
                        <div className= 'form-group'>
                            <label >Description</label>
                            <textarea maxLength={'74'} type="text" className="form-control" value = {this.state.details} onChange={ e => this.setState({ details : e.target.value }) }  placeholder="Bring gloves its Cold!"></textarea>
                        </div>
                        <div>
                            <button type="button" className="btn btn-dark" onClick = {this.sendData.bind(this)}>Submit</button>
                        </div>

                    </div>

                </form>
            </div>
        );
    }
}

export default CreateListing;