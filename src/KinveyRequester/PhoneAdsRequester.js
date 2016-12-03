import $ from 'jquery'

let PhoneAdsRequester = (function () {
    const baseUrl = "https://baas.kinvey.com/";
    const appKey = "kid_r1jz3egXg";
    const appSecret = "3f96351ca9324ff6a85eb54815bc5e95";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(appKey + ":" + appSecret),
    };

    function loadPhoneAds() {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey +  '/phoneAds',
            headers: getKinveyUserAuthHeaders()
        });
    }

    function createPhoneAd(imageURL,title,phoneDescription,phoneNumber) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "appdata/" + appKey + "/phoneAds",
            headers: getKinveyUserAuthHeaders(),
            data: {imageURL,title,phoneDescription,phoneNumber}
        });
    }

    function findPhoneAdById(bookId) {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey +  '/phoneAds/' + bookId,
            headers: getKinveyUserAuthHeaders()
        });
    }

    function editPhoneAd(bookId, title, author, description) {
        return $.ajax({
            method: "PUT",
            url: baseUrl + "appdata/" + appKey +  '/phoneAds/' + bookId,
            headers: getKinveyUserAuthHeaders(),
            data:{title, author, description}
        });
    }

    function deletePhoneAdById(bookId) {
        return $.ajax({
            method: "DELETE",
            url: baseUrl + "appdata/" + appKey +  '/phoneAds/' + bookId,
            headers: getKinveyUserAuthHeaders(),
        });
    }

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }

    return {
        loadPhoneAds,
        createPhoneAd,
        findPhoneAdById,
        editPhoneAd,
        deletePhoneAdById
    }
})();

export default PhoneAdsRequester;