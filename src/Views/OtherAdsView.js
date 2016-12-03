import React, { Component } from 'react';

export default class OtherAdsView extends Component {
    render() {
        let otherAdsRows = this.props.otherAds.map(otherAds =>
            <tr key={otherAds._id}>
                <td><img src={otherAds.imageURL}></img></td>
                <td>{otherAds.title}</td>
                <td>{otherAds.phoneDescription}</td>
                <td>{otherAds.phoneNumber}</td>
            </tr>
        );

        return (
            <div className="otherAdsAds-view">
                <h1>Other Ads</h1>
                <table className="otherAdsAds-table">
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
                    {otherAdsRows}
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


