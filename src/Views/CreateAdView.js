import React, { Component } from 'react';

export default class CreateBookView extends Component {
    render() {
        return (
            <form className="create-ad-form" onSubmit={this.submitForm.bind(this)}>
                <h1>Create Ad</h1>
                <label>
                    <div>Section:</div>
                    <select name="section" ref={e => this.sectionField= e} >
                        <option value="phoneAds">Phone Ad</option>
                        <option value="pcAds">PC Ad</option>
                        <option value="otherAds">Other Ad</option>
                    </select>
                </label>
                <label>
                    <div>Image:</div>
                    <input type="text" name="image" required
                           ref={e => this.imageField = e} />
                </label>
                <label>
                    <div>Title:</div>
                    <input type="text" name="title" required
                           ref={e => this.titleField = e} />
                </label>
                <label>
                    <div>Specifications:</div>
                    <textarea type="text" name="addDescription" rows="7" required
                           ref={e => this.descriptionField = e} />
                </label>
                <label>
                    <div>Phone Number:</div>
                    <input type="text" name="phoneNumber" required
                              ref={e => this.phoneNumberField = e} />
                </label>
                <div>
                    <input type="submit" value="Create" />
                </div>
            </form>
        );
    }

    submitForm(event) {
        event.preventDefault();
        this.props.onsubmit(
            this.imageField.value,
            this.titleField.value,
            this.descriptionField.value,
            this.phoneNumberField.value,
            this.sectionField.value
        );
    }
}