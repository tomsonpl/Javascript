var tab1 = new Array();
var tab2 = new Array(2);
var tab3 = new Array (1,2,3);

document.write("liczba elementów tablicy tab1: " + tab1.length);
document.write("<br/> Zawartość tablicy tab1: " + "<br/>");
for(var i =0; i < tab1.length; i++){
	document.write("<br/>" + tab1[i] + " ");
}
document.write("liczba elementów tablicy tab2: " + tab2.length);
document.write("<br/> Zawartość tablicy tab2: " + "<br/>");
for(var i =0; i < tab2.length; i++){
	document.write(tab2[i] + " ");
}
document.write("liczba elementów tablicy tab3: " + tab3.length);
document.write("<br/> Zawartość tablicy tab3: " + "<br/>");
for(var i =0; i < tab3.length; i++){
	document.write(tab3[i] + " ");
}