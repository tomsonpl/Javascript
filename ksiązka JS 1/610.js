function dzialanie (arg1, arg2, func){
	var wynik = func(arg1, arg2);
	return wynik * wynik;
}
var liczba = dzialanie(1, 2, function(val1, val2){
	return val1 + val2;
});
alert(liczba);
