const baseUrl = "https://baas.kinvey.com/";
const appKey = "kid_r1jz3egXg";
const appSecret = "3f96351ca9324ff6a85eb54815bc5e95";
const kinveyAppAuthHeaders = {
    'Authorization': "Basic " + btoa(appKey + ":" + appSecret),
};