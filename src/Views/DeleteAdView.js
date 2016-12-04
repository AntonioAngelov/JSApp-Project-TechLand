import React, { Component } from 'react';

export default class DeleteAdView extends Component {
    render() {
        return (
            <form className="delete-ad-form" onSubmit={this.submitForm.bind(this)}>
                <h1>Confirm Delete Book</h1>
                <label>
                    <div>Image:</div>
                    <input type="text" name="image" disabled
                           defaultValue={this.props.imageURL}/>
                </label>
                <label>
                    <div>Title:</div>
                    <input type="text" name="title" disabled
                           defaultValue={this.props.title} />
                </label>
                <label>
                    <div>Specifications:</div>
                    <textarea name="description" rows="10" disabled
                              defaultValue={this.props.description} />
                </label>
                <label>
                    <div>Phone Number:</div>
                    <input type="text" name="phoneNumber" disabled
                           defaultValue={this.props.phoneNumber}/>
                </label>
                <div>
                    <input type="submit" value="Delete" />
                </div>
            </form>
        );
    }

    submitForm(event) {
        event.preventDefault();
        this.props.onsubmit(this.props.adId);
    }
}