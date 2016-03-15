function dodaj(arg1,arg2){
	return arg1 + arg2;
}
var val1 = 10, val2 = 20;
var str =  "dodaj(" + val1 + "," + val2 + ")";

document.write("Wynik przetwarzania wyrażenia " + str + " to ");
var wynik = eval(str);
document.write(wynik);
