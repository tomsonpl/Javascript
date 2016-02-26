function func1() {
	liczba = 124;
	document.write ("wartość zmiennej w funkcji func1: " + liczba);
}
function func2(){
	document.write ("wartość zmiennej w funkcji func2 " + liczba);
}

//func2();

//document.write ("wartość ziennej poza funkcjami(1): " + liczba);

func1();
document.write ("<br />")

func2();
document.write ("<br />");
document.write ("wartość zmiennej poza funkcjami: " + liczba);