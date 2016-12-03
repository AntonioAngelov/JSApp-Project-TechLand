import React, { Component } from 'react';

export default class PhoneAdsView extends Component {
    render() {
        let phoneAdsRows = this.props.phoneAds.map(phoneAds =>
            <tr key={phoneAds._id}>
                <td><img src={phoneAds.imageURL}/></td>
                <td>{phoneAds.title}</td>
                <td>{phoneAds.phoneDescription}</td>
                <td>{phoneAds.phoneNumber}</td>

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

   /*getActions(phoneAds, userId) {
        if (phoneAds._acl.creator === userId)
            return (
                <td>
                    <input type="button" value="Edit"
                           onClick={this.props.editPhoneAdClicked.bind(this, phoneAds._id)} />
                    &nbsp;
                    <input type="button" value="Delete"
                           onClick={this.props.deletePhoneAdClicked.bind(this, phoneAds._id)} />
                </td>
            );
        else
            return <td></td>;
    }*/
}

