(function(){
var y=document.getElementById('y');if(y)y.textContent=new Date().getFullYear();
var enq=document.getElementById('enquiry');
if(enq)enq.addEventListener('submit',function(e){
e.preventDefault();
var v=function(i){return document.getElementById(i).value.trim()};
var t='Hello NOIR, I would like a consultation.\nName: '+v('f-name')+'\nPhone: '+(v('f-phone')||'not given')+'\nProperty: '+v('f-prop')+'\nReason: '+v('f-reason')+(v('f-msg')?'\nDetails: '+v('f-msg'):'');
window.open('https://wa.me/2347057999295?text='+encodeURIComponent(t),'_blank','noopener');
});
var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(rm)return;
if('IntersectionObserver' in window){
var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){var el=x.target;el.classList.add('in');io.unobserve(el);setTimeout(function(){el.style.transitionDelay=''},1600)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.head,.tl,.card,.sc,.fig,.steps div,.values>div,.ui,.four>div,.info>*,.form,.faq details,.control .eyebrow,.control h2,.control>div>p,.det-g>*,.cta2 .wrap>*').forEach(function(el){
var i=[].indexOf.call(el.parentNode.children,el);
el.classList.add('rv');el.style.transitionDelay=(i%4)*90+'ms';io.observe(el)})}
var bar=document.getElementById('bar');
if(bar)window.addEventListener('scroll',function(){var h=document.documentElement;var m=h.scrollHeight-h.clientHeight;bar.style.transform='scaleX('+(m>0?h.scrollTop/m:0)+')'},{passive:true});
var ts=document.querySelectorAll('.tiles span'),k=0;
if(ts.length)setInterval(function(){ts[k].classList.remove('on');k=(k+1)%ts.length;ts[k].classList.add('on')},2200);
})();