import $ from 'jquery'

let PcAdsRequester = (function () {
    const baseUrl = "https://baas.kinvey.com/";
    const appKey = "kid_r1jz3egXg";

    function loadPcAds() {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey +  '/pcAds',
            headers: getKinveyUserAuthHeaders()
        });
    }

    function createPcAd(imageURL,title,description,phoneNumber) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "appdata/" + appKey + "/pcAds",
            headers: getKinveyUserAuthHeaders(),
            data: {imageURL,title,description,phoneNumber}
        });
    }

    function findPcAdById(adId) {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey +  '/pcAds/' + adId,
            headers: getKinveyUserAuthHeaders()
        });
    }

    function editPcAd(adId, title, imageUrl, description, phoneNumber) {
        return $.ajax({
            method: "PUT",
            url: baseUrl + "appdata/" + appKey +  '/pcAds/' + adId,
            headers: getKinveyUserAuthHeaders(),
            data:{title, description, imageUrl, phoneNumber}
        });
    }

    function deletePcAdById(adId) {
        return $.ajax({
            method: "DELETE",
            url: baseUrl + "appdata/" + appKey +  '/pcAds/' + adId,
            headers: getKinveyUserAuthHeaders(),
        });
    }

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }

    return {
        loadPcAds,
        createPcAd,
        findPcAdById,
        editPcAd,
        deletePcAdById
    }
})();

export default PcAdsRequester;