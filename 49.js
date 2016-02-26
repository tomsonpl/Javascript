function obliczenia (argument1, argument2)
{
	function suma_kwadratów ()
	{
		return argument1 * argument1 + argument2 * argument2;
	}
	return suma_kwadratów();
}
var wynik = obliczenia(2, 4);
document.write ("Suma kwadratu 2 i 4 to: " + wynik );