var agent = navigator.userAgent.toLowerCase();
var nazwa = "nieznany";
if(agent.indexOf('firefox') != -1) {
  nazwa = "Firefox";
}
if(agent.indexOf("opera") != -1) {
  nazwa = "Opera";
}
if(agent.indexOf("chrome") != -1) {
  nazwa = "Chrome";
}
if(agent.indexOf("msie") != -1) {
  nazwa = "Internet Explorer";
}
document.write("Twoja przeglądarka to" + nazwa);
