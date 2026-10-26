const secs=[...document.querySelectorAll('details.sec')],all=[...document.querySelectorAll('details')];
function openTo(n){const d=document.getElementById('s'+n);if(d){d.open=true;d.scrollIntoView({behavior:'smooth',block:'start'});try{history.replaceState(null,'','#s'+n)}catch(e){}}}
document.addEventListener('click',e=>{const a=e.target.closest('a[data-s]');if(a){e.preventDefault();openTo(a.dataset.s)}});
document.getElementById('ex').onclick=()=>all.forEach(d=>d.open=true);
document.getElementById('co').onclick=()=>all.forEach(d=>d.open=false);
const q=document.getElementById('q'),leaf='li,p,tr';
function clearMarks(){document.querySelectorAll('mark').forEach(m=>m.replaceWith(m.textContent));document.querySelectorAll('.body').forEach(b=>b.normalize())}
function mark(el,t){const w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);const hit=[];while(w.nextNode()){if(w.currentNode.nodeValue.toLowerCase().includes(t))hit.push(w.currentNode)}hit.forEach(n=>{const v=n.nodeValue,i=v.toLowerCase().indexOf(t),m=document.createElement('mark');m.textContent=v.substr(i,t.length);n.replaceWith(document.createTextNode(v.slice(0,i)),m,document.createTextNode(v.slice(i+t.length)))})}
q.oninput=()=>{const t=q.value.trim().toLowerCase();clearMarks();document.querySelectorAll('.hide').forEach(e=>e.classList.remove('hide'));
 if(!t){return}
 let any=false;
 secs.forEach(s=>{let hit=false;
  s.querySelectorAll('.body li,.body>p,tbody tr').forEach(el=>{const m=el.textContent.toLowerCase().includes(t);if(!m)el.classList.add('hide');else{hit=true;if(!el.querySelector('li,tr'))mark(el,t)}});
  s.querySelectorAll('details.sub').forEach(d=>{const has=!!d.querySelector('li:not(.hide),tbody tr:not(.hide)');if(!has)d.classList.add('hide');else d.open=true});
  s.querySelectorAll('.tw').forEach(w=>{if(!w.querySelector('tbody tr:not(.hide)'))w.classList.add('hide')});
  s.querySelectorAll('ul').forEach(u=>{if(!u.querySelector('li:not(.hide)'))u.classList.add('hide')});
  if(s.querySelector('summary .t').textContent.toLowerCase().includes(t)){hit=true}
  if(hit){s.open=true;any=true}else s.classList.add('hide')});
 document.getElementById('none').style.display=any?'none':'block'};
if(location.hash){const m=location.hash.match(/^#s(\d+)$/);if(m)setTimeout(()=>openTo(m[1]),50)}
