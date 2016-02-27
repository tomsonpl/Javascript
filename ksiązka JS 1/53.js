var liczby = [];
var ile = 10;
var indP = 0, indN = 5;
for(var i=1; i <= ile; i++){
	if(i % 2 == 0){
		liczby[indP++] = i;
	}
	else{
	liczby[indN++] = i;
	}
}
for(var i = 0; i< liczby.length; i++){
	document.write(liczby[i] + " ");
}