import React, { Component } from 'react';

export default class UserAdsView extends Component {
    render() {
        let phoneAdsOfUser=this.props.userPhoneAds.filter(Ad => Ad._acl.creator===sessionStorage.getItem('userId'));
        let userPhoneAdsRows = phoneAdsOfUser.map(Ad =>
            <tr key={Ad._id}>
                <td><img src={Ad.imageURL} role="presentation"></img></td>
                <td>{Ad.title}</td>
                <td>{Ad.description}</td>
                <td>{Ad.phoneNumber}</td>
                </tr>
        );
        let pcAdsOfUser=this.props.userPcAds.filter(Ad=>Ad._acl.creator===sessionStorage.getItem('userId'));
        let userPcAdsRows = pcAdsOfUser.map(Ad =>
            <tr key={Ad._id}>
                <td><img src={Ad.imageURL} role="presentation"></img></td>
                <td>{Ad.title}</td>
                <td>{Ad.description}</td>
                <td>{Ad.phoneNumber}</td>
            </tr>
        );
        let otherAdsOfUser=this.props.userAds.filter(Ad=>Ad._acl.creator===sessionStorage.getItem('userId'));
        let userOtherAdsRows = otherAdsOfUser.map(Ad =>
            <tr key={Ad._id}>
                <td><img src={Ad.imageURL} role="presentation"></img></td>
                <td>{Ad.title}</td>
                <td>{Ad.description}</td>
                <td>{Ad.phoneNumber}</td>
            </tr>
        );

        return (
            <div className="userAds-view">
                <h1>List of your adverts</h1>
                <table className="userAds-table">
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Specification</th>
                        <th>Phone Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    {userPhoneAdsRows}
                    {userPcAdsRows}
                    {userOtherAdsRows}
                    </tbody>
                </table>
            </div>
        );
    }

}
