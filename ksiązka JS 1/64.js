function Punkt(x, y){
	this.x = x;
	this.y = y;
}

var punkty = [];
for(var i =0; i<10; i++){
	punkty[i] = new Punkt(i, i*2);
}

document.write("Zawartość tablicy punkty: <br />");
for(var i = 0; i <10; i++){
	document.write("punkty[" + i + "] = (" + punkty[i].x);
	document.write(", " + punkty[i].y + ")<br />");
}