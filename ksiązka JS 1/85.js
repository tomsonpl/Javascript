var tab = ["123", "abc", "321abc", "abc321", "13.36"];
for(var i= 0; i < tab.length; i++){
  var val = parseInt(tab[i]);
  if(isNaN(val)){
    document.write("Ciąg \"" + tab[i] + "\" nie jest liczbą. ");
  }
  else{
    document.write("Ciąg \"" + tab[i] + "\"  jest liczbą. ");
  }
  document.write("Wynik konwersji: " + val + "<br />");
}
