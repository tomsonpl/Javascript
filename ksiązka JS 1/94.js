var i = 1, timerId;
function zmienStatus(){
  document.write(i++, + "  ");
  if(i > 10){
    clearInterval(timerId);
  }
}
timerId = setInterval("zmienStatus()", 1000);
