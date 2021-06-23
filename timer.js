export default class CountdownTimer {
  constructor({ selector, targetDate, onTick }) {
    this.selector = selector;
    this.intervalId = null;
    this.targetDate = targetDate.getTime();
    this.onTick = onTick;
  }

  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  start() {
    this.intervalId = setInterval(() => {
      const now = Date.now();
      const deltaTime = this.targetDate - now;

      if (deltaTime <= 0) {
        this.stop();
        return;
      }
      const time = this.getTimeComponents(deltaTime);
      this.onTick(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}