var ksiazka1 = {
	"tytul" : "JavaScript Wzorce",
	"autor" : "Stoyan Stefanov",
	"wydawnictwo": {
		"nazwa" : "OREILLY",
		"adres": "Yahoo"
	}
};

var ksiazka2 = {
	"tytul" : "Wydajny JavaScript",
	"autor" : "Nicholas C Zakas",
	"wydawnictwo" : ["OREILLY", "yahoo"]
};

document.write("Pierwsza książka: <br />");
document.write("Tytuł = " + ksiazka1.tytul + "<br />");
document.write("autor = " + ksiazka1.autor + "<br />");
document.write("nazwa wydawnictwa = " + ksiazka1.wydawnictwo.nazwa + "<br />");
document.write("adres wydawnictwa = " + ksiazka1.wydawnictwo.adres + "<br />");

document.write("Druga książka: <br />");
document.write("Tytuł = " + ksiazka2.tytul + "<br />");
document.write("autor = " + ksiazka2.autor + "<br />");
document.write("nazwa wydawnictwa = " + ksiazka2.wydawnictwo[0] + "<br />");
document.write("adres wydawnictwa = " + ksiazka2.wydawnictwo[1] + "<br />");