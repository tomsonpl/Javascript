var dodaj = function(wart1, wart2)
{
	var wynik= wart1 + wart2;
	return wynik;
}
var wywolaj = dodaj;
var wartosc = wywolaj (11, 21);
document.write ("Wynikiem dodawania 11+21 jest " + wartosc + " .");