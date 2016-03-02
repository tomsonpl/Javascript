function podziel(arg1, arg2) {
	if(arg2 == 0){
		throw new Error("Nie mogę dzielic przez zero!");
	}
	return arg1/arg2;
}
try{
	var wynik = podziel(12,0);
	document.write("12/0 = " + wynik);
}
finally{
	document.write("Blok finally. Wartoś zmiennej wynik = " + wynik);
}
document.write("Ta instrukcja znajduje się za blokiem try...finally");
