try{
	document.write("Blok try przed wygenerowaniem wyjątku<br />");
	throw Error("Błąd wygenerowany w celach testowych");
	document.write("Blok try po wygenerowaniu wyjątku<br />");
}
catch(e){
	document.write("Wyjątek został przechwycony. <br />");
	document.write("Nazwa wyjątku: " + e.name + "<br />");
	document.write("Komunikat wyjątku: " + e.message + "<br />");
	document.write("Wyjątek został przechwycone.wię skrypt nadal działą <br />");
}
