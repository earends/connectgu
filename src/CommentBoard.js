import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import swal from "sweetalert";
import {Redirect } from "react-router-dom";
import football from './images/football.jpeg';


class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            addedComment: 'n/a',
            UserEmail: 'name@zagmail.gonzaga.edu'
        }
    }



    sendData() {
        if (!/^[A-Z0-9._%+-]+@zagmail.gonzaga.edu$/i.test(this.state.UserEmail) || this.state.UserEmail === 'name@zagmail.gonzaga.edu') {
            swal("Please insert a correct GU Email" ,{buttons: {
                    return: {
                        text: "Sorry only GU emails!",
                        value: "listing",
                    }
                }
            })
        } else {
            axios.post('https://calm-reef-86023.herokuapp.com/postcomment', {
                key:"",
                comment: this.state.addedComment,
                email: this.state.UserEmail,
                pid: this.props.pid
            });
            swal("Congrats Check your email to verify your Comment!" ,{buttons: {
                    return: {
                        text: "Check it out!"
                    }
                }
            }).then(() => {
                window.location.href = "/Home"
                return <Redirect to="/Home" />
            });
        }

    }

    componentDidMount() {
        const _this = this;
        axios.post(`https://calm-reef-86023.herokuapp.com/getcomments/${this.props.pid}`, {
            key:""
        }).then(function(response) {
                _this.setState({
                    comments: response.data
                });

            })
            .catch(function(response) {
                console.log(response);
            });



    }

    render() {

        return (
            <div style={{marginTop:'10px'}} className= 'container'>

                <h3 className= 'text-center'> Comments</h3>
                <div>
                    {
                        this.state.comments.map((item, index) => (
                            <div class="card">
                                <div class="card-header">
                                    {item.email}
                                </div>
                                <div class="card-body">
                                    <p class="card-text">{item.comment}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div style={{marginTop:'25px'}}>
                    <h4 className= 'text-center '>Add Your Own!</h4>
                    <form>
                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" className="form-control" value = {this.state.UserEmail}  onChange={ e => this.setState({ UserEmail : e.target.value }) } placeholder="name@zagmail.gonzaga.edu"></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label">Comment</label>
                            <div class="col-sm-10">
                                <input maxLength={'75'} type="text" value = {this.state.addedComment}  onChange={ e => this.setState({ addedComment : e.target.value }) } className="form-control" placeholder="Im in!"></input>
                            </div>
                        </div>
                        <div >
                            <button type="button" className="btn btn-primary" onClick = {this.sendData.bind(this)}>Submit</button>
                        </div>
                    </form>
                </div>

            </div>


        );
    }
}

export default Listing;