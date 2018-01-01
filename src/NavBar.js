import React, { Component } from 'react';
import './App.css';
import Listings from './Listings';
import gu from './images/gu.jpeg';


class NavBar extends Component {

    render() {

        return (
            <div>

                <div className= 'container rounded bg-dark' >
                    <h1 className= 'text-center text-white'>Connect GU</h1>
                </div>
                <div >
                    <nav className=" rounded navbar navbar-light bg-dark justify-content-between container" >
                        <a href = '/Home' className="navbar-brand navbar-center text-white">View Listings</a>
                        <p className='navbar-brand navbar-center'> / </p>
                        <a href = '/create_listing' className="navbar-brand navbar-center text-white">Create a Post</a>
                        <p className='navbar-brand navbar-center'> / </p>
                        <a href = '/FAQ' className="navbar-brand navbar-center text-white">About the Author</a>

                    </nav>
                </div>


            </div>

        );
    }
}

export default NavBar;