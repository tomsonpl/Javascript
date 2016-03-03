function Punkt (x, y){
	this.x = x;
	this.y = y;

	this.getXYAsStr = function(){
		var str = "(x = " + this.x + ", ";
		str += "y = " + this.y + ")";
		return str;
	}
}
var punkty = [];
document.write("Zawartość tablicy punkty: <br />");
for(var i = 0;  i < 10; i++){
	punkty[i] = new Punkt (i, i+1);
	document.write("punkty [" + i +"] : " + punkty[i].getXYAsStr());
	document.write("<br />");
}
