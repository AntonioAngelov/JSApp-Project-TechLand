import $ from 'jquery'

let OtherAdsRequester = (function () {
    const baseUrl = "https://baas.kinvey.com/";
    const appKey = "kid_r1jz3egXg";

    function loadAds() {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey +  '/otherAds',
            headers: getKinveyUserAuthHeaders()
        });
    }

    function createAd(imageURL,title,description,phoneNumber) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "appdata/" + appKey + "/otherAds",
            headers: getKinveyUserAuthHeaders(),
            data: {imageURL,title,description,phoneNumber}
        });
    }

    function findAdById(adId) {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey +  '/otherAds/' + adId,
            headers: getKinveyUserAuthHeaders()
        });
    }

    function editAd(adId, title, imageUrl, description, phoneNumber) {
        return $.ajax({
            method: "PUT",
            url: baseUrl + "appdata/" + appKey +  '/otherAds/' + adId,
            headers: getKinveyUserAuthHeaders(),
            data:{title, description, imageUrl, phoneNumber}
        });
    }

    function deleteAdById(adId) {
        return $.ajax({
            method: "DELETE",
            url: baseUrl + "appdata/" + appKey +  '/otherAds/' + adId,
            headers: getKinveyUserAuthHeaders(),
        });
    }

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }

    return {
        loadAds,
        createAd,
        findAdById,
        editAd,
        deleteAdById
    }
})();

export default OtherAdsRequester;