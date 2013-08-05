var apiURL = "http://172.16.126.154:3001/";
var app = {
     // Application Constructor
 initialize: function() {
     this.bindEvents();
 },
     // Bind Event Listeners
     //
     // Bind any events that are required on startup. Common events are:
     // 'load', 'deviceready', 'offline', and 'online'.
 bindEvents: function() {
     document.addEventListener('deviceready', this.onDeviceReady, false);
 },
     // deviceready Event Handler
     //
     // The scope of 'this' is the event. In order to call the 'receivedEvent'
     // function, we must explicity call 'app.receivedEvent(...);'
 onDeviceReady: function() {
     app.receivedEvent('deviceready');
 },
     // Update DOM on a Received Event
 receivedEvent: function(id) {
//     var parentElement = document.getElementById(id);
//     var listeningElement = parentElement.querySelector('.listening');
//     var receivedElement = parentElement.querySelector('.received');
//     
//     listeningElement.setAttribute('style', 'display:none;');
//     receivedElement.setAttribute('style', 'display:block;');
     var userAPI = apiURL+"api/users/1?callback=?";
     $.getJSON( userAPI, {
            format: "json"
     })
     .done(function( data ) {
           console.log(data.email);
     });
//     console.log('Received Event: ');
 }
 };