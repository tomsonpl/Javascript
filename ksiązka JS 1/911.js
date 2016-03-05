for(indeks in navigator){
  if(typeof navigator[indeks] != "function"){
    document.write(indeks + ": <b>" + navigator[indeks] + "</b><br />");
  }
}
