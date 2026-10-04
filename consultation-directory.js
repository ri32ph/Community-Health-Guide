(function(){
  const data=window.MACHI_CONSULTATION_DATA;
  const root=document.querySelector('[data-consult-directory]');
  if(!data||!root)return;
  const search=document.querySelector('#consult-search');
  const chips=document.querySelector('[data-consult-category-chips]');
  const count=document.querySelector('[data-consult-count]');
  let active='all';
  const iconMap={
    '子ども・子育て':'assets/icons/11_parent_child.png','高齢者・介護':'assets/icons/18_elderly_care.png','お金・生活':'assets/icons/23_checklist.png','家族・パートナー':'assets/icons/19_family.png','こころ':'assets/icons/05_heart.png','健康・医療':'assets/icons/10_health_check.png','障害・発達':'assets/icons/22_wheelchair.png','仕事':'assets/icons/15_community_support.png','住まい':'assets/icons/20_community_town.png','これからの療養・看取り':'assets/icons/16_nurse.png','契約・法律・財産':'assets/icons/23_checklist.png','犯罪・被害':'assets/icons/14_public_office.png'
  };
  const esc=v=>String(v??'').replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const categories=['all',...data.categories.map(c=>c.label)];
  chips.innerHTML=categories.map(c=>`<button type="button" class="consult-chip${c==='all'?' is-active':''}" data-cat="${esc(c)}">${c==='all'?'すべて':esc(c)}</button>`).join('');
  chips.addEventListener('click',e=>{const b=e.target.closest('[data-cat]');if(!b)return;active=b.dataset.cat;chips.querySelectorAll('.consult-chip').forEach(x=>x.classList.toggle('is-active',x===b));render();});
  search?.addEventListener('input',render);

  function phoneButton(c){
    if(!c.phone)return '';
    const tel=c.phone.replace(/[‐‑–—−ー\s]/g,'-');
    return `<a class="consult-phone" href="tel:${esc(tel)}" data-confirm-call>${esc(c.phone)}</a>`;
  }
  function card(c){
    const cats=(c.categories||[]);
    const icon=iconMap[cats[0]]||'assets/icons/15_community_support.png';
    const channel=(c.channels||[]).map(x=>({phone:'電話','in-person':'窓口','web':'Web',chat:'チャット',sns:'SNS'}[x]||x)).join('・');
    return `<article class="consult-list-card"><img src="${icon}" alt="" loading="lazy"><div class="consult-list-body"><div class="consult-meta">${esc(c.area||'')}${channel?` <span>｜ ${esc(channel)}</span>`:''}</div><h3>${esc(c.name)}</h3><p>${esc(c.description||'')}</p>${c.hours?`<p class="consult-hours">受付：${esc(c.hours)}</p>`:''}<div class="consult-actions">${phoneButton(c)}${c.officialUrl?`<a href="${esc(c.officialUrl)}" target="_blank" rel="noopener">公式情報を見る</a>`:''}</div></div></article>`;
  }
  function render(){
    const q=(search?.value||'').trim().toLowerCase();
    const items=data.contacts.filter(c=>{
      const catOk=active==='all'||(c.categories||[]).includes(active);
      const hay=[c.name,c.description,c.area,c.phone,c.hours,...(c.categories||[]),...(c.keywords||[])].join(' ').toLowerCase();
      return catOk&&(!q||hay.includes(q));
    });
    count.textContent=`地域の相談先：${items.length}件`;
    const local=`<section class="consult-directory-section"><div class="section-head"><div><div class="eyebrow">地域の窓口</div><h2>諫早市・長崎県の相談先</h2></div><p>内容や受付時間が変わる場合があります。利用前に公式情報をご確認ください。</p></div><div class="consult-list-grid">${items.length?items.map(card).join(''):'<p class="consult-empty">条件に合う相談先が見つかりませんでした。検索語を変えてください。</p>'}</div></section>`;
    let publicHtml='';
    if(active==='all'&&!q){
      publicHtml=`<section class="consult-directory-section"><div class="section-head"><div><div class="eyebrow">全国・公的な相談先</div><h2>地域外からも利用できる窓口</h2></div><p>国や公的機関が案内する相談先です。</p></div><div class="public-resource-grid">${data.publicResources.map(r=>`<a class="public-resource-card" href="${esc(r.url||r.officialUrl||'#')}" target="_blank" rel="noopener"><strong>${esc(r.name)}</strong><span>${esc(r.description||'公式情報を見る')}</span></a>`).join('')}</div></section>`;
    }
    root.innerHTML=local+publicHtml;
  }
  render();
})();
