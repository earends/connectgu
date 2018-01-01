import React, { Component } from 'react';
import './App.css';
import swal from "sweetalert";
import axios from "axios/index";
import {Redirect } from "react-router-dom";
import evan from './images/evan.jpg';


class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: "...."
        };
    }

    sendData() {
        axios.post('https://calm-reef-86023.herokuapp.com/leavefeedback', {
            feedback:this.state.feedback
        })
        swal("Thanks for leaving feedback!" ,{buttons: {
                return: {
                    text: "Check out some more listings!",
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
            <div style = {{marginTop: '50px'}} className= 'container  border-dark'>
                <h1 className= 'text-center'> About The Author</h1>
                <div className= 'row'>
                    <div className='col-sm-6'>
                        <li className= 'text-left'>Hi My name is Evan.</li>
                        <li className= 'text-left'> Check out my {" "}
                            <a href="https://github.com/earends">Github</a>
                        </li>
                        <li className= 'text-left'> Check out my 2018 SeniorDesign website{" "}
                            <a href="http://www.usesparespace.com">sparespace</a>
                        </li>

                    </div>
                    <div className='col-sm-6'>
                        <img style={{height:'400px'}} className= 'rounded-circle float-right' src = {evan}></img>
                    </div>
                </div>
                <div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Leave Feedback</label>
                        <textarea onChange={ e => this.setState({ feedback : e.target.value }) } class="form-control" rows="3"></textarea>
                        <button className= 'btn btn-dark' onClick = {this.sendData.bind(this)}>Send!</button>
                    </div>
                </div>


            </div>
        );
    }
}

export default FAQ;