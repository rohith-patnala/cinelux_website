
document.addEventListener('DOMContentLoaded',()=>{
 const body=document.body, nav=document.querySelector('.main-nav'), toggle=document.querySelector('.menu-toggle');
 // Mark the current navigation destination and its Home dropdown parent.
 const currentFile=(location.pathname.split('/').pop()||'index.html').toLowerCase();
 document.querySelectorAll('.main-nav a[href]').forEach(link=>{
   const target=(link.getAttribute('href')||'').split('/').pop().toLowerCase();
   if(target && target===currentFile){link.classList.add('active');link.setAttribute('aria-current','page');}
 });
 const savedMode=localStorage.getItem('cinelux-mode'); if(savedMode==='dark')body.classList.add('dark-mode');
 const modeBtn=document.querySelector('[data-mode-toggle]');
 if(modeBtn){const paint=()=>{modeBtn.innerHTML=body.classList.contains('dark-mode')?'<i data-lucide="sun"></i>':'<i data-lucide="moon"></i>'; if(window.lucide)lucide.createIcons();};paint();modeBtn.addEventListener('click',()=>{body.classList.toggle('dark-mode');localStorage.setItem('cinelux-mode',body.classList.contains('dark-mode')?'dark':'light');paint();});}
 const rtlBtn=document.querySelector('[data-rtl-toggle]');
 if(rtlBtn){if(localStorage.getItem('cinelux-dir')==='rtl')document.documentElement.dir='rtl';rtlBtn.addEventListener('click',()=>{document.documentElement.dir=document.documentElement.dir==='rtl'?'ltr':'rtl';localStorage.setItem('cinelux-dir',document.documentElement.dir);});}
 if(toggle&&nav)toggle.addEventListener('click',()=>{nav.classList.toggle('open');toggle.setAttribute('aria-expanded',nav.classList.contains('open'));});
 document.querySelectorAll('.nav-dropdown > .nav-trigger').forEach(link=>link.addEventListener('click',()=>{ /* Home remains a working link on every screen size. */ }));
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
 document.querySelectorAll('form[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const note=form.querySelector('.form-status');if(note)note.textContent='Thank you — your enquiry is ready. Connect this form to your booking service to receive submissions.';form.reset();}));
 if(window.lucide)lucide.createIcons();
 const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');io.unobserve(entry.target)}}),{threshold:.12});
 document.querySelectorAll('.scroll-reveal').forEach(el=>io.observe(el));
});
