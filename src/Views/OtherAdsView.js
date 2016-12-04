import React, { Component } from 'react';

export default class OtherAdsView extends Component {
    render() {
        let otherAdsRows = this.props.otherAds.map(ad =>
            <tr key={ad._id}>
                <td><img src={ad.imageURL} role="presentation" ></img></td>
                <td>{ad.title}</td>
                <td>{ad.description}</td>
                <td>{ad.phoneNumber}</td>
                {this.getActions(ad)}
            </tr>
        );

        return (
            <div className="otherAdsAds-view">
                <h1>Other Adverts</h1>
                <table className="otherAdsAds-table">
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Specifications</th>
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

    getActions(ad) {
        if (ad._acl.creator === sessionStorage.getItem('userId'))
            return (
                <td>
                    <input type="button" value="See More"
                    onClick={this.props.onseemore.bind(this, ad._id)} />
                    &nbsp;
                    <input type="button" value="Edit"
                           onClick={this.props.onedit.bind(this, ad._id)} />
                    &nbsp;
                    <input type="button" value="Delete"
                           onClick={this.props.ondelete.bind(this, ad._id)} />
                </td>
            );
        else
            return (<td>
                <input type="button" value="See More"
                onClick={this.props.onseemore.bind(this, ad._id)} />
            </td>);
     }
}


