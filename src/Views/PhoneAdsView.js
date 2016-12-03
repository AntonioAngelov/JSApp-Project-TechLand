import React, { Component } from 'react';

export default class PhoneAdsView extends Component {
    render() {
        let phoneAdsRows = this.props.phoneAds.map(phoneAd =>
            <tr key={phoneAd._id}>
                <td><img src={phoneAd.imageURL} role="presentation"></img></td>
                <td>{phoneAd.title}</td>
                <td>{phoneAd.description}</td>
                <td>{phoneAd.phoneNumber}</td>
                {this.getActions(phoneAd)}
            </tr>
        );

        return (
            <div className="phoneAds-view">
                <h1>PhoneAds</h1>
                <table className="phoneAds-table">
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Phone Description</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {phoneAdsRows}
                    </tbody>
                </table>
            </div>
        );
    }

   getActions(phoneAd) {
        if (phoneAd._acl.creator === sessionStorage.getItem('userId'))
            return (
                <td>
                    <input type="button" value="Edit"
                           onClick={this.props.onedit.bind(this, phoneAd._id)} />
                    &nbsp;
                    <input type="button" value="Delete"
                           onClick={this.props.ondelete.bind(this, phoneAd._id)} />
                </td>
            );
        else
            return <td></td>;
    }
}

