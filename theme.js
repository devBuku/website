const timeLine=document.querySelector('#local-time');
const time=document.querySelector('#local-time time');
const updateTime=()=>{time.textContent=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date());timeLine.hidden=false};
updateTime();setInterval(updateTime,30000);
const toggle=document.querySelector('#theme-toggle');
toggle.hidden=false;
toggle.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;try{localStorage.setItem('theme',next)}catch(e){}});
