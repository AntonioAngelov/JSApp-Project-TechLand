import $ from 'jquery'

let OtherAdsRequester = (function () {
    const baseUrl = "https://baas.kinvey.com/";
    const appKey = "kid_r1jz3egXg";
    const appSecret = "3f96351ca9324ff6a85eb54815bc5e95";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(appKey + ":" + appSecret),
    };

    function loadAds() {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey +  '/books',
            headers: getKinveyUserAuthHeaders()
        });
    }

    function createAd(book) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "appdata/" + appKey + "/books",
            headers: getKinveyUserAuthHeaders(),
            data: book
        });
    }

    function findAdById(bookId) {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey +  '/books/' + bookId,
            headers: getKinveyUserAuthHeaders()
        });
    }

    function editAd(bookId, title, author, description) {
        return $.ajax({
            method: "PUT",
            url: baseUrl + "appdata/" + appKey +  '/books/' + bookId,
            headers: getKinveyUserAuthHeaders(),
            data:{title, author, description}
        });
    }

    function deleteAdById(bookId) {
        return $.ajax({
            method: "DELETE",
            url: baseUrl + "appdata/" + appKey +  '/books/' + bookId,
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