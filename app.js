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

/* =============== utils & nav =============== */
function safeScrollToTop(){
  try{if(typeof window.scrollTo==="function")window.scrollTo(0,0);}catch(e){}
}
function formatQuestionContent(text){
  if(!text)return"";
  if(text.includes("|")&&text.includes("---")){
    const parts=text.split(/\n\n+/);
    return parts.map(part=>{
      const lines=part.trim().split("\n").map(l=>l.trim()).filter(Boolean);
      if(lines.length>=2&&lines[0].startsWith("|")&&lines[1].includes("---")){
        const parseRow=row=>row.split("|").slice(1,-1).map(c=>c.trim());
        const headers=parseRow(lines[0]);
        const rows=lines.slice(2).map(parseRow);
        return `<div class="table-wrap"><table class="data-table"><thead><tr>${
          headers.map(h=>`<th>${esc(h)}</th>`).join("")
        }</tr></thead><tbody>${
          rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join("")}</tr>`).join("")
        }</tbody></table></div>`;
      }
      return `<div>${esc(part).replace(/\n/g,"<br>")}</div>`;
    }).join("");
  }
  return esc(text).replace(/\n/g,"<br>");
}

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
  safeScrollToTop();
}

/* =============== shared question card =============== */
function card(q){
  const a=progress.attempts[q.id];
  const show=revealAll;
  let opts=q.opts.map((o,i)=>{
    const L=LETTERS[i];let cls="opt";
    if(a){cls+=" locked";if(L===q.ans)cls+=" right";else if(L===a.pick)cls+=" wrong";}
    else if(show&&L===q.ans)cls+=" right";
    const click=!a?`onclick="pick(${q.id},'${L}')"`:"";
    return `<div class="${cls}" ${click}><div class="lt">${L}</div><div class="ot">${esc(o)}</div></div>`}).join("");
  const st=statusOf(q.id);
  const stTag=st==="ok"?'<span class="tag t-ok">&#10003; Correct</span>':st==="bad"?'<span class="tag t-bad">&#10007; Wrong</span>':"";
  const showBox=show||!!a;
  return `<div class="qcard" id="q${q.id}">
    <div class="qmeta"><span class="tag t-year">${q.year}</span><span class="tag t-phase">${q.phase}</span>
    ${q.paper?`<span class="tag t-paper">${q.paper}</span>`:""}
    ${q.qnum?`<span class="tag t-qnum">Q${q.qnum}</span>`:""}
    <span class="tag t-sub">${esc(q.subject)}</span><span class="tag t-top">${esc(q.topic)}</span>${stTag}</div>
    <div class="qtext">${formatQuestionContent(q.q)}</div>
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
var pPage=0;
window.pPage=pPage;
const P_SIZE=8;
function renderPractice(){
  if(window.pPage!==undefined)pPage=window.pPage;
  const list=practiceFiltered();
  const pages=Math.max(1,Math.ceil(list.length/P_SIZE));
  if(pPage>=pages){pPage=0;window.pPage=0;}
  const page=list.slice(pPage*P_SIZE,(pPage+1)*P_SIZE);
  document.getElementById("pCount").textContent=`${list.length} question${list.length!==1?"s":""} match`;
  document.getElementById("pList").innerHTML=list.length?page.map(card).join(""):
    `<div class="card empty"><div class="big">&#128269;</div>No questions match. Try clearing filters or search.</div>`;
  document.getElementById("pPager").innerHTML=list.length>P_SIZE?
    `<button class="btn btn-ghost btn-sm" ${pPage===0?"disabled":""} onclick="window.pPage=pPage-1;renderPractice()">&larr; Prev</button>
     <span class="count-pill">Page ${pPage+1} / ${pages}</span>
     <button class="btn btn-ghost btn-sm" ${pPage>=pages-1?"disabled":""} onclick="window.pPage=pPage+1;renderPractice()">Next &rarr;</button>`:"";
}

/* =============== past year papers =============== */
var pyYear=2025,pyPhase="",pyPaper="";
window.pyYear=pyYear;
window.pyPhase=pyPhase;
window.pyPaper=pyPaper;

window.setPYYear=function(y){
  pyYear=window.pyYear=y;
  pyPhase=window.pyPhase="";
  pyPaper=window.pyPaper="";
  renderPYQ();
};
window.setPYPhase=function(p){
  pyPhase=window.pyPhase=p;
  pyPaper=window.pyPaper="";
  renderPYQ();
};
window.setPYPaper=function(pp){
  pyPaper=window.pyPaper=pp;
  renderPYQ();
};

function renderDescriptivePaperCard(paper){
  let secHtml=paper.sections.map((sec,idx)=>{
    const sId=`desc_${paper.year}_${idx}`;
    let content="";
    if(sec.type==="essay"){
      content=`
        <div class="desc-topics">
          ${sec.topics.map((t,i)=>`<div class="desc-topic-item"><b>${i+1}.</b> ${esc(t)}</div>`).join("")}
        </div>
        <div class="desc-workspace">
          <label style="font-weight:700;font-size:.85rem;display:block;margin-bottom:6px">Draft your essay here:</label>
          <textarea class="desc-textarea" id="${sId}_txt" placeholder="Select one topic and write your essay (${sec.wordLimit})..." oninput="updateDescWordCount('${sId}_txt','${sId}_wc',250,270)"></textarea>
          <div class="desc-wordcount"><span id="${sId}_wc">Words: <b>0</b> (Target: ${sec.wordLimit})</span></div>
          ${sec.outlineTips?`<div class="desc-tips"><b>Recommended Structure:</b><ul style="margin:6px 0 0 16px;line-height:1.6">${sec.outlineTips.map(tip=>`<li>${esc(tip)}</li>`).join("")}</ul></div>`:""}
        </div>`;
    }else if(sec.type==="precis"){
      content=`
        <div class="desc-passage"><b>Passage:</b>\n\n${esc(sec.passage)}</div>
        <div class="desc-workspace">
          <label style="font-weight:700;font-size:.85rem;display:block;margin-bottom:6px">Title for your pr&eacute;cis:</label>
          <input type="text" id="${sId}_title" placeholder="Suggested title: ${esc(sec.suggestedTitle)}" style="width:100%;padding:9px;margin-bottom:10px;border-radius:8px;border:1px solid var(--line);background:var(--bg);color:var(--text)">
          <label style="font-weight:700;font-size:.85rem;display:block;margin-bottom:6px">Draft your pr&eacute;cis here:</label>
          <textarea class="desc-textarea" id="${sId}_txt" placeholder="Write pr&eacute;cis in ${sec.wordLimit}..." oninput="updateDescWordCount('${sId}_txt','${sId}_wc',140,160)"></textarea>
          <div class="desc-wordcount"><span id="${sId}_wc">Words: <b>0</b> (Target: ${sec.wordLimit})</span></div>
          ${sec.keyPoints?`<div class="desc-tips"><b>Key Points Covered in Model Pr&eacute;cis:</b><ul style="margin:6px 0 0 16px;line-height:1.6">${sec.keyPoints.map(kp=>`<li>${esc(kp)}</li>`).join("")}</ul></div>`:""}
        </div>`;
    }else if(sec.type==="rc"){
      content=`
        <div class="desc-passage"><b>Passage:</b>\n\n${esc(sec.passage)}</div>
        <div class="desc-topics">
          <b>Questions to answer in your own words:</b>
          ${sec.questions.map((q,i)=>`
            <div style="margin-top:10px">
              <div class="desc-topic-item"><b>Q${i+1}.</b> ${esc(q)}</div>
              <textarea class="desc-textarea" style="min-height:70px;margin-top:6px" placeholder="Your answer to Q${i+1}..."></textarea>
            </div>
          `).join("")}
        </div>`;
    }

    return `<div class="desc-card" id="${sId}">
      <div class="desc-sec-hdr">
        <span class="desc-title">${sec.title}</span>
        <div class="desc-meta">
          <span class="tag t-phase">${sec.marks} Marks</span>
          ${sec.wordLimit?`<span class="tag t-top">${sec.wordLimit}</span>`:""}
        </div>
      </div>
      <div class="desc-inst">${esc(sec.instruction)}</div>
      ${content}
    </div>`;
  }).join("");

  return `<div class="card" style="border:2px solid var(--brand);background:linear-gradient(180deg,var(--brand-soft) 0%,var(--card) 90px);margin-bottom:18px">
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:8px">
      <h3 style="margin:0;color:var(--brand);font-size:1.25rem">&#9997;&#65039; ${esc(paper.title)}</h3>
      <div style="display:flex;gap:6px">
        <span class="tag t-year">${paper.duration}</span>
        <span class="tag t-phase">${paper.totalMarks} Marks</span>
      </div>
    </div>
    <div class="sub">Complete recollected descriptive paper from EduTap with Essay Writing, Pr&eacute;cis Writing, and Reading Comprehension with interactive draft pads.</div>
  </div>${secHtml}`;
}

function updateDescWordCount(txtId,cntId,minW,maxW){
  const el=document.getElementById(txtId);
  const cnt=document.getElementById(cntId);
  if(!el||!cnt)return;
  const words=el.value.trim()?el.value.trim().split(/\s+/).length:0;
  let status="";
  if(minW&&maxW){
    if(words<minW)status=`(${minW-words} words to min ${minW})`;
    else if(words>maxW)status=`(${words-maxW} words over max ${maxW})`;
    else status=`✓ Target met (${words} words)`;
  }
  cnt.innerHTML=`Words: <b>${words}</b> ${status}`;
}

function renderPYQ(){
  if(window.pyYear!==undefined)pyYear=window.pyYear;
  if(window.pyPhase!==undefined)pyPhase=window.pyPhase;
  if(window.pyPaper!==undefined)pyPaper=window.pyPaper;

  document.getElementById("yYears").innerHTML=YEARS.map(y=>
    `<button class="chip ${pyYear===y?"active":""}" onclick="setPYYear(${y})">${y}</button>`).join("")+
    [2023,2024].filter(y=>!YEARS.includes(y)).map(y=>
    `<button class="chip dim" title="No questions in bank for this year">${y} &middot; n/a</button>`).join("");
  document.getElementById("yPhases").innerHTML=["","Phase 1","Phase 2"].map(p=>
    `<button class="chip ${pyPhase===p?"active":""}" onclick="setPYPhase('${p}')">${p||"Both phases"}</button>`).join("");

  let paperOptions=[];
  if(pyPhase==="Phase 1"){
    if(pyYear===2021){
      paperOptions=[{id:"Paper 2",label:"Paper 2 (General Stream · 50 Qs)"}];
      if(pyPaper!=="Paper 2")pyPaper=window.pyPaper="Paper 2";
    }else if(pyYear===2022){
      paperOptions=[
        {id:"",label:"Both papers (130 Qs)"},
        {id:"Paper 1",label:"Paper 1 (QRE & GA · 80 Qs)"},
        {id:"Paper 2",label:"Paper 2 (General Stream · 50 Qs)"}
      ];
    }else if(pyYear===2025){
      paperOptions=[
        {id:"",label:"Both papers (126 Qs)"},
        {id:"Paper 1",label:"Paper 1 (QRE & GA · 80 Qs)"},
        {id:"Paper 2",label:"Paper 2 (General Stream · 46 Qs)"}
      ];
    }
  }else if(pyPhase==="Phase 2"){
    paperOptions=[
      {id:"",label:"Both papers"},
      {id:"Paper 1",label:"Paper 1 (Descriptive English · 100M)"},
      {id:"Paper 2",label:"Paper 2 (General Stream · 50 Qs)"}
    ];
  }else{
    paperOptions=[
      {id:"",label:"All papers"},
      {id:"Paper 1",label:"Paper 1"},
      {id:"Paper 2",label:"Paper 2"}
    ];
  }

  const paperChipsEl=document.getElementById("yPapers");
  const paperLabelEl=document.getElementById("yPaperLabel");
  if(paperChipsEl){
    paperChipsEl.innerHTML=paperOptions.map(opt=>
      `<button class="chip ${pyPaper===opt.id?"active":""}" onclick="setPYPaper('${opt.id}')">${opt.label}</button>`
    ).join("");
    if(paperLabelEl)paperLabelEl.style.display=paperOptions.length?"":"none";
  }

  const s=document.getElementById("ySearch").value.trim().toLowerCase();
  let list=QUESTIONS.filter(q=>q.year===pyYear&&(!pyPhase||q.phase===pyPhase));
  if(pyPaper){
    list=list.filter(q=>q.paper===pyPaper);
  }
  if(s){
    list=list.filter(q=>(q.q+" "+q.topic+" "+q.subject+" "+q.exp+" "+q.opts.join(" ")).toLowerCase().includes(s));
  }

  const showDesc=(pyPhase==="Phase 2"||!pyPhase)&&(pyPaper==="Paper 1"||!pyPaper)&&window.DESCRIPTIVE_PAPERS&&window.DESCRIPTIVE_PAPERS[String(pyYear)];
  const descPaper=showDesc?window.DESCRIPTIVE_PAPERS[String(pyYear)]:null;

  document.getElementById("yCount").textContent=`${list.length} questions`;

  if(!list.length&&!descPaper){
    document.getElementById("yInfo").innerHTML=`<div class="card empty"><div class="big">&#128237;</div><b>No questions available for ${pyYear} ${pyPhase?"&middot; "+pyPhase:""} yet.</b><br>
     Papers for 2023 &amp; 2024 were not added to this bank (no memory-based paper found).</div>`;
    document.getElementById("yActions").classList.add("hidden");
    document.getElementById("yList").innerHTML="";
    return;
  }

  document.getElementById("yActions").classList.remove("hidden");

  let infoNote=`<div class="note">&#128218; <b>${pyYear} paper in bank:</b> `;
  if(pyYear===2021){
    infoNote+=`Phase 1 Paper 2: 50 Qs &middot; Phase 2 Paper 1: Descriptive English &middot; Phase 2 Paper 2: 50 Qs. <i>(Note: EduTap recollected Phase 1 Paper 2 and Phase 2; Phase 1 Paper 1 was not recollected for 2021)</i>.`;
  }else if(pyYear===2022){
    infoNote+=`Phase 1 Paper 1 (QRE &amp; GA): 80 Qs &middot; Phase 1 Paper 2: 50 Qs &middot; Phase 2 Paper 1: Descriptive English &middot; Phase 2 Paper 2: 50 Qs.`;
  }else if(pyYear===2025){
    infoNote+=`Phase 1 Paper 1 (QRE &amp; GA): 80 Qs &middot; Phase 1 Paper 2: 46 Qs &middot; Phase 2 Paper 1: Descriptive English &middot; Phase 2 Paper 2: 50 Qs.`;
  }
  infoNote+=`</div>`;
  document.getElementById("yInfo").innerHTML=infoNote;

  let outHtml="";
  if(descPaper&&(!s||descPaper.title.toLowerCase().includes(s)||"descriptive english essay precis comprehension".includes(s))){
    outHtml+=renderDescriptivePaperCard(descPaper);
  }
  outHtml+=list.map(card).join("");
  document.getElementById("yList").innerHTML=outHtml;
}

function yearTest(){
  let list=QUESTIONS.filter(q=>q.year===pyYear&&(!pyPhase||q.phase===pyPhase)&&(!pyPaper||q.paper===pyPaper));
  if(!list.length)return;
  switchView("exam");
  startExam({ids:list.map(q=>q.id),label:`${pyYear} ${pyPhase||"both phases"} ${pyPaper||""}`.trim()});
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
window.ex = null,exTimer=null;
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
  const review=document.getElementById("exReviewMode").checked;
  ex={mode,qs:pool,cur:0,ans:{},started:Date.now(),
      timed:mode==="timed",neg:mode!=="practice",review,
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
  const showAns=ex.review && picked;
  document.getElementById("exQ").innerHTML=`
    <div class="qmeta"><span class="tag t-year">Q ${ex.cur+1}/${ex.qs.length}</span>
    <span class="tag t-sub">${esc(q.subject)}</span><span class="tag t-top">${esc(q.topic)}</span>
    <span class="tag t-year">${q.year}</span><span class="tag t-phase">${q.phase}</span>
    ${ex.label?`<span class="tag t-swap">${esc(ex.label)}</span>`:""}
    ${ex.review?`<span class="tag t-swap">Review</span>`:""}</div>
    <div class="qtext">${esc(q.q)}</div><div class="options">${opts}</div>
    ${showAns?`<div class="ansbox"><div class="top">Answer: ${q.ans} &mdash; ${esc(q.opts[LETTERS.indexOf(q.ans)])}</div>
      <div class="exp">${esc(q.exp)}</div></div>`:""}
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
  safeScrollToTop();
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
  const CORE_7 = ["Companies Act","Finance","Costing","Pension Sector","Commerce & Accountancy","Management","Economics"];
  const bm={};
  CORE_7.forEach(s => { bm[s] = 0; });
  QUESTIONS.forEach(q => { if(CORE_7.includes(q.subject)) bm[q.subject] = (bm[q.subject]||0)+1; });
  const mx=Math.max(...Object.values(bm), 1);
  document.getElementById("sBank").innerHTML=CORE_7.map(s => {
    const n = bm[s] || 0;
    return `<div class="brow"><div class="blabel">${s}</div>
    <div class="btrack"><div class="bfill" style="width:${n/mx*100}%;background:var(--ok)">${n}</div></div>
    <div class="bval">${n}</div></div>`;
  }).join("")+
  `<p class="sub" style="margin-top:10px">Total ${QUESTIONS.length} questions across Phase 1 &amp; Phase 2 &middot; `+
  `${QUESTIONS.filter(q=>q.year==2021).length} from 2021, ${QUESTIONS.filter(q=>q.year==2022).length} from 2022, ${QUESTIONS.filter(q=>q.year==2025).length} from 2025 (includes 160 Qs from Paper 1 Quantitative, Reasoning, English &amp; General Awareness)</p>`;
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
