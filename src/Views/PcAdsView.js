import React, { Component } from 'react';

export default class PcAdsView extends Component {
    render() {
        let pcAdsRows = this.props.pcAds.map(pcAds =>
            <tr key={pcAds._id}>
                <td><img src={pcAds.imageURL}></img></td>
                <td>{pcAds.title}</td>
                <td>{pcAds.phoneDescription}</td>
                <td>{pcAds.phoneNumber}</td>
            </tr>
        );

        return (
            <div className="pcAds-view">
                <h1>Pc Ads</h1>
                <table className="pcAds-table">
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
                    {pcAdsRows}
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


