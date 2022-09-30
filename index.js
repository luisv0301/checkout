const hoursUI = document.getElementById("hours");
const minutesUI = document.getElementById("minutes");
const secondsUI = document.getElementById("seconds");
let today = new Date();
let tomorrow;
let tomorrowLocaleStorage = localStorage.getItem("fecha");

console.log("valor de localStorage:", tomorrowLocaleStorage);

if (tomorrowLocaleStorage) {
  tomorrow = new Date(tomorrowLocaleStorage);
} else {
  tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  localStorage.setItem("fecha", tomorrow);
}

const updateCounter = () => {
  today = new Date();
  const diff = tomorrow - today;

  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  hoursUI.innerHTML = hours < 10 ? "0" + hours : hours;
  minutesUI.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  secondsUI.innerHTML = seconds < 10 ? "0" + seconds : seconds;
};

setInterval(updateCounter, 1000);
