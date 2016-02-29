function Punkt (x, y){
	this.x = x;
	this.y = y;
	
	this.getXYAsStr = function(){
		var str = "(x = " + this.x + ", ";
		str += "y = " + this.y + ")";
		return str;
	}
}
var punkt = new Punkt (1,2);
document.write("Współrzędne punktu: " + punkt.getXYAsStr());