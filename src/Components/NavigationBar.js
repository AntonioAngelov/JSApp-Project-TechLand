/**
 * Created by anton on 02-Dec-16.
 */
import React, { Component } from 'react';
import './NavigationBar.css';

export default class NavigationBar extends Component {
    render() {
        let username = this.props.username;
        if (username == null) {
            // No user logged in
            return (
                <nav className="navigation-bar">
                    <a href="#" onClick={this.props.homeClicked}>Home</a>
                    <a href="#" onClick={this.props.loginClicked}>Login</a>
                    <a href="#" onClick={this.props.registerClicked}>Register</a>
                </nav>
            );
        } else {
            // User logged in
            return (
                <nav className="navigation-bar">
                    <a href="#" onClick={this.props.homeClicked}>Home</a>
                    <a href="#" onClick={this.props.phonesClicked}>Phones</a>
                    <a href="#" onClick={this.props.pcsClicked}>Pcs & Laptops</a>
                    <a href="#" onClick={this.props.otherClicked}>Other</a>
                    <a href="#" onClick={this.props.createAdClicked}>Create ad</a>
                    <a href="#" onClick={this.props.logoutClicked}>Logout</a>
                    <span className="loggedInUser">
                        Welcome, {username}!
                    </span>
                </nav>
            );
        }
    }
}
