// ==UserScript==
// @name         Graylog Dashboards Rotator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://GRAYLOG-URL/dashboards/*
// @grant        none
// @grant        unsafeWindow
// @run-at       document-idle
// ==/UserScript==

var rotationIndex;

//Определение списка URL адресов дашбордов
var URL_LIST = [
    "http://GRAYLOG-URL/dashboards/page-id", //1. Dashboard 1
    "http://GRAYLOG-URL/dashboards/page-id", //2. Dashboard 2
    "http://GRAYLOG-URL/dashboards/page-id", //3. Dashboard 3
    "http://GRAYLOG-URL/dashboards/page-id", //4. Dashboard 4
];

//Провеляем наличие индекса дашборда в cookie
if(+getCookie("rotationIndex") < URL_LIST.length-1) {
	rotationIndex = +getCookie("rotationIndex");
	rotationIndex++;
} else {
	//Если не найдено, начинаем с начала списка URL адресов 
	rotationIndex = 0;
}

var ROTATION_TIME;

//Проверяем наличие параметра "ROTATION_TIME" в cookie
if(+getCookie("ROTATION_TIME")) {
	ROTATION_TIME = +getCookie("ROTATION_TIME");
} else {
	//Если не найдено, присваиваем значение по умолчанию
	ROTATION_TIME = 60;
	document.cookie = "ROTATION_TIME="+ROTATION_TIME;
}

//Итерации URL адресов 
var rotatorId = setTimeout( function URLRotator() {

    document.location.href=URL_LIST[rotationIndex];
	
    document.cookie = "rotationIndex=" + rotationIndex;
	
    //console.log("NOW: "+rotationIndex);

    rotatorId = setTimeout(URLRotator, ROTATION_TIME*1000);
}, ROTATION_TIME*1000);

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}