(function(){
  const data=window.MACHI_CONSULTATION_DATA;
  const mount=document.querySelector('[data-consultation-nav]');
  if(!data||!mount)return;

  const state={categoryId:null,issueId:null,channel:'all'};
  const channelLabels={all:'すべて', 'in-person':'地域の窓口',phone:'電話',web:'インターネット',sns:'SNS',chat:'チャット','sign-language':'手話','text-relay':'文字・電話リレー'};
  const categoryLabel=id=>data.categories.find(c=>c.id===id)?.label||'';
  const currentIssue=()=>data.issues.find(i=>i.id===state.issueId);
  const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));

  function overlap(issue,res){
    const hay=[res.name,res.description,...(res.keywords||[])].join(' ').toLowerCase();
    return (issue.keywords||[]).reduce((n,k)=>n+(hay.includes(String(k).toLowerCase())?1:0),0);
  }
  function allResources(){return [...data.contacts,...data.quickDials,...data.publicResources,...data.accessibilityResources];}
  function resourcesFor(issue){
    const cat=categoryLabel(issue.categoryId);
    const direct=new Set(issue.firstContactIds||[]);
    return allResources().filter(r=>{
      const methodOk=state.channel==='all'||(r.channels||[]).includes(state.channel);
      if(!methodOk)return false;
      if(direct.has(r.id))return true;
      if(!(r.categories||[]).includes(cat))return false;
      if(r.type==='dial') return overlap(issue,r)>0 || issue.urgency==='urgent';
      return true;
    }).map(r=>{
      let score=0;
      if(direct.has(r.id))score+=100;
      if(r.area==='諫早市')score+=35; else if(r.area==='長崎県')score+=25;
      if(r.sourceTrust==='government'||r.sourceType==='government')score+=10;
      score+=overlap(issue,r)*8;
      if(issue.urgency==='urgent'&&r.type==='dial')score+=25;
      return {r,score};
    }).sort((a,b)=>b.score-a.score).map(x=>x.r);
  }

  function sourceBadge(r){
    if(r.sourceType==='officially-listed')return '<span class="source-badge listed">公的機関が案内</span>';
    if(r.sourceType==='commissioned')return '<span class="source-badge">公的委託・指定</span>';
    return '<span class="source-badge">公的機関</span>';
  }
  function channelBadges(r){
    return (r.channels||[]).map(c=>`<span class="method-badge">${esc(channelLabels[c]||c)}</span>`).join('');
  }
  function resourceCard(r){
    const url=r.officialUrl||r.url||'#';
    const operator=r.operator||r.organization||r.area||'';
    const isDial=r.type==='dial';
    const number=r.number||'';
    const call=isDial?`<button class="resource-call" type="button" data-dial-id="${esc(r.id)}">${esc(number)} に電話する</button>`:'';
    const phone=(!isDial&&r.phone)?`<p class="resource-phone">電話：${esc(r.phone)}</p>`:'';
    const meta=[r.availability,r.fee].filter(Boolean).map(x=>`<span>${esc(x)}</span>`).join('');
    return `<article class="consult-resource ${r.type==='dial'&&r.urgency==='emergency'?'is-emergency':''}">
      <div class="resource-top">${sourceBadge(r)}${channelBadges(r)}</div>
      <h4>${isDial?`<span class="resource-number">${esc(number)}</span>`:''}${esc(r.name)}</h4>
      ${operator?`<p class="resource-operator">${esc(operator)}</p>`:''}
      <p>${esc(r.description||'')}</p>${phone}
      ${meta?`<p class="resource-meta">${meta}</p>`:''}
      <div class="resource-actions">${call}<a class="resource-official" href="${esc(url)}" target="_blank" rel="noopener">公式情報を見る ↗</a></div>
      ${r.note?`<p class="resource-note">${esc(r.note)}</p>`:''}
    </article>`;
  }

  function render(){
    const cat=state.categoryId;
    const issue=currentIssue();
    const issueList=cat?data.issues.filter(i=>i.categoryId===cat):[];
    const resources=issue?resourcesFor(issue):[];
    mount.innerHTML=`
      <div class="consult-step">
        <p class="consult-step-label"><span>1</span> 何について迷っていますか？</p>
        <div class="consult-category-grid">
          ${data.categories.map(c=>`<button type="button" class="consult-category ${cat===c.id?'is-active':''}" data-category="${esc(c.id)}"><span class="category-mark">${esc(c.icon)}</span><span>${esc(c.label)}</span></button>`).join('')}
        </div>
      </div>
      ${cat?`<div class="consult-step">
        <p class="consult-step-label"><span>2</span> 今の悩みに近いものを選んでください</p>
        <div class="consult-issue-grid">${issueList.map(i=>`<button type="button" class="consult-issue ${state.issueId===i.id?'is-active':''}" data-issue="${esc(i.id)}">${esc(i.label)}</button>`).join('')}</div>
      </div>`:''}
      ${issue?`<div class="consult-step consult-results">
        <div class="selected-concern"><span>選択中</span><strong>${esc(issue.label)}</strong></div>
        ${(issue.communityResourceTypes||[]).length?`<div class="community-types"><strong>地域で利用できる支援の例</strong><div>${issue.communityResourceTypes.map(x=>`<span>${esc(x)}</span>`).join('')}</div></div>`:''}
        <p class="consult-step-label"><span>3</span> 相談方法を選べます</p>
        <div class="consult-channel-tabs" role="group" aria-label="相談方法で絞り込む">
          ${Object.entries(channelLabels).map(([id,label])=>`<button type="button" class="channel-tab ${state.channel===id?'is-active':''}" data-channel="${esc(id)}">${esc(label)}</button>`).join('')}
        </div>
        <div class="consult-resource-grid">${resources.length?resources.map(resourceCard).join(''):'<p class="consult-empty">この方法で表示できる相談先は現在登録していません。別の相談方法を選んでください。</p>'}</div>
      </div>`:''}
      <div class="consult-fallback"><strong>どれを選べばよいか分からない</strong><p>困りごとがいくつも重なっている場合や、相談先が分からない場合は、諫早市の一般相談から専門機関につないでもらうことができます。</p><a href="https://www.city.isahaya.nagasaki.jp/soshiki/41/8335.html" target="_blank" rel="noopener">諫早市の一般相談を見る ↗</a></div>`;
  }

  mount.addEventListener('click',e=>{
    const cat=e.target.closest('[data-category]');
    if(cat){state.categoryId=cat.dataset.category;state.issueId=null;state.channel='all';render();return;}
    const issue=e.target.closest('[data-issue]');
    if(issue){state.issueId=issue.dataset.issue;state.channel='all';render();mount.querySelector('.consult-results')?.scrollIntoView({behavior:'smooth',block:'nearest'});return;}
    const channel=e.target.closest('[data-channel]');
    if(channel){state.channel=channel.dataset.channel;render();return;}
    const dial=e.target.closest('[data-dial-id]');
    if(dial){
      const r=data.quickDials.find(x=>x.id===dial.dataset.dialId);
      if(r&&window.openCallConfirm)window.openCallConfirm(r);
    }
  });
  render();
})();
