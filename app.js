const hourHand = document.getElementById("hours");
const minuteHand = document.getElementById("minutes");
const secondHand = document.getElementById("seconds");

function setClock() {
  const currentDate = new Date();
  const secondRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
  work(hourHand, hourRatio);
  work(minuteHand, minuteRatio);
  work(secondHand, secondRatio);
}
function work(element, ratio) {
  element.style.setProperty("--rotation", ratio * 360);
}
setInterval(setClock, 1000);
setClock();

//=============================================//
function dark() {
  var elClock = document.getElementById("changer");
  var element = document.body;
  element.classList.toggle("dark-mode");
  elClock.classList.toggle("dark-mode1");
}
