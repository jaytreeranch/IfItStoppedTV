const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const nav=document.getElementById('site-nav');
const onScroll=()=>nav.classList.toggle('scrolled',window.scrollY>18);
onScroll();window.addEventListener('scroll',onScroll,{passive:true});
if(!reduced&&'IntersectionObserver' in window){
  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('on');io.unobserve(entry.target)}
  }),{threshold:.1,rootMargin:'0px 0px -28px'});
  document.querySelectorAll('.hero-copy,.hero-art,.chain,.scenario-grid article,.method-grid article,.resilience-inner,.cta').forEach(el=>{el.classList.add('reveal');io.observe(el)});
}

document.addEventListener('focusin',event=>{const el=event.target;if(el instanceof Element&&el.matches('.button'))el.classList.add('keyboard-focus')});
document.addEventListener('focusout',event=>{const el=event.target;if(el instanceof Element&&el.matches('.button'))el.classList.remove('keyboard-focus')});
