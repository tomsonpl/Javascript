var ciag1 = "12";
var ciag2 = "8";

var wynik = ciag1+ ciag2;

document.write("Przed konwersją wynikiem dodawana ciag1 + ciag2 jest");
document.write(wynik);

ciag1 = parseInt(ciag1);
ciag2 = parseInt(ciag2);
wynik = ciag1+ciag2;

document.write(" ,<br />");
document.write("Po konwersji wynikiem dodawania ciag1 + ciag2 jest ");
document.write(wynik);
document.write(", <br />");
