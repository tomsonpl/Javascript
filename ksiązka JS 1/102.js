var i = 0;
var timerId = setInterval("zmienTekst();", 250);
function zmienTekst(){
  var div = document.getElementById("warstwa1");
  div.innerHTML = i;
  if(++i > 10){
    clearInterval(timerId);
  }
}
