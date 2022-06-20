const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
//funkcja Date z JS
const data = new Date();
let JSON;
let date = ("0" + data.getDate()).slice(-2) + "." + ("0" + data.getMonth()).slice(-2) + "."
    + ("0" + data.getFullYear()).slice(-2) + " " + (data.getHours()) + ":" + (data.getMinutes()) + "."
    + ("0" + data.getSeconds()).slice(-2) // wywolanie funkcji z konstruktora Date + formatowanie
//zmienna przytrzymujaca ip pobierane z biblioteki geolocation 
let IPGeolocationAPI = require('ip-geolocation-api-javascript-sdk');
//konstruktor do API
let ipgeolocationApi = new IPGeolocationAPI("045347685f954014a2ed73c38fbca4aa", false);
//funckja przyjmujaca wartosci JSON z API i podstawiajaca pod zmienna globalna JSON
function handleResponse(json) {
    JSON = json
}
ipgeolocationApi.getGeolocation(handleResponse); // pobranie danych z adresu IP maszyny

app.get('/', function (req, res) {
    //wyswietlenie informacji o adresie, sterie i czasie na stronie glownej
    res.send(JSON.ip + "<br/>" + JSON.time_zone.name + "<br/>" + JSON.time_zone.current_time)
})

app.listen(PORT, () => { //generowanie loga z data, autorem strony i uzywanym portem
    console.log(date)
    console.log(`Mazur Przemyslaw\n
Port sewera: ${PORT}`)
})