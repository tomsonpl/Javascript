var tab1 = new Array();
var tab2 = new Array(2);
var tab3 = new Array (1,2,3);

document.write("liczba elementów tablicy tab1: " + tab1.length);
document.write("<br/> Zawartość tablicy tab1: " + tab1.join(";"));

document.write("liczba elementów tablicy tab2: " + tab2.length);
document.write("<br/> Zawartość tablicy tab2: " + tab2.join("heh"));

document.write("liczba elementów tablicy tab3: " + tab3.length);
document.write("<br/> Zawartość tablicy tab3: " + tab3.join(",,,"));
