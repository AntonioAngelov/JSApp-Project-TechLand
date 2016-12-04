/**
 * Created by anton on 04-Dec-16.
 */
import React, { Component } from 'react';

export default class SingleAdView extends Component {
    render() {
        return (
            <center className="see-more">
                <img src={this.props.imageURL} name="image" role="presentation" />
                <h1>Title:</h1>
                <p type="text" name="title">{this.props.title}</p>
                <h1>Specifications:</h1>
                <p name="description" rows="10">{this.props.description}</p>
                <h1>Phone Number:</h1>
                <p type="text" name="phoneNumber">{this.props.phoneNumber}</p>
            </center>
        );
    }
}