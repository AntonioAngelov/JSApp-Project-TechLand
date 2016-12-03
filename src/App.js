import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import $ from 'jquery'

//Importing Components
import NavigationBar from './Components/NavigationBar'
import Footer from './Components/Footer'

//Importing Views
import HomeView from './Views/HomeView'

    export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: null,
            userId: null
        }
    }

    render() {
        return (
            <div className="App">
                <header>
                    <NavigationBar
                        username={this.state.username}
                        homeClicked={this.showHomeView.bind(this)}
                        // loginClicked={this.showLoginView.bind(this)}
                        // registerClicked={this.showRegisterView.bind(this)}
                        // phonesClicked={this.showPhonesView.bind(this)}
                        // pcsClicked={this.showPcsView.bind(this)}
                        // otherClicked={this.showOthersView.bind(this)}
                        // createAdClicked={this.showCreateAdView.bind(this)}
                        // logoutClicked={this.logout.bind(this)}
                    />
                    <div id="loadingBox">Loading ...</div>
                    <div id="infoBox">Info</div>
                    <div id="errorBox">Error</div>
                </header>
                <main id="main">
                </main>
                <Footer />
            </div>
        );
    }

    componentDidMount(){
        //attach global AJAX loading handler
        $(document).on({
            ajaxStart: function() { $("#loadingBox").show() },
            ajaxStop: function() { $("#loadingBox").hide() }
        });

        //attach global AJAX error handler
        $(document).ajaxError(
            this.handleAjaxError.bind(this));

        //Load state
        this.setState({
            username: sessionStorage.getItem("username"),
            userId: sessionStorage.getItem("userId")
        });

        //Show homeview at the beggining
        this.showHomeView();

        $('#errorBox, #infoBox').click(function () {
            $(this).hide();
        });
    }

    handleAjaxError(event, response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON &&
            response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        this.showError(errorMsg);
    }
    showInfo(message) {
        $('#infoBox').text(message).show();
        setTimeout(function() {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg).show();
    }


    showView(reactComponent){
        ReactDOM.render(
            reactComponent,
            document.getElementById('main')
        );
        $('#errorBox').hide();
    }

    showHomeView(){
        this.showView(<HomeView/>)
    }

}

