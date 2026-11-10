'use strict';
const C = CONFIG;
const LINKS = {github:C.github, instagram:C.instagram, whatsapp:'https://wa.me/'+C.whatsapp, email:'mailto:'+C.email, linkedin:C.linkedin, facebook:C.facebook};

/* ===== CONTENT: edit freely ===== */
const ROLES = ['AI Developer','Agentic AI Enthusiast','Software Developer','Automation Engineer','Web Developer','Mobile Application Developer'];
const STAGES = [
 ['Computer Science foundations',['Intro to computer science','Programming fundamentals','Logical thinking','Algorithms and computation']],
 ['Programming and software development',['Python','C++','JavaScript','OOP concepts','Data structures and algorithms']],
 ['Database and application development',['MySQL and SQL','Database design','CRUD operations','Business management apps','Flutter and Dart']],
 ['Web development and AI',['HTML, CSS, JavaScript','React.js','Node.js and Express','Responsive websites','APIs and integrations','Python AI apps','Chatbots and automation']],
 ['Agentic AI and practical projects',['AI agents and workflows','LangChain and LLM apps','Ollama and local models','n8n automation','Knowledge base automation','Intelligent business systems']]
];
const LEVELS = ['','Foundational','Proficient','Strong']; // 1,2,3
const SKILLS = {
 'AI':[['ChatGPT',2],['Claude',2],['Gemini',2],['Hugging Face',1],['LangChain',2],['Ollama',2]],
 'Programming':[['Python',3],['C++',2],['JavaScript',2]],
 'Web':[['HTML5',3,'Structure'],['CSS3',3,'Style'],['JavaScript',2,'Interaction and motion'],['React.js',2,'UI components'],['Node.js',2,'Server-side JavaScript'],['Express',2,'Backend APIs'],['REST APIs',2,'Service integration']],
 'Mobile':[['Flutter',2],['Dart',2]],
 'Database':[['MySQL',2],['SQL',2],['Database design',2],['Airtable',2]],
 'Automation':[['n8n',2],['APIs',2],['Agentic workflows',2]],
 'Development':[['Git',2],['GitHub',2],['VS Code',3],['Antigravity IDE',2]]
};
// h = hands-on, l = learning, i = interest
const LAB = [
 ['Artificial Intelligence',[['ChatGPT and GPT apps','h'],['Claude','h'],['Gemini','h'],['Large language models','h'],['Prompt engineering','h'],['AI integration via APIs','h']]],
 ['Agentic AI',[['AI agents','h'],['Tool calling','h'],['Agentic workflows','h'],['Multi-agent systems','l'],['Autonomous task execution','l'],['AI knowledge management','i']]],
 ['AI automation',[['n8n workflows','h'],['Business process automation','h'],['WhatsApp automation','h'],['API integrations','h'],['Automated reporting','l'],['AI customer support','h']]],
 ['Development technologies',[['Python','h'],['LangChain','h'],['Ollama and local models','h'],['REST APIs','h'],['Hugging Face','l'],['FastAPI','l']]]
];
const STATUS = {concept:'Concept',proto:'Prototype',dev:'In development',done:'Completed'};
// s: concept | proto | dev | done. Add repo/demo URLs when real. Filters use tags.
const PROJECTS = [
 {t:'BizBook Business Management System',s:'dev',tags:['Flutter','Database'],tech:['Flutter','Dart','Provider','Hive'],d:'Cross-platform Flutter app for managing daily business operations.',p:'Small businesses often track stock, sales and payments in separate places.',so:'One app that keeps products, customers, suppliers, sales, payments and reports together, with data stored locally.',f:['Dashboard','Product, customer and supplier management','Sales and purchases','Payments and invoices','Reports','Local database','PDF generation'],repo:'',demo:''},
 {t:'Hospital Management System',s:'proto',tags:['Web','Database'],tech:['HTML','CSS','JavaScript','PHP','MySQL'],d:'Web application that organizes hospital information and administrative operations.',p:'Hospital records and admin tasks are easier to manage in one structured system.',so:'A web interface with a PHP backend and MySQL database for hospital-related data.',f:[],repo:'',demo:''},
 {t:'AI Chatbot',s:'proto',tags:['AI'],tech:['Python','AI models','APIs'],d:'LLM-backed conversational assistant that answers user queries.',p:'Users need quick, conversational answers to their questions.',so:'A Python chatbot connected to AI models through APIs.',f:[],repo:'',demo:''},
 {t:'AI Knowledge Base Lifecycle Agent',s:'concept',tags:['AI','Automation'],tech:['AI agents','Slack','Teams','Jira','Notion','GitHub'],d:'Concept to reduce knowledge rot in organizational documentation.',p:'Documentation goes out of date and teams lose trust in it.',so:'An agent that would detect outdated information and inconsistencies. Integrations with Slack, Teams, Jira, Notion and GitHub are conceptual.',f:['Detect outdated information','Find documentation inconsistencies','Improve knowledge management','Support automated maintenance'],repo:'',demo:''},
 {t:'HAKA Enterprises Management System',s:'concept',tags:['Web','Database'],tech:['Web','Authentication','RBAC'],d:'Business management system concept with administrative controls.',p:'Orders, deliveries, inventory and clients need one controlled system.',so:'Planned modules with authentication and role-based access control.',f:['Dashboard','Orders and deliveries','Inventory and clients','Reports and settings','Authentication and RBAC'],repo:'',demo:''},
 {t:'B2B Lead Scraper',s:'proto',tags:['Automation'],tech:['Python','Web technologies','Automation'],d:'Automation tool for collecting and organizing business leads.',p:'Gathering B2B leads by hand is slow and inconsistent.',so:'A Python tool that collects and organizes lead information.',f:[],repo:'',demo:''},
 {t:'AI Study Assistant',s:'concept',tags:['AI'],tech:['Python','LLMs'],d:'AI assistant concept that supports students with learning materials.',p:'Turning study material into practice takes time.',so:'An assistant that would read PDFs, answer questions and generate quizzes and flashcards.',f:['PDF reading','Question answering','Quiz generation','Flashcards','Study assistance'],repo:'',demo:''},
 {t:'AI Restaurant Assistant',s:'concept',tags:['AI','Automation'],tech:['AI','Python','APIs','WhatsApp'],d:'Concept for a conversational assistant for restaurant queries.',p:'Restaurants receive repetitive menu and information questions.',so:'An assistant that would answer them automatically, with WhatsApp integration as a concept.',f:['Automated customer responses','Menu assistance','Restaurant information','WhatsApp integration concepts','API-based automation'],repo:'',demo:''},
 {t:'Smart Inventory Reorder Automation',s:'proto',tags:['Automation','Database'],tech:['n8n','Google Sheets'],d:'n8n workflow that monitors inventory and supports reorder decisions.',p:'Stock-outs happen when reordering is manual.',so:'A workflow using Google Sheets and n8n to monitor inventory levels.',f:[],repo:'',demo:''}
];
const FILTERS = {'All projects':null,'AI & Automation':['AI','Automation'],'Web development':['Web'],'Mobile apps':['Flutter'],'Database systems':['Database']};
/* ===== END CONTENT ===== */

const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const el=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e};
const ext=a=>{a.target='_blank';a.rel='noopener noreferrer';return a};
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
document.documentElement.classList.add('js');

// nav
const links=$('#links'),mb=$('#menuBtn');
mb.onclick=()=>{const o=links.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
$$('#links a').forEach(a=>a.onclick=()=>{links.classList.remove('open');mb.setAttribute('aria-expanded',false)});
const alias={mobile:'web',backend:'web'};
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const id=alias[e.target.id]||e.target.id;$$('#links a').forEach(a=>a.classList.toggle('on',a.hash==='#'+id))}}),{rootMargin:'-45% 0px -50% 0px'});
$$('section[id]').forEach(s=>spy.observe(s));
$('#yr').textContent=new Date().getFullYear();

// config-driven bits
$('#avail').textContent=C.availability;$('#availWrap').hidden=!C.available;
$('#heroCv').href=$('#cvBtn').href=C.cv;
$('#ghAll').href=C.github+'?tab=repositories';$('#waBtn').href=LINKS.whatsapp;$('#mailBtn').href=LINKS.email;
$$('[data-social]').forEach(b=>{
 [['GitHub',LINKS.github],['Instagram',LINKS.instagram],['WhatsApp',LINKS.whatsapp],['Email',LINKS.email],['LinkedIn',LINKS.linkedin],['Facebook',LINKS.facebook]].forEach(([n,u])=>{
  if(u){const a=el('a',null,n);a.href=u;if(u.startsWith('http'))ext(a);b.append(a)}
  else if(n!=='Facebook'||!C.facebookName)b.append(el('span',null,n+' (add link)'));
 });
});
const cl=$('#clist');
[['Email',C.email,LINKS.email],['WhatsApp',C.phoneDisplay,LINKS.whatsapp],['GitHub',C.github.replace('https://github.com/',''),LINKS.github],['Instagram','@'+C.instagram.split('/').pop(),LINKS.instagram],['LinkedIn','Muhammad Masood',LINKS.linkedin],['Facebook',C.facebookName,LINKS.facebook]].forEach(([k,v,u])=>{
 const li=el('li');li.append(el('span',null,k));
 if(u){const a=el('a',null,v);a.href=u;if(u.startsWith('http'))ext(a);li.append(a)}else li.append(el('em',null,k==='Facebook'?v:'Add your link in js/config.js'));
 cl.append(li)});

// roles
(()=>{const t=$('#role');let i=0,j=0,d=false;if(reduce){t.textContent=ROLES[0];return}
 (function k(){const w=ROLES[i];t.textContent=w.slice(0,j);if(!d&&j===w.length){d=true;return setTimeout(k,1400)}
  if(d&&j===0){d=false;i=(i+1)%ROLES.length}j+=d?-1:1;setTimeout(k,d?35:70)})()})();

// hero trace
(()=>{const t=$('#trace'),L=[['user','"What is on the menu today?"'],['agent','intent: menu_query'],['tool','get_menu()  ok'],['agent','reply drafted from menu data'],['tool','whatsapp.reply()  delivered']];
 const add=([k,v])=>{const s=el('span','ln');s.append(el('em',null,k),document.createTextNode(v));t.append(s,'\n')};
 if(reduce)return L.forEach(add);L.forEach((l,i)=>setTimeout(()=>add(l),500+i*700))})();

// timeline + lab
STAGES.forEach(([t,it],i)=>{const li=el('li');li.append(el('h3',null,'Stage '+(i+1)+': '+t));const u=el('ul');it.forEach(n=>u.append(el('li',null,n)));li.append(u);$('#timeline').append(li)});
const ST={h:'Hands-on',l:'Learning',i:'Interest'};
LAB.forEach(([g,items])=>{const d=el('div','grp');d.append(el('h3',null,g));const u=el('ul');items.forEach(([n,s])=>{const li=el('li');li.append(el('span',null,n),el('span','st '+s,ST[s]));u.append(li)});d.append(u);$('#lab').append(d)});
$$('.legend .st').forEach((e,i)=>e.textContent=Object.values(ST)[i]);

// skills
const tabs=$('#skillTabs'),grid=$('#skillGrid');
function showSkills(c){$$('button',tabs).forEach(b=>b.setAttribute('aria-selected',b.textContent===c));grid.replaceChildren();
 SKILLS[c].forEach(([n,l,r])=>{const d=el('div','skill'),m=el('span','meter');for(let i=1;i<=3;i++)m.append(el('i',i<=l?'f':''));const v=el('span','lv');v.append(m,LEVELS[l]);const w=el('div');w.append(el('b',null,n));if(r)w.append(el('small','role',r));d.append(w,v);grid.append(d)})}
Object.keys(SKILLS).forEach(c=>{const b=el('button',null,c);b.type='button';b.role='tab';b.onclick=()=>showSkills(c);tabs.append(b)});showSkills('AI');

// projects
const pg=$('#projGrid'),fl=$('#filters'),modal=$('#modal');
function openProject(p){
 $('#mTitle').textContent=p.t;const s=$('#mStatus');s.textContent=STATUS[p.s];s.className='badge s-'+p.s;
 $('#mDesc').textContent=p.d;$('#mProb').textContent=p.p;$('#mSol').textContent=p.so;
 const f=$('#mFeat');f.replaceChildren();p.f.forEach(x=>f.append(el('li',null,x)));$('#mFH').hidden=f.hidden=!p.f.length;
 const t=$('#mTech');t.replaceChildren();p.tech.forEach(x=>t.append(el('span',null,x)));
 const l=$('#mLinks');l.replaceChildren();
 [[p.repo?'GitHub repository':'Find it on GitHub',p.repo||C.github+'?tab=repositories'],['Live demo',p.demo]].forEach(([n,u])=>{
  if(u)l.append(ext(Object.assign(el('a','btn',n),{href:u})));else l.append(el('span','btn off',n+' (coming soon)'))});
 modal.showModal();
}
function renderProjects(tags){pg.replaceChildren();
 PROJECTS.filter(p=>!tags||p.tags.some(t=>tags.includes(t))).forEach(p=>{
  const b=el('button','proj');b.type='button';b.setAttribute('aria-label','Open case study: '+p.t);
  b.append(el('span','badge s-'+p.s,STATUS[p.s]),el('h3',null,p.t),el('p',null,p.d));
  const g=el('div','tags');p.tech.slice(0,4).forEach(x=>g.append(el('span',null,x)));b.append(g);b.onclick=()=>openProject(p);pg.append(b)})}
Object.entries(FILTERS).forEach(([n,t],i)=>{const b=el('button',null,n);b.type='button';b.setAttribute('aria-pressed',i===0);
 b.onclick=()=>{$$('button',fl).forEach(x=>x.setAttribute('aria-pressed',x===b));renderProjects(t)};fl.append(b)});
renderProjects(null);
$('#mClose').onclick=()=>modal.close();modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});

// contact form: validates, then opens the visitor's email app (no backend connected)
const form=$('#form'),status=$('#status');
const rules={name:v=>v.trim().length>=2||'Enter your full name.',email:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)||'Enter a valid email address.',subject:v=>v.trim().length>=3||'Add a short subject.',message:v=>v.trim().length>=10||'Write at least 10 characters.'};
form.addEventListener('submit',e=>{e.preventDefault();status.className='status';status.textContent='';let ok=true;
 Object.keys(rules).forEach(k=>{const f=form.elements[k],r=rules[k](f.value);f.classList.toggle('bad',r!==true);f.nextElementSibling.textContent=r===true?'':r;if(r!==true)ok=false});
 if(!ok){status.className='status err';status.textContent='Please fix the highlighted fields.';return}
 const d=new FormData(form);
 location.href=`mailto:${C.email}?subject=${encodeURIComponent(d.get('subject'))}&body=${encodeURIComponent(d.get('message')+'\n\nFrom: '+d.get('name')+' <'+d.get('email')+'>')}`;
 status.textContent='Opening your email app. Press send there to deliver the message.';form.reset()});

// back to top + scroll reveal
const top=$('#top');addEventListener('scroll',()=>top.classList.toggle('show',scrollY>600),{passive:true});top.onclick=()=>scrollTo({top:0});
const rv=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rv.unobserve(e.target)}}),{threshold:.08});
$$('.body').forEach(n=>{n.classList.add('rv');rv.observe(n)});
