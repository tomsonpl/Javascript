function obliczenia (argument1, argument2)
{
	function kwadrat(argument)
	{
		return argument * argument;
	}
	return kwadrat(argument1) + kwadrat(argument2);
}
var wynik = obliczenia(2, 4);
document.write ("Suma kwadratów 2 i 4 to " + wynik);