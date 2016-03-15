function func(){
	document.write("Treśc generowana przez funkcję func.");
}
var wynik = eval("(6+7*2)/ 5");
document.write("Wynik przetwarzania wyrażenia (6+7*2)/5 = ");
document.write(wynik);
document.write("<br />");
eval("func()");
