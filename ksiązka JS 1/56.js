var tab =[1,2,3,4,5,6,7,8,9,10];
document.write("Pierwotna zawartość tablicy: ");
document.write(tab.join(" "));


/*pokazuje a zarazem usuwa ostatni element tablicy*/
val = tab.pop();
document.write("<br /> Wynik pierwszej operacji pop: ");
document.write(val);

val = tab.pop();
document.write("<br /> Wynik drugiej operacji pop: ");
document.write(val);

document.write("<br /> Aktualna zawartość tablicy: ");
document.write(tab.join(" "));

// pokazuje i usuwa pierwszy element tablicy

val = tab.shift();
document.write("<br /> Wynik pierwszej operacji shift: " );
document.write(val);

val = tab.shift();
document.write("<br /> Wynik drugiej operacji shift: " );
document.write(val);

document.write("<br /> Aktualna zawartość tablicy: ");
document.write(tab.join(" "));

/*dodaje na koncu 2 elementy o wartosci (x,y)
*/
tab.push ("x","y");
document.write("<br /> Zawartość tablicy po operacji push: ");
document.write(tab.join(" "));

/*dodaje na początku 2 elementy o wartosci (z,s)*/

tab.unshift ("z","s");
document.write("<br /> Zawartość tablicy po operacji unshift: ");
document.write(tab.join(" "));
