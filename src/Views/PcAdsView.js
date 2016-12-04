import React, { Component } from 'react';

export default class PcAdsView extends Component {
    render() {
        let pcAdsRows = this.props.pcAds.map(pcAd =>
            <tr key={pcAd._id}>
                <td><img src={pcAd.imageURL} role="presentation"></img></td>
                <td>{pcAd.title}</td>
                <td>{pcAd.description}</td>
                <td>{pcAd.phoneNumber}</td>
                {this.getActions(pcAd)}
            </tr>
        );

        return (
            <div className="pcAds-view">
                <h1>PC Adverts</h1>
                <table className="pcAds-table">
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
                    {pcAdsRows}
                    </tbody>
                </table>
            </div>
        );
    }

    getActions(pcAd) {
     if (pcAd._acl.creator === sessionStorage.getItem('userId'))
     return (
     <td>
         <input type="button" value="See More"
                onClick={this.props.onseemore.bind(this, pcAd._id)} />
         &nbsp;
         <input type="button" value="Edit"
                onClick={this.props.onedit.bind(this, pcAd._id)} />
         &nbsp;
         <input type="button" value="Delete"
                onClick={this.props.ondelete.bind(this, pcAd._id)} />
     </td>);
     else
     return(<td>
         <input type="button" value="See More"
                onClick={this.props.onseemore.bind(this, pcAd._id)} />
     </td>);
     }
}


