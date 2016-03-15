function Osoba(imie, nazwisko, adres){
	this.imie = imie;
	this.nazwisko = nazwisko;
	this.adres = adres;
}
var osoby = [];
osoby[0] = new Osoba("Jan", "Kowalski", "brzozowa 1 ");
osoby[1] = new Osoba("Tomek", "petruk", "akacjowa 2");
osoby[2] = new Osoba("Kamil", "swir", "wierzbowa 3");

document.write("Zawartość tablicy osoby: <br /><br />");
for(var i = 0; i < osoby.length; i++){
	document.write("Indeks " + i + "<br />")
	for(var property in osoby[i]){
		document.write("&nbsp");
		document.write(property + " : " + osoby[i][property]);
		document.write("<br />");
	}
	document.write("<br />");
}