var liczby = [];
for(var i = 0; i < 15; i++){
	liczby[i] = i + 1;
}

for(var i = 0; i < liczby.length; i++){
	document.write(liczby[i]+ " ");
}
for(var i = 0; i < 20; i++){
	liczby[i] = 100 - i;
}
document.write("<br />");
for(var i = 0; i < liczby.length; i++){
	document.write(liczby[i]+ " ");
}