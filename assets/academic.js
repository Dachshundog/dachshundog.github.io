const toggle=document.querySelector('.menu-toggle');
const nav=document.getElementById('site-navigation');
function closeMenu(){nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';nav.classList.toggle('is-open',open);toggle.setAttribute('aria-expanded',String(open));});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}});
nav.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
window.matchMedia('(min-width:701px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
document.querySelectorAll('[data-copy-email]').forEach(button=>{let timer;button.addEventListener('click',async()=>{const status=button.nextElementSibling;clearTimeout(timer);try{await navigator.clipboard.writeText('xijiahe@stu.pku.edu.cn');status.textContent='Copied!';}catch{status.textContent='Please copy the email address above.';}timer=setTimeout(()=>status.textContent='',2600);});});
