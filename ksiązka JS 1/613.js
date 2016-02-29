function Punkt(x,y){
	this.x = x;
	this.y = y;
}

Punkt.prototype.odleglosc = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
}
var punkt1 = new Punkt(3,4);
var punkt2 = new Punkt(4,5);
punkt2.odleglosc = function(){
	return 0;
}
document.write(punkt1.odleglosc() + " ");
document.write(punkt2.odleglosc());
