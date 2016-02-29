function Punkt (x, y){
	this.x = x;
	this.y = y;

	this.getXYAsStr = function(){
		var str = "(x = " + this.x + ", ";
		str += "y = " + this.y + ")";
		return str;
	}
}
var punkty = new Punkt (1, 2);
document.write("Zawartość tablicy punkty: <br />");
for(var i = 0;  i < 10; i++){
	document.write("punkty [" + i +"] : " + punkty[i].getXYAsStr());
	document.write("<br />");
}
