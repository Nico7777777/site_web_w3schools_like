var suma=0;
var elem=document.getElementById("mainframe");
suma+= parseInt(window.getComputedStyle(elem).getPropertyValue("height"));

elem=document.getElementById("mainline");
suma+= parseInt(window.getComputedStyle(elem).getPropertyValue("height"));

elem=document.getElementById("navbar");
suma+= parseInt(window.getComputedStyle(elem).getPropertyValue("height"));

var inaltime=window.innerHeight;


var primul_loc_e_doar_inceputul=document.getElementById("maincontent").getAttribute("height");
if(primul_loc_e_doar_inceputul<inaltime-suma)
	document.getElementById("maincontent").setAttribute("height",inaltime-suma);