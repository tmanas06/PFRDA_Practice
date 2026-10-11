/* ================================================================
   PFRDA Grade A Practice Portal - application logic
   ================================================================ */
const LS="pfrda_progress_v1";
let progress=JSON.parse(localStorage.getItem(LS)||"null")||{attempts:{},exams:[]};
const save=()=>localStorage.setItem(LS,JSON.stringify(progress));
let view="home",revealAll=false;
const LETTERS="ABCDE";
const byId=id=>QUESTIONS.find(q=>q.id===id);
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const statusOf=id=>{const a=progress.attempts[id];if(!a)return null;return a.pick===byId(id).ans?"ok":"bad"};
const YEARS=[...new Set(QUESTIONS.map(q=>q.year))].sort();
const SUBJECTS=[...new Set(QUESTIONS.map(q=>q.subject))].sort();

/* =============== nav =============== */
document.querySelectorAll("#nav button").forEach(b=>b.onclick=()=>switchView(b.dataset.view));
function switchView(v){
  view=v;
  document.querySelectorAll("#nav button").forEach(b=>b.classList.toggle("active",b.dataset.view===v));
  document.querySelectorAll(".view").forEach(el=>el.classList.toggle("active",el.id==="v-"+v));
  if(v==="home")renderHome();
  if(v==="practice")renderPractice();
  if(v==="pyq")renderPYQ();
  if(v==="repeat")renderRepeating();
  if(v==="dash")renderDash();
  if(v==="stats")renderStats();
  window.scrollTo(0,0);
}

/* =============== shared question card =============== */
function card(q){
  const a=progress.attempts[q.id];
  const show=revealAll||view==="repeat";
  let opts=q.opts.map((o,i)=>{
    const L=LETTERS[i];let cls="opt";
    if(a){cls+=" locked";if(L===q.ans)cls+=" right";else if(L===a.pick)cls+=" wrong";}
    else if(show&&L===q.ans)cls+=" right";
    const click=(!a&&view!=="repeat")?`onclick="pick(${q.id},'${L}')"`:"";
    return `<div class="${cls}" ${click}><div class="lt">${L}</div><div class="ot">${esc(o)}</div></div>`}).join("");
  const st=statusOf(q.id);
  const stTag=st==="ok"?'<span class="tag t-ok">&#10003; Correct</span>':st==="bad"?'<span class="tag t-bad">&#10007; Wrong</span>':"";
  const showBox=show||!!a;
  return `<div class="qcard" id="q${q.id}">
    <div class="qmeta"><span class="tag t-year">${q.year}</span><span class="tag t-phase">${q.phase}</span>
    <span class="tag t-sub">${esc(q.subject)}</span><span class="tag t-top">${esc(q.topic)}</span>${stTag}</div>
    <div class="qtext">${esc(q.q)}</div>
    <div class="options">${opts}</div>
    ${showBox?`<div class="ansbox"><div class="top">Answer: ${q.ans} &mdash; ${esc(q.opts[LETTERS.indexOf(q.ans)])}</div>
      <div class="exp">${esc(q.exp)}</div></div>`:""}
    <div class="qactions">
      <button class="btn btn-ghost btn-sm" onclick="toggleOne(${q.id})">${showBox?"Hide":"Reveal"} answer</button>
      ${a?`<button class="btn btn-ghost btn-sm" onclick="unpick(${q.id})">Reset</button>`:""}
    </div></div>`;
}
function pick(id,L){
  progress.attempts[id]={pick:L,ts:Date.now()};save();
  rerender();updateHeader();
}
function unpick(id){delete progress.attempts[id];save();rerender();updateHeader()}
function toggleOne(id){
  const el=document.getElementById("q"+id);if(!el)return;
  const box=el.querySelector(".ansbox");
  if(box){box.remove();el.querySelector(".qactions button").textContent="Reveal answer";}
  else{
    const q=byId(id);
    el.querySelector(".options").insertAdjacentHTML("afterend",
      `<div class="ansbox"><div class="top">Answer: ${q.ans} &mdash; ${esc(q.opts[LETTERS.indexOf(q.ans)])}</div><div class="exp">${esc(q.exp)}</div></div>`);
    el.querySelector(".qactions button").textContent="Hide answer";
  }
}
function toggleRevealAll(){
  revealAll=!revealAll;
  document.querySelectorAll("#revealBtn,#yRevealBtn,#rPanelReveal").forEach(b=>{
    if(b)b.textContent=revealAll?"\uD83D\uDC48 Hide all answers":"\uD83D\uDC41 Show all answers";});
  rerender();
}
function rerender(){
  if(view==="practice")renderPractice();
  else if(view==="pyq")renderPYQ();
  else if(view==="repeat"&&!document.getElementById("rPanel").classList.contains("hidden"))renderPanel();
}

/* =============== header / home =============== */
function updateHeader(){
  const n=Object.keys(progress.attempts).length;
  document.getElementById("hscore").innerHTML=n?`Practised <b>${n}</b> / ${QUESTIONS.length}`:`<b>${QUESTIONS.length}</b> questions ready`;
  const nb=document.getElementById("nbTotal");if(nb)nb.textContent=QUESTIONS.length;
}
function calcStats(){
  const ats=Object.entries(progress.attempts);
  let ok=0;
  ats.forEach(([id,a])=>{if(a.pick===byId(+id).ans)ok++});
  return {n:ats.length,ok,bad:ats.length-ok,acc:ats.length?ok/ats.length*100:0};
}
function subjectAcc(){
  const m={};
  Object.entries(progress.attempts).forEach(([id,a])=>{
    const q=byId(+id);if(!q)return;
    m[q.subject]=m[q.subject]||{ok:0,n:0};
    m[q.subject].n++;if(a.pick===q.ans)m[q.subject].ok++;});
  return m;
}
function weakest(){
  const m=subjectAcc();
  const arr=Object.entries(m).sort((a,b)=>a[1].ok/a[1].n-b[1].ok/b[1].n);
  return arr.length?arr[0][0]:"—";
}
function renderHome(){
  const s=calcStats();
  document.getElementById("heroQ").textContent=QUESTIONS.length;
  document.getElementById("hsAttempted").textContent=s.n;
  document.getElementById("hsAccuracy").textContent=s.acc.toFixed(0)+"%";
  document.getElementById("hsExams").textContent=progress.exams.length;
  document.getElementById("hsWeak").textContent=weakest();
  updateHeader();
}

/* =============== practice =============== */
function fillSelect(el,items,allLabel){
  el.innerHTML=`<option value="">${allLabel}</option>`+items.map(x=>`<option>${esc(x)}</option>`).join("");
}
function topicOptions(srcId,dstId){
  const s=document.getElementById(srcId).value;
  const t=[...new Set(QUESTIONS.filter(q=>!s||q.subject===s).map(q=>q.topic))].sort();
  fillSelect(document.getElementById(dstId),t,"All topics");
}
function clearFilters(){
  ["pSearch","pSubject","pTopic","pYear","pPhase","pStatus"].forEach(id=>{const e=document.getElementById(id);if(e)e.value=""});
  document.getElementById("pSort").value="def";
  renderPractice();
}
function practiceFiltered(){
  const s=document.getElementById("pSearch").value.trim().toLowerCase();
  const sub=document.getElementById("pSubject").value,top=document.getElementById("pTopic").value;
  const yr=document.getElementById("pYear").value,ph=document.getElementById("pPhase").value;
  const st=document.getElementById("pStatus").value,sort=document.getElementById("pSort").value;
  let list=QUESTIONS.filter(q=>{
    if(sub&&q.subject!==sub)return false;
    if(top&&q.topic!==top)return false;
    if(yr&&q.year!=yr)return false;
    if(ph&&q.phase!==ph)return false;
    if(st){const s2=statusOf(q.id);if(st==="un"&&s2)return false;if(st==="ok"&&s2!=="ok")return false;if(st==="bad"&&s2!=="bad")return false}
    if(s){const hay=(q.q+" "+q.topic+" "+q.subject+" "+q.exp+" "+q.opts.join(" ")+" "+q.year+" "+q.phase).toLowerCase();
      if(!hay.includes(s))return false}
    return true});
  if(sort==="rand")list=[...list].sort(()=>Math.random()-.5);
  if(sort==="wrong")list=[...list].sort((a,b)=>(statusOf(b.id)==="bad"?1:0)-(statusOf(a.id)==="bad"?1:0));
  if(sort==="un")list=[...list].sort((a,b)=>(progress.attempts[a.id]?1:0)-(progress.attempts[b.id]?1:0));
  return list;
}
let pPage=0;const P_SIZE=8;
function renderPractice(){
  const list=practiceFiltered();
  const pages=Math.max(1,Math.ceil(list.length/P_SIZE));
  if(pPage>=pages)pPage=0;
  const page=list.slice(pPage*P_SIZE,(pPage+1)*P_SIZE);
  document.getElementById("pCount").textContent=`${list.length} question${list.length!==1?"s":""} match`;
  document.getElementById("pList").innerHTML=list.length?page.map(card).join(""):
    `<div class="card empty"><div class="big">&#128269;</div>No questions match. Try clearing filters or search.</div>`;
  document.getElementById("pPager").innerHTML=list.length>P_SIZE?
    `<button class="btn btn-ghost btn-sm" ${pPage===0?"disabled":""} onclick="pPage--;renderPractice()">&larr; Prev</button>
     <span class="count-pill">Page ${pPage+1} / ${pages}</span>
     <button class="btn btn-ghost btn-sm" ${pPage>=pages-1?"disabled":""} onclick="pPage++;renderPractice()">Next &rarr;</button>`:"";
}

/* =============== past year papers =============== */
let pyYear=YEARS[YEARS.length-1],pyPhase="";
function renderPYQ(){
  document.getElementById("yYears").innerHTML=YEARS.map(y=>
    `<button class="chip ${pyYear===y?"active":""}" onclick="pyYear=${y};pyPhase='';renderPYQ()">${y}</button>`).join("")+
    [2023,2024].filter(y=>!YEARS.includes(y)).map(y=>
    `<button class="chip dim" title="No questions in bank for this year">${y} &middot; n/a</button>`).join("");
  document.getElementById("yPhases").innerHTML=["","Phase 1","Phase 2"].map(p=>
    `<button class="chip ${pyPhase===p?"active":""}" onclick="pyPhase='${p}';renderPYQ()">${p||"Both phases"}</button>`).join("");
  const s=document.getElementById("ySearch").value.trim().toLowerCase();
  let list=QUESTIONS.filter(q=>q.year===pyYear&&(!pyPhase||q.phase===pyPhase));
  if(s)list=list.filter(q=>(q.q+" "+q.topic+" "+q.subject+" "+q.exp+" "+q.opts.join(" ")).toLowerCase().includes(s));
  const n1=list.filter(q=>q.phase==="Phase 1").length,n2=list.length-n1;
  document.getElementById("yCount").textContent=`${list.length} questions`;
  document.getElementById("yInfo").innerHTML=list.length?
    `<div class="note">&#128218; <b>${pyYear} paper in bank</b> &mdash; Phase 1 Paper 2: ${n1} Qs &middot; Phase 2 Paper 2: ${n2} Qs.
     Memory-based reconstruction; PFRDA does not officially release full papers.</div>`:
    `<div class="card empty"><div class="big">&#128237;</div><b>No questions available for ${pyYear} ${pyPhase?"&middot; "+pyPhase:""} yet.</b><br>
     Papers for 2023 &amp; 2024 were not added to this bank (no memory-based paper found).</div>`;
  document.getElementById("yActions").classList.toggle("hidden",!list.length);
  document.getElementById("yList").innerHTML=list.map(card).join("");
}
function yearTest(){
  const list=QUESTIONS.filter(q=>q.year===pyYear&&(!pyPhase||q.phase===pyPhase));
  if(!list.length)return;
  switchView("exam");
  startExam({ids:list.map(q=>q.id),label:`${pyYear} ${pyPhase||"both phases"}`});
}

/* =============== repeating =============== */
function themeMatches(t){
  const s=(document.getElementById("rSearch").value||"").trim().toLowerCase();
  return QUESTIONS.filter(q=>t.re.test(q.q+" "+q.topic+" "+q.subject)&&
    (!s||(q.q+" "+q.topic+" "+q.subject+" "+t.name).toLowerCase().includes(s)));
}
let openThemeIdx=-1;
function renderRepeating(){
  const rows=THEMES.map((t,i)=>({t,i,m:themeMatches(t)})).filter(x=>x.m.length)
    .sort((a,b)=>b.m.length-a.m.length);
  document.getElementById("rCount").textContent=`${rows.length} themes`;
  document.getElementById("rThemes").innerHTML=rows.map(({t,i,m})=>{
    const yrs=[...new Set(m.map(q=>q.year))].sort();
    const phases=[...new Set(m.map(q=>q.phase))];
    return `<div class="tcard" onclick="openTheme(${i})"><div class="cnt">${m.length} Qs</div>
      <div class="tn">${esc(t.name)}</div>
      <div class="ty">${yrs.map(y=>`<span class="yr">${y}</span>`).join("")}
      <span class="yr">${phases.length===2?"P1+P2":phases[0]}</span>
      ${yrs.length>1?'<span class="yr yr-rep">&#128257; repeats</span>':""}</div></div>`}).join("")
    ||`<div class="card empty" style="grid-column:1/-1"><div class="big">&#128257;</div>No themes match your search.</div>`;
  if(openThemeIdx>=0)renderPanel();
}
function openTheme(i){openThemeIdx=i;document.getElementById("rPanel").classList.remove("hidden");renderPanel();
  const p=document.getElementById("rPanel");if(p.scrollIntoView)p.scrollIntoView({behavior:"smooth",block:"start"})}
function closeTheme(){openThemeIdx=-1;document.getElementById("rPanel").classList.add("hidden")}
function renderPanel(){
  const t=THEMES[openThemeIdx];if(!t)return;
  const m=themeMatches(t);
  document.getElementById("rPanelTitle").textContent=`${t.name} — ${m.length} questions`;
  document.getElementById("rPanelList").innerHTML=m.map(card).join("");
}

/* =============== exam =============== */
let ex=null,exTimer=null;
function startExam(opt){
  opt=opt||{};
  let pool;
  if(opt.ids)pool=opt.ids.map(byId).filter(Boolean);
  else{
    const cnt=+document.getElementById("exCount").value;
    const sub=document.getElementById("exSubject").value;
    const yr=document.getElementById("exYear").value;
    pool=QUESTIONS.filter(q=>(!sub||q.subject===sub)&&(!yr||q.year==yr));
    pool=[...pool].sort(()=>Math.random()-.5);
    if(cnt>0&&cnt<pool.length)pool=pool.slice(0,cnt);
  }
  if(!pool.length)return;
  const mode=document.getElementById("exMode").value;
  ex={mode,qs:pool,cur:0,ans:{},started:Date.now(),
      timed:mode==="timed",neg:mode!=="practice",
      dur:mode==="timed"?40*60:Infinity,label:opt.label||""};
  document.getElementById("examSetup").classList.add("hidden");
  document.getElementById("examResult").classList.add("hidden");
  document.getElementById("examLive").classList.remove("hidden");
  document.getElementById("exTimer").textContent=ex.timed?"40:00":"∞";
  document.getElementById("exTimer").className="timer";
  if(ex.timed){
    exTimer=setInterval(()=>{
      const left=ex.dur-Math.floor((Date.now()-ex.started)/1000);
      if(left<=0){endExam();return}
      const t=document.getElementById("exTimer");
      const m=String(Math.floor(left/60)).padStart(2,"0"),s=String(left%60).padStart(2,"0");
      t.textContent=m+":"+s;
      t.className="timer"+(left<60?" danger":left<300?" warn":"");
    },1000);
  }
  renderExamQ();renderPal();updateExHdr();
}
function renderExamQ(){
  const q=ex.qs[ex.cur];
  const picked=ex.ans[q.id];
  const opts=q.opts.map((o,i)=>{
    const L=LETTERS[i];
    const cls="opt"+(picked===L?" picked":"");
    return `<div class="${cls}" onclick="examPick('${L}')"><div class="lt">${L}</div><div class="ot">${esc(o)}</div></div>`}).join("");
  document.getElementById("exQ").innerHTML=`
    <div class="qmeta"><span class="tag t-year">Q ${ex.cur+1}/${ex.qs.length}</span>
    <span class="tag t-sub">${esc(q.subject)}</span><span class="tag t-top">${esc(q.topic)}</span>
    <span class="tag t-year">${q.year}</span><span class="tag t-phase">${q.phase}</span>
    ${ex.label?`<span class="tag t-swap">${esc(ex.label)}</span>`:""}</div>
    <div class="qtext">${esc(q.q)}</div><div class="options">${opts}</div>
    <div class="qactions">
      <button class="btn btn-ghost btn-sm" id="exPrev" onclick="examNav(-1)" ${ex.cur===0?"disabled":""}>&larr; Previous</button>
      <button class="btn btn-primary btn-sm" onclick="examNav(1)">${ex.cur===ex.qs.length-1?"Review":"Next &rarr;"}</button>
      <button class="btn btn-ghost btn-sm" onclick="examJumpRandom()">&#127922; Random</button>
    </div>`;
}
function examPick(L){
  const q=ex.qs[ex.cur];
  if(ex.ans[q.id]===L)delete ex.ans[q.id];else ex.ans[q.id]=L;
  renderExamQ();renderPal();updateExHdr();
}
function examNav(d){
  ex.cur=Math.max(0,Math.min(ex.qs.length-1,ex.cur+d));
  renderExamQ();renderPal();
}
function examJumpRandom(){ex.cur=Math.floor(Math.random()*ex.qs.length);renderExamQ();renderPal()}
function renderPal(){
  document.getElementById("exPal").innerHTML=ex.qs.map((q,i)=>
    `<button class="${ex.ans[q.id]?"done ":""}${i===ex.cur?"cur":""}" onclick="ex.cur=${i};renderExamQ();renderPal()">${i+1}</button>`).join("");
}
function updateExHdr(){
  const n=Object.keys(ex.ans).length;
  document.getElementById("exAnswered").textContent=`${n} / ${ex.qs.length}`;
  document.getElementById("exProg").style.width=(n/ex.qs.length*100)+"%";
}
function endExam(){
  if(exTimer){clearInterval(exTimer);exTimer=null}
  let ok=0,bad=0,skip=0;
  const review=ex.qs.map(q=>{
    const p=ex.ans[q.id];
    if(!p){skip++;return{q,p:null,res:"skip"}}
    if(p===q.ans){ok++;return{q,p,res:"ok"}}
    bad++;return{q,p,res:"bad"}});
  let score=ok,marks=`${ok} correct`;
  if(ex.neg){score=ok-bad*0.25;marks+=`, ${bad} wrong (&minus;${(bad*0.25).toFixed(2)}), ${skip} skipped`}
  else marks+=`, ${bad} wrong, ${skip} skipped`;
  const pct=score/ex.qs.length*100;
  const el=Math.floor((Date.now()-ex.started)/1000);
  const em=Math.floor(el/60),es=String(el%60).padStart(2,"0");
  progress.exams.push({date:Date.now(),mode:ex.mode,label:ex.label,total:ex.qs.length,ok,bad,skip,score,pct,sec:el});
  save();
  document.getElementById("examLive").classList.add("hidden");
  document.getElementById("examResult").classList.remove("hidden");
  document.getElementById("resBanner").innerHTML=`<div class="resbanner ${pct>=40?"pass":"fail"}">
    <div class="sc">${score.toFixed(2)} / ${ex.qs.length}</div>
    <div style="font-size:1.05rem;margin-top:6px">${marks}</div>
    <div style="font-size:.9rem;margin-top:4px;opacity:.85">Accuracy ${pct.toFixed(1)}% &middot; Time ${em}m ${es}s &middot;
    ${pct>=40?"qualifying range (target 60%+)":"below 40% — needs work"}</div></div>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
    <button class="btn btn-primary btn-sm" onclick="resetExam()">New test</button>
    <button class="btn btn-ghost btn-sm" onclick="switchView('dash')">View dashboard</button></div>`;
  const bySub={};
  review.forEach(r=>{bySub[r.q.subject]=bySub[r.q.subject]||{ok:0,n:0};bySub[r.q.subject].n++;if(r.res==="ok")bySub[r.q.subject].ok++});
  document.getElementById("resDetails").innerHTML=`<h3>Subject-wise breakdown</h3>`+
    Object.entries(bySub).map(([s,v])=>{
      const p=v.ok/v.n*100;
      return `<div class="brow"><div class="blabel">${esc(s)}</div>
      <div class="btrack"><div class="bfill" style="width:${p}%;background:${p>=60?"var(--ok)":p>=40?"var(--warn)":"var(--bad)"}">${v.ok}/${v.n}</div></div>
      <div class="bval">${p.toFixed(0)}%</div></div>`}).join("");
  document.getElementById("resReview").innerHTML=`<div class="card"><h3>Answer review</h3></div>`+review.map((r,i)=>{
    const q=r.q;
    const opts=q.opts.map((o,j)=>{
      const L=LETTERS[j];let cls="opt locked";
      if(L===q.ans)cls+=" right";
      if(r.p&&L===r.p&&L!==q.ans)cls+=" wrong";
      return `<div class="${cls}"><div class="lt">${L}</div><div class="ot">${esc(o)}</div></div>`}).join("");
    const tag=r.res==="ok"?'<span class="tag t-ok">&#10003; Correct</span>':
              r.res==="bad"?'<span class="tag t-bad">&#10007; Wrong</span>':'<span class="tag t-top">Skipped</span>';
    return `<div class="qcard"><div class="qmeta"><span class="tag t-year">Q${i+1}</span>
    <span class="tag t-sub">${esc(q.subject)}</span>${tag}</div>
    <div class="qtext">${esc(q.q)}</div><div class="options">${opts}</div>
    <div class="ansbox"><div class="top">Answer: ${q.ans} &mdash; ${esc(q.opts[LETTERS.indexOf(q.ans)])}</div>
    <div class="exp">${esc(q.exp)}</div></div></div>`}).join("");
  updateHeader();
  window.scrollTo(0,0);
}
function resetExam(){
  document.getElementById("examSetup").classList.remove("hidden");
  document.getElementById("examResult").classList.add("hidden");
  document.getElementById("examLive").classList.add("hidden");
}
document.addEventListener("keydown",e=>{
  if(view!=="exam"||!ex||document.getElementById("examLive").classList.contains("hidden"))return;
  if(e.key>="1"&&e.key<="5"){const q=ex.qs[ex.cur];const i=+e.key-1;if(i<q.opts.length){examPick(LETTERS[i]);e.preventDefault()}}
  if(e.key==="ArrowRight"){examNav(1);e.preventDefault()}
  if(e.key==="ArrowLeft"){examNav(-1);e.preventDefault()}
});

/* =============== dashboard =============== */
function barRow(label,ok,n){
  const p=n?ok/n*100:0;
  const col=p>=60?"var(--ok)":p>=40?"var(--warn)":"var(--bad)";
  return `<div class="brow"><div class="blabel" title="${esc(label)}">${esc(label)}</div>
    <div class="btrack"><div class="bfill" style="width:${p}%;background:${col}">${ok}/${n}</div></div>
    <div class="bval">${p.toFixed(0)}%</div></div>`;
}
function renderDash(){
  const s=calcStats();
  document.getElementById("dTotal").textContent=s.n;
  document.getElementById("dOk").textContent=s.ok;
  document.getElementById("dBad").textContent=s.bad;
  document.getElementById("dAcc").textContent=s.acc.toFixed(1)+"%";
  const m=subjectAcc();
  document.getElementById("dSubjects").innerHTML=Object.keys(m).length?
    Object.entries(m).sort((a,b)=>b[1].ok/b[1].n-a[1].ok/a[1].n).map(([k,v])=>barRow(k,v.ok,v.n)).join(""):
    `<div class="empty">No attempts yet. Start practising!</div>`;
  const byT={};
  Object.entries(progress.attempts).forEach(([id,a])=>{
    const q=byId(+id);if(!q)return;
    const k=q.subject+" > "+q.topic;
    byT[k]=byT[k]||{ok:0,n:0};byT[k].n++;if(a.pick===q.ans)byT[k].ok++;});
  document.getElementById("dTopics").innerHTML=Object.keys(byT).length?
    Object.entries(byT).sort((a,b)=>a[1].ok/a[1].n-b[1].ok/b[1].n).map(([k,v])=>barRow(k,v.ok,v.n)).join(""):
    `<div class="empty">No attempts yet.</div>`;
  const weak=Object.entries(byT).filter(([k,v])=>v.n>=2&&v.ok/v.n<.5);
  document.getElementById("dWeak").innerHTML=weak.length?
    `<ul style="padding-left:20px;color:var(--bad);line-height:2">`+weak.map(([k,v])=>
      `<li><b>${esc(k)}</b> — ${(v.ok/v.n*100).toFixed(0)}% (${v.ok}/${v.n})</li>`).join("")+`</ul>`:
    `<div class="empty">No weak areas yet (needs 2+ attempts below 50%).</div>`;
  const exs=progress.exams.slice(-6).reverse();
  document.getElementById("dHist").innerHTML=exs.length?exs.map(e=>{
    const d=new Date(e.date);
    return `<div class="hist"><div><b>${d.toLocaleDateString()} ${d.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</b>
      ${e.label?`&middot; ${esc(e.label)}`:""} &middot; ${e.total} Qs
      <div style="font-size:.78rem;color:var(--muted)">${e.mode} mode &middot; ${Math.floor(e.sec/60)}m ${e.sec%60}s</div></div>
      <div style="text-align:right"><b style="color:${e.pct>=40?"var(--ok)":"var(--bad)"}">${e.score.toFixed(2)}/${e.total}</b>
      <div style="font-size:.78rem;color:var(--muted)">${e.ok}C ${e.bad}W ${e.skip}S &middot; ${e.pct.toFixed(0)}%</div></div></div>`}).join(""):
    `<div class="empty">No tests yet. Try <b>Exam Mode</b>.</div>`;
}
function resetProgress(){
  if(!confirm("Delete ALL practice attempts and test history? This cannot be undone."))return;
  progress={attempts:{},exams:[]};save();renderDash();renderHome();
}

/* =============== analytics =============== */
function renderStats(){
  const wa=[["Companies Act",46,16,"3-5"],["Finance",44,15,"3-5"],["Costing",44,15,"4-5"],
    ["Pension Sector",43,15,"4-6"],["Commerce & Accountancy",40,14,"4-5"],
    ["Management",39,13,"3-4"],["Economics",38,13,"3-4"]];
  document.getElementById("sWeight").innerHTML=wa.sort((a,b)=>b[2]-a[2]).map(([s,h,p,e])=>
    `<div class="brow"><div class="blabel">${s}</div>
    <div class="btrack"><div class="bfill" style="width:${p/16*100}%;background:linear-gradient(90deg,var(--brand),var(--brand2))">${p}%</div></div>
    <div class="bval">${e} Qs</div></div>`).join("");
  const yr={"Companies Act":[9,9,3-5],"Commerce & Accountancy":[8,8,"4-5"],Management:[7,7,"3-4"],
    Finance:[6,5,"3-5"],Costing:[5,6,"4-5"],Economics:[8,6,"3-4"],"Pension Sector":[7,7,"4-6"]};
  document.getElementById("sYear").innerHTML=Object.entries(yr).map(([s,v])=>
    `<tr><td><b>${s}</b></td><td>${v[0]}</td><td>${v[1]}</td><td>${((v[0]+v[1])/2).toFixed(1)}</td><td>${v[2]}</td></tr>`).join("");
  const bm={};QUESTIONS.forEach(q=>{bm[q.subject]=(bm[q.subject]||0)+1});
  const mx=Math.max(...Object.values(bm));
  document.getElementById("sBank").innerHTML=Object.entries(bm).sort((a,b)=>b[1]-a[1]).map(([s,n])=>
    `<div class="brow"><div class="blabel">${s}</div>
    <div class="btrack"><div class="bfill" style="width:${n/mx*100}%;background:var(--ok)">${n}</div></div>
    <div class="bval">${n}</div></div>`).join("")+
    `<p class="sub" style="margin-top:10px">Total ${QUESTIONS.length} questions &middot; `+
    `${QUESTIONS.filter(q=>q.year==2021).length} from 2021, ${QUESTIONS.filter(q=>q.year==2022).length} from 2022, ${QUESTIONS.filter(q=>q.year==2025).length} from 2025</p>`;
  const nw=[["PFRDA Act 2013","2-4 Qs: Authority, NPS provisions, intermediaries, penalties"],
    ["Union Budget &amp; Economic Survey","2-4 Qs: deficit types, key announcements, Survey themes"],
    ["AI / Machine Learning","2-4 Qs: supervised/unsupervised, LLMs, overfitting, cross-validation"],
    ["Marketing &amp; Communication","2-4 Qs: 4Ps, pricing, digital marketing, emotional intelligence"],
    ["Media","1-3 Qs: convergence, AR/VR, algorithms, micro-targeting"]];
  document.getElementById("sNew").innerHTML=nw.map(([k,v])=>
    `<div class="card newcard"><b>${k}</b><br><span class="sub" style="margin:4px 0 0">${v}</span></div>`).join("");
  renderIndexTable();
}
function renderIndexTable(){
  const s=(document.getElementById("sSearch").value||"").trim().toLowerCase();
  const list=QUESTIONS.filter(q=>!s||(q.q+" "+q.topic+" "+q.subject+" "+q.year).toLowerCase().includes(s));
  document.querySelector("#sTable tbody").innerHTML=list.map((q,i)=>
    `<tr><td>${i+1}</td><td>${q.year}</td><td>${q.phase}</td><td>${esc(q.subject)}</td>
    <td style="font-size:.8rem">${esc(q.topic)}</td>
    <td style="max-width:340px">${esc(q.q.length>90?q.q.slice(0,90)+"...":q.q)}</td></tr>`).join("");
}

/* =============== theme (dark / light) =============== */
function applyTheme(t){
  document.documentElement.setAttribute("data-theme",t);
  const b=document.getElementById("themeBtn");
  if(b){b.textContent=t==="dark"?"\u2600\uFE0F":"\uD83C\uDF19";
    b.title=t==="dark"?"Switch to light mode":"Switch to dark mode";}
}
function toggleTheme(){
  const next=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";
  applyTheme(next);
  try{localStorage.setItem("pfrda_theme",next)}catch(e){}
}

/* =============== init =============== */
function init(){
  applyTheme(document.documentElement.getAttribute("data-theme")||"light");
  fillSelect(document.getElementById("pSubject"),SUBJECTS,"All subjects");
  fillSelect(document.getElementById("pTopic"),[...new Set(QUESTIONS.map(q=>q.topic))].sort(),"All topics");
  fillSelect(document.getElementById("exSubject"),SUBJECTS,"All subjects");
  document.getElementById("pYear").innerHTML='<option value="">All years</option>'+
    YEARS.map(y=>`<option>${y}</option>`).join("");
  document.getElementById("exYear").innerHTML='<option value="">All years</option>'+
    YEARS.map(y=>`<option>${y}</option>`).join("");
  document.getElementById("pSubject").onchange=()=>{topicOptions("pSubject","pTopic");renderPractice()};
  renderHome();
}
init();
