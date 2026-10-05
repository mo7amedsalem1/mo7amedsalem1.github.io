document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('section:not(.hero),.project,.skill-card,.profile-card').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
