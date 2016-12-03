import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import $ from 'jquery'

//Importing Components
import NavigationBar from './Components/NavigationBar'
import Footer from './Components/Footer'

//Importing Views
import HomeView from './Views/HomeView'
import LoginView from './Views/LoginView'
import RegisterView from './Views/RegisterView'
import PhoneAdsView from './Views/PhoneAdsView'
import PcAdsView from './Views/PcAdsView'
import OtherAdsView from './Views/OtherAdsView'
import CreateAdView from './Views/CreateAdView'

//Importing Kinvey Requesters
import LoginRegisterRequester from './KinveyRequester/LoginRegisterRequester'
import PhoneAdsRequester from './KinveyRequester/PhoneAdsRequester'
import PcAdsRequester from './KinveyRequester/PcAdsRequester'
import OtherAdsRequester from './KinveyRequester/OtherAdsRequester'

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
                        loginClicked={this.showLoginView.bind(this)}
                        registerClicked={this.showRegisterView.bind(this)}
                        phonesClicked={this.showPhonesView.bind(this)}
                        pcsClicked={this.showPcsView.bind(this)}
                        otherClicked={this.showOthersView.bind(this)}
                        createAdClicked={this.showCreateAdView.bind(this)}
                        logoutClicked={this.logout.bind(this)}
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

    //Error/Info management
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

    //Saving authorization in session
    saveAuthInSession(userInfo) {
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('username', userInfo.username);

        this.setState({
            username: userInfo.username,
            userId: userInfo._id
        });
    }

    //Showing different views
    showView(reactComponent){
        ReactDOM.render(
            reactComponent,
            document.getElementById('main')
        );
        $('#errorBox').hide();
    }

    showHomeView(){
        this.showView(<HomeView/>);
    }

    showLoginView(){
        this.showView(<LoginView onsubmit={this.login.bind(this)} />)
    }

    login(username, password){
        LoginRegisterRequester.loginUser(username, password)
            .then(loginSuccess.bind(this));

        function loginSuccess(userInfo) {
            this.showInfo('Login successful.')
            this.saveAuthInSession(userInfo);
            this.showHomeView();
        }
    }
        showRegisterView() {
            this.showView(<RegisterView onsubmit={this.register.bind(this)} />);
        }

        register(username, password) {
            LoginRegisterRequester.registerUser(username, password)
                .then(registerSuccess.bind(this));

            function registerSuccess(userInfo) {
                this.saveAuthInSession(userInfo);
                this.showBooksView();
                this.showInfo("User registration successful.");
            }
        }
        //show PhoneAdsView
        showPhonesView() {
            PhoneAdsRequester.loadPhoneAds()
                .then(loadPhoneAdsSuccess.bind(this));

            function loadPhoneAdsSuccess(phoneAds) {
                this.showInfo("PhoneAds loaded.");
                this.showView(
                    <PhoneAdsView
                        phoneAds={phoneAds}
                        userId={this.state.userId}
                    />
                );
            }
        }
        //show PcAdsView
        showPcsView() {
            PcAdsRequester.loadPcAds()
                .then(loadPcAdsSuccess.bind(this));

            function loadPcAdsSuccess(pcAds) {
                this.showInfo("PcAds loaded.");
                this.showView(
                    <PcAdsView
                        pcAds={pcAds}
                        userId={this.state.userId}
                    />
                );
            }
        }
        showOthersView(){
            OtherAdsRequester.loadAds()
                .then(loadOtherAdsSuccess.bind(this));

            function loadOtherAdsSuccess(otherAds) {
                this.showInfo("OtherAds loaded.");
                this.showView(
                    <OtherAdsView
                        otherAds={otherAds}
                        userId={this.state.userId}
                    />
                );
            }
        }

    logout(){
        sessionStorage.clear();

        this.setState({
            username: null,
            userId: null
        });

        this.showHomeView();
    }
     //Create View
        showCreateAdView() {
            this.showView(<CreateAdView onsubmit={this.createAd.bind(this)} />);
        }

        createAd(image, title, description,phoneNumber,section) {
            if(section==='phoneAds')
            {
                PhoneAdsRequester.createPhoneAd(image,title,description,phoneNumber)
                    .then(createPhoneAdSuccess.bind(this));

                function createPhoneAdSuccess()
                {
                    this.showPhonesView();
                    this.showInfo("Ad created");
                }
           }

          else if(section==='pcAds')
            {
                PcAdsRequester.createPcAd(image,title,description,phoneNumber)
                    .then(createPcAdSuccess.bind(this));

                function createPcAdSuccess()
                {
                    this.showPcsView();
                    this.showInfo("Ad created");
                }
            }
            else {
                OtherAdsRequester.createAd(image,title,description,phoneNumber)
                    .then(createOtherAdSuccess.bind(this));
                function createOtherAdSuccess()
                {
                    this.showOthersView();
                    this.showInfo("Ad created");
                }
            }
        }







}

