try{
	throw Error("Błąd wygenerowany w celach testowych");
}
catch(e){
	document.write("Wyjątek został przechwycony.<br />");
	document.write("Nazwa wyjątku: " + e.name + "<br />");
	document.write("Komunikat wyjątku: " + e.message + "<br />");
	e.message = "Nie chcę obsługiwa tego wyjątku.";
	throw e;
}
document.write("Ta instrukcja znajduje się za blokiem try...catch.<br />");
