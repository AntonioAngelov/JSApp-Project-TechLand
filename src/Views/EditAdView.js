import React, { Component } from 'react';

export default class EditAdView extends Component {
    render() {
        return (
            <form className="edit-ad-form" onSubmit={this.submitForm.bind(this)}>
                <h1>Edit Ad</h1>
                <label>
                    <div>Image:</div>
                    <input type="text" name="image" required
                           defaultValue={this.props.imageURL}
                           ref={e => this.imageField = e}/>
                </label>
                <label>
                    <div>Title:</div>
                    <input type="text" name="title" required
                           defaultValue={this.props.title}
                           ref={e => this.titleField = e} />
                </label>
                <label>
                    <div>Specifications:</div>
                    <textarea name="description" rows="10" required
                              defaultValue={this.props.description}
                              ref={e => this.descriptionField = e} />
                </label>
                <label>
                    <div>Phone Number:</div>
                    <input type="text" name="phoneNumber" required
                           defaultValue={this.props.phoneNumber}
                           ref={e => this.phoneNumberField = e} />
                </label>
                <div>
                    <input type="submit" value="Edit" />
                </div>
            </form>
        );
    }

    submitForm(event) {
        event.preventDefault();
        this.props.onsubmit(
            this.props.adId,
            this.titleField.value,
            this.imageField.value,
            this.descriptionField.value,
            this.phoneNumberField.value
        );
    }
}
