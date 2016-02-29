var dane = [1, 2, 3, 4, 5];

document.write("Zwykła tablica: <br />");
for(var indeks in dane){
	document.write("dane[" + indeks + "] = " + dane[indeks] + "<br />");
}
dane.x = 100;
dane.func = function (){};


document.write("<br />Tablica po przejściac: <br />");
for(var indeks in dane){
	document.write("dane[" + indeks +"] = " + dane[indeks] + "<br />")
}
