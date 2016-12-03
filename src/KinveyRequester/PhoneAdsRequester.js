import $ from 'jquery'

let PhoneAdsRequester = (function () {
    const baseUrl = "https://baas.kinvey.com/";
    const appKey = "kid_r1jz3egXg";

    function loadPhoneAds() {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey +  '/phoneAds',
            headers: getKinveyUserAuthHeaders()
        });
    }

    function createPhoneAd(imageURL,title,description,phoneNumber) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "appdata/" + appKey + "/phoneAds",
            headers: getKinveyUserAuthHeaders(),
            data: {imageURL,title,description,phoneNumber}
        });
    }

    function findPhoneAdById(adId) {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey +  '/phoneAds/' + adId,
            headers: getKinveyUserAuthHeaders()
        });
    }

    function editPhoneAd(adId, title, imageUrl, description, phoneNumber) {
        return $.ajax({
            method: "PUT",
            url: baseUrl + "appdata/" + appKey +  '/phoneAds/' + adId,
            headers: getKinveyUserAuthHeaders(),
            data:{title, description, imageUrl, phoneNumber}
        });
    }

    function deletePhoneAdById(adId) {
        return $.ajax({
            method: "DELETE",
            url: baseUrl + "appdata/" + appKey +  '/phoneAds/' + adId,
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