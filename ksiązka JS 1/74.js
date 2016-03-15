function podziel(arg1, arg2) {
	if(arg2 == 0){
		throw new Error("Nie mogę dzielic przez zero!");
	}
	return arg1/arg2;
}
try{
	var wynik = podziel(12, 0);
	document.write("12/0=" + wynik);
}
catch(e){
	document.write("wystąpił błąd: " + e.message);
}
