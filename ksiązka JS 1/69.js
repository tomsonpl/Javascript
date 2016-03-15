function sumuj(){
	var suma= 0;
	for(var i =0; i <arguments.length;i++){
		suma += arguments[i];
	}
	return suma;
}
alert(sumuj(1,2,3));
