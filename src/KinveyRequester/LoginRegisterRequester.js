/**
 * Created by anton on 03-Dec-16.
 */
import $ from 'jquery'

let LoginRegisterRequester = (function () {
    const baseUrl = "https://baas.kinvey.com/";
    const appKey = "kid_r1jz3egXg";
    const appSecret = "3f96351ca9324ff6a85eb54815bc5e95";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(appKey + ":" + appSecret),
    };

    function loginUser(username, password) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/login",
            headers: kinveyAppAuthHeaders,
            data: {username, password}
        });
    }

    function registerUser(username, password) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey,
            headers: kinveyAppAuthHeaders,
            data: {username, password}
        });
    }

    return {
        loginUser,
        registerUser
    }
})();

export default LoginRegisterRequester;