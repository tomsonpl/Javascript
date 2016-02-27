function porównaj(e1,e2){
	if(e1 % 2 == 0){
		if(e2 % 2 == 0){
			return e1 - e2;
		}else{
			return -1;
		}
	}else{
		if(e2 % 2 == 0){
			return 1;
		}else{
			return e1 - e2;
		}
	}
}

var tab = Array(5,7, 3, 1, 8, 2, 0, 4, 9, 6);

document.write("Zawartość tablicy przed sortowaniem: <br />");
document.write(" " + tab.join());

tab.sort(porównaj);

document.write("Zawartość tablicy po sortowaniu: <br />");
document.write(" " + tab.join());

