window.addEventListener('load', () => {
  const overlay = document.getElementById('overlay');
  setTimeout(() => { overlay.style.display = 'none'; }, 5000);
});

const countdown = () => {
  const countDate = new Date("December 15, 2025 21:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000; const minute = second * 60;
  const hour = minute * 60; const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  document.getElementById('contador').innerHTML = `${d}d ${h}h ${m}m ${s}s`;
};
setInterval(countdown, 1000);
