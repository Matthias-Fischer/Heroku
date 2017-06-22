/*
Aufgabe: 10 - Client Server
Name: Matthias Fischer
Datum: 22.06.2017
Matrikel: 255035
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
"use strict";
console.log("Server starting");
const Http = require("http");
const Url = require("url");
let port = process.env.PORT;
if (port == undefined)
    port = 8100;
let server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);
function handleListen() {
    console.log("Listening on port: " + port);
}
function handleRequest(_request, _response) {
    console.log("Request received");
    console.log(_request.url);
    let query = Url.parse(_request.url, true).query;
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    //Heroku-Ausgabe
    _response.write("Hallo " + query["Vorname"] + " danke fuer deine Bestellung" + "<br>" + "Deine Eisauswahl:" + "<br>");
    _response.write("Vanille: " + query["Vanille"] + "<br>");
    _response.write("Schokolade: " + query["Schokolade"] + "<br>");
    _response.write("Erdbeere: " + query["Erdbeere"] + "<br>");
    _response.write("Haselnuss: " + query["Haselnuss"] + "<br>");
    _response.write("Joghurt: " + query["Joghurt"] + "<br>");
    _response.write("Banane: " + query["Banane"] + "<br>");
    _response.write("Zitrone: " + query["Zitrone"] + "<br>");
    _response.write("<br>");
    _response.write("Darreichungsform ist: " + query["darbietung"] + "<br>");
    _response.write("Toppings: " + query["topping"] + "<br>");
    _response.write("Lieferoption: " + query["delivery"] + "<br>");
    _response.write("Die Bestellung wird an " + query["Strasse"] + query["Ort"] + " gesendet <br>");
    _response.end();
}
//# sourceMappingURL=NodeTest.js.map