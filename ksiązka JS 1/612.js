function Punkt(x,y){
	this.x = x;
	this.y = y;
}

Punkt.prototype.odleglosc = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
}
var punkt = new Punkt(3,4);
document.write(punkt.odleglosc());
