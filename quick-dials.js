(function(){
  const data=window.MACHI_CONSULTATION_DATA;
  const mount=document.querySelector('[data-quick-dials]');
  if(!data||!mount)return;

  const groups=[
    {title:'救急・医療',description:'命の危険があるときと、受診を迷うときの番号です。',ids:['emergency-medical-119','emergency-police-110','nagasaki-7119','nagasaki-8000']},
    {title:'子ども・子育て',description:'子どもの安全、子育て、学校生活について相談できます。',ids:['child-abuse-189','child-consultation-189783','child-sos-24h']},
    {title:'暮らし・警察への相談',description:'契約トラブルや、緊急ではない警察相談に利用できます。',ids:['consumer-188','police-9110']},
    {title:'暴力・性被害・女性の相談',description:'DV、性犯罪・性暴力、生活上の困難について相談できます。',ids:['dv-8008','women-support-8778','sexual-violence-8891','police-sexual-crime-8103']}
  ];
  const byId=new Map(data.quickDials.map(item=>[item.id,item]));
  const esc=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));

  function card(item){
    const emergency=item.urgency==='emergency';
    const meta=[item.availability,item.fee].filter(Boolean).map(value=>`<span>${esc(value)}</span>`).join('');
    const reading=item.reading?`<span class="dial-reading">${esc(item.reading)}</span>`:'';
    const alternative=item.emergencyAlternative?`<p class="dial-emergency-note">${esc(item.emergencyAlternative)}</p>`:'';
    return `<article class="dial-card ${emergency?'is-emergency':''}">
      <div class="dial-card-top"><div><span class="dial-number">${esc(item.number)}</span>${reading}</div><span class="dial-area">${esc(item.area||'全国')}</span></div>
      <h3>${esc(item.name)}</h3><p>${esc(item.description)}</p>
      ${meta?`<div class="dial-meta">${meta}</div>`:''}${alternative}
      <div class="dial-card-actions"><button class="dial-call-button" type="button" data-dial-id="${esc(item.id)}">発信前に確認する</button><a class="dial-official" href="${esc(item.officialUrl)}" target="_blank" rel="noopener">公式情報を見る ↗</a></div>
    </article>`;
  }

  mount.innerHTML=groups.map(group=>{
    const items=group.ids.map(id=>byId.get(id)).filter(Boolean);
    return `<section class="dial-group"><div class="dial-group-head"><h2>${esc(group.title)}</h2><p>${esc(group.description)}</p></div><div class="dial-card-grid">${items.map(card).join('')}</div></section>`;
  }).join('');

  mount.addEventListener('click',event=>{
    const button=event.target.closest('[data-dial-id]');
    if(!button)return;
    const item=byId.get(button.dataset.dialId);
    if(item&&window.openCallConfirm)window.openCallConfirm(item);
  });
})();
