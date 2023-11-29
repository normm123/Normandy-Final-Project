/*
    Student Name: Normandy Carter
    File Name: script.js
    Date: 11/24/2023
*/
//jQuery for hero image to consume the header window space
$(document).ready(function(){
    $('.hero').height($(window).height());
});

function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

