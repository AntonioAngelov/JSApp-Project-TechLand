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
                {this.getPhoneActions(Ad)}
                </tr>
        );
        let pcAdsOfUser=this.props.userPcAds.filter(Ad=>Ad._acl.creator===sessionStorage.getItem('userId'));
        let userPcAdsRows = pcAdsOfUser.map(Ad =>
            <tr key={Ad._id}>
                <td><img src={Ad.imageURL} role="presentation"></img></td>
                <td>{Ad.title}</td>
                <td>{Ad.description}</td>
                <td>{Ad.phoneNumber}</td>
                {this.getPcActions(Ad)}
            </tr>
        );
        let otherAdsOfUser=this.props.userAds.filter(Ad=>Ad._acl.creator===sessionStorage.getItem('userId'));
        let userOtherAdsRows = otherAdsOfUser.map(Ad =>
            <tr key={Ad._id}>
                <td><img src={Ad.imageURL} role="presentation"></img></td>
                <td>{Ad.title}</td>
                <td>{Ad.description}</td>
                <td>{Ad.phoneNumber}</td>
                {this.getOtherActions(Ad)}
            </tr>
        );

        return (
            <div className="userAds-view">
                <h1>My adverts</h1>
                <table className="userAds-table">
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Specification</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
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
    getPhoneActions(phoneAd) {

            return (
                <td>
                    <input type="button" value="See More"
                           onClick={this.props.onseemorePhones.bind(this, phoneAd._id)} />
                    &nbsp;
                    <input type="button" value="Edit"
                           onClick={this.props.oneditPhones.bind(this, phoneAd._id)} />
                    &nbsp;
                    <input type="button" value="Delete"
                           onClick={this.props.ondeletePhones.bind(this, phoneAd._id)} />
                </td>
            );
    }
    getPcActions(pcAd) {

        return (
            <td>
                <input type="button" value="See More"
                       onClick={this.props.onseemorePcs.bind(this, pcAd._id)} />
                &nbsp;
                <input type="button" value="Edit"
                       onClick={this.props.oneditPcs.bind(this, pcAd._id)} />
                &nbsp;
                <input type="button" value="Delete"
                       onClick={this.props.ondeletePcs.bind(this, pcAd._id)} />
            </td>
        );
    }
    getOtherActions(otherAd) {

        return (
            <td>
                <input type="button" value="See More"
                       onClick={this.props.onseemoreOther.bind(this, otherAd._id)} />
                &nbsp;
                <input type="button" value="Edit"
                       onClick={this.props.oneditOther.bind(this, otherAd._id)} />
                &nbsp;
                <input type="button" value="Delete"
                       onClick={this.props.ondeleteOther.bind(this, otherAd._id)} />
            </td>
        );
    }

}
