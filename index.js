import CountdownTimer from './timer.js'

const refs = {
  selector: document.querySelector("#timer-1"),
  days: document.querySelector("[data-value=days]"),
  hours: document.querySelector("[data-value=hours]"),
  mins: document.querySelector("[data-value=mins]"),
  seconds: document.querySelector("[data-value=secs]"),
};

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("June 28, 2021 23:59:59"),
  onTick: updateClockface,
});

timer.start();

function updateClockface({ days, hours, mins, secs }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.seconds.textContent = `${secs}`;
}