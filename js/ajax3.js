/**
 * @file ajax3.js
 * @author Juan Manuel Toscano Reyes <jtoscanoreyes.guadalupe@alumnado.fundacionloyola.net>
 * @license GPL V.3.0
 */
'use strict'

function ejercicio3(){
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=f02e43b0&t=+Star%20Wars') //Hacemos la petición
        .then(respuesta => respuesta.json())  //Recibimos un objeto de tipo Response. respuesta.text devuelve una Promise
        .then(objeto => document.getElementById('span1').innerHTML = objeto.Director)
}
function ejercicio2(){
    const xhttp=new XMLHttpRequest()
    xhttp.onload=function(){
        document.getElementById('span2').innerHTML=this.responseXML
    }
    xhttp.open('GET','https://api.tutiempo.net/xml/?lan=es&apid=zwDX4azaz4X4Xqs&ll=40.4178,-3.7022','true')
    xhttp.send()
}