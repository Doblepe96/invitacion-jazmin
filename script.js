const fechaEvento = new Date("Dec 20, 2025 22:00:00").getTime();
const countdown = document.getElementById("countdown");

const timer = setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  countdown.innerHTML = `⏳ Faltan: ${dias}d ${horas}h ${minutos}m ${segundos}s`;

  if (diferencia < 0) {
    clearInterval(timer);
    countdown.innerHTML = "🎉 ¡La fiesta ha comenzado!";
  }
}, 1000);