window.addEventListener('load', () => {
  const overlay = document.getElementById('overlay');
  setTimeout(() => { 
    overlay.style.display='none'; 
    document.getElementById('content').style.opacity='1'; 
    revealSections(); 
  }, 4000);
});

// Contador
const countdown = () => {
  const countDate = new Date('December 15, 2025 21:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;
  const second=1000, minute=second*60, hour=minute*60, day=hour*24;
  const d=Math.floor(gap/day);
  const h=Math.floor((gap%day)/hour);
  const m=Math.floor((gap%hour)/minute);
  const s=Math.floor((gap%minute)/second);
  document.getElementById('contador').innerHTML = `${d}d ${h}h ${m}m ${s}s`;
};
setInterval(countdown,1000);

// Scroll reveal
const revealSections = () => {
  const sections = document.querySelectorAll('.section');
  const reveal = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if(sectionTop < triggerBottom){section.classList.add('visible');}
    });
  };
  window.addEventListener('scroll', reveal);
  reveal(); // inicial
};
