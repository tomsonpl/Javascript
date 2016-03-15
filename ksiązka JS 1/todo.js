var ciag1 = "12.8";
var ciag2 = "8.2";

var wynik = ciag1 + ciag2;

document.write("Przed konwersją wynikiem dodawania ciag1 + ciag2 jest ");
document.write(wynik);

ciag1 = parseFloat(ciag1);
ciag2 = parseFloat(ciag2);
wynik = ciag1 + ciag2;

document.write(". <br />");
document.write("Pokonwersji wynikiem dodawania ciag1 + ciag2 jest ");
document.write(wynik);
document.write(". <br />");
