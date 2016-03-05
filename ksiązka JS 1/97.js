var timerId= setInterval("zmienStatus()", 1000);
function zmienStatus(){
  var data = new Date();
  var godziny = data.getHours();
  var minuty = data.getMinutes();
  var sekundy = data.getSeconds();
  var czas = godziny;
  czas += ((minuty <10) ? " :0" : ":") + minuty;
  czas += ((sekundy <10) ? " :0" : ":") + sekundy;
  document.title = czas;
}
