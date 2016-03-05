var dzien = "nieznany";
var data = new Date();
switch(data.getDay()){
  case 0 : dzien = "niedziela" ; break;
  case 1 : dzien = "poniedzialek" ; break;
  case 2 : dzien = "wtorek" ; break;
  case 3 : dzien = "sroda" ; break;
  case 4 : dzien = "czwartek" ; break;
  case 5 : dzien = "piatek" ; break;
  case 6 : dzien = "sobota" ; break;
}
document.write("Dziś jest " + dzien + ".");
