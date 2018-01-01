import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Listings from './Listings';
import App from './App';
import Listing from './Listing';
import NavBar from './NavBar';
import CreateListing from './CreateListing';
import FAQ from './FAQ';
import Home from './Home';
import EditListing from './EditListing';
import DeleteListing from './DeleteListing';


const Routes = () => {
    return (
        <div>
            <Route exact path="/" render={() => <Redirect to="/Home" />} />
            <Route path="/Home" component={Home} />
            <Route path="/create_listing" component={CreateListing} />
            <Route path="/edit/:id" component={EditListing} />
            <Route path="/delete/:id" component={DeleteListing} />
            <Route path="/FAQ" component={FAQ} />
            <Route path="/Listing/:id" component={Listing} />
        </div>
    )
}

export default Routes;