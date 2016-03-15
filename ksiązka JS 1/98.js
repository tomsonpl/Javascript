for(indeks in location){
  if(typeof location[indeks] != "function"){
    document.write(indeks + ": <b>" + location[indeks] + "</b><br />");
  }
}
