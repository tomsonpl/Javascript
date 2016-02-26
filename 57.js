var tab1 = Array(5,7,3,1,8,2,0,4,9,6);
var tab2 = Array('jeden', 'dwa', 'trzy', 'cztery', 'piec');
document.write('Zawartość tablic przed sortowaniem: <br />');
document.write(tab1.join(" "));
document.write("<br />");
document.write(tab2.join(" "));

tab1.sort();
tab2.sort();

document.write('Zawartość tablic po sortowaniu: <br />');
document.write(tab1.join(" "));
document.write("<br />");
document.write(tab2.join(" "));