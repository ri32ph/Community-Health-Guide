(function(){
  const root=document.documentElement;
  const button=document.querySelector('[data-text-size]');
  const saved=localStorage.getItem('largeText')==='true';
  if(saved)root.classList.add('large-text');
  function label(){
    if(button){
      const on=root.classList.contains('large-text');
      button.textContent=on?'文字を元に戻す':'文字を大きく';
      button.setAttribute('aria-pressed',String(on));
    }
  }
  label();
  button?.addEventListener('click',()=>{
    root.classList.toggle('large-text');
    localStorage.setItem('largeText',String(root.classList.contains('large-text')));
    label();
  });

  document.addEventListener('click',event=>{
    const printButton=event.target.closest('[data-print-page]');
    if(!printButton)return;
    window.print();
  });

  let callDialog;
  function getCallDialog(){
    if(callDialog)return callDialog;
    callDialog=document.createElement('dialog');
    callDialog.className='emergency-confirm';
    callDialog.setAttribute('aria-labelledby','call-confirm-title');
    callDialog.setAttribute('aria-describedby','call-confirm-text');
    callDialog.innerHTML='<div class="emergency-confirm-inner"><p class="confirm-label">発信前の確認</p><h2 id="call-confirm-title">電話しますか？</h2><p id="call-confirm-text"></p><p class="confirm-alt" hidden></p><div class="confirm-actions"><button type="button" class="confirm-cancel">戻る</button><a class="confirm-call" href="#" data-call-confirmed>電話する</a></div></div>';
    document.body.appendChild(callDialog);
    callDialog.querySelector('.confirm-cancel').addEventListener('click',()=>callDialog.close());
    callDialog.addEventListener('click',event=>{if(event.target===callDialog)callDialog.close();});
    return callDialog;
  }

  window.openCallConfirm=function(resource){
    const dialog=getCallDialog();
    const number=resource.number||resource.tel||'';
    dialog.querySelector('#call-confirm-title').textContent=resource.confirmTitle||`${number} に電話しますか？`;
    dialog.querySelector('#call-confirm-text').textContent=resource.confirmMessage||'内容を確認してから電話してください。';
    const alt=dialog.querySelector('.confirm-alt');
    const altText=resource.emergencyAlternative||'';
    alt.textContent=altText;
    alt.hidden=!altText;
    const call=dialog.querySelector('.confirm-call');
    call.href=`tel:${resource.tel||number}`;
    call.textContent=`${number} に電話する`;
    const emergency=resource.urgency==='emergency'||number==='110'||number==='119';
    dialog.classList.toggle('is-emergency',emergency);
    dialog.showModal();
  };



  function renderCivicActions(){
    const data=window.MACHI_CONSULTATION_DATA;
    const grid=document.querySelector('[data-civic-actions]');
    if(!data||!grid||!Array.isArray(data.civicResources))return;

    const heading=document.querySelector('[data-civic-heading]');
    const meta=data.civicResourcesMeta||{};
    if(heading){
      const eyebrow=heading.querySelector('.eyebrow');
      const title=heading.querySelector('h2');
      const description=heading.querySelector('p');
      if(eyebrow&&meta.sectionEyebrow)eyebrow.textContent=meta.sectionEyebrow;
      if(title&&meta.sectionTitle)title.textContent=meta.sectionTitle;
      if(description&&meta.sectionDescription)description.textContent=meta.sectionDescription;
    }

    grid.innerHTML=data.civicResources.map(resource=>{
      const links=(resource.links||[]).map(link=>{
        const external=link.external?' target="_blank" rel="noopener"':'';
        const phone=link.kind==='phone'
          ? ` data-confirm-call data-confirm-title="${escapeHtml(link.confirmTitle||'電話しますか？')}" data-confirm-message="${escapeHtml(link.confirmMessage||'内容を確認してから電話してください。')}"`
          : '';
        return `<a href="${escapeHtml(link.url)}"${external}${phone}>${escapeHtml(link.label)}</a>`;
      }).join('');
      const note=resource.note?`<p class="civic-action-note">${escapeHtml(resource.note)}</p>`:'';
      return `<article class="civic-action-card" data-civic-resource-id="${escapeHtml(resource.id)}"><div class="civic-action-kicker">${escapeHtml(resource.kicker||'')}</div><h3>${escapeHtml(resource.title||resource.name||'')}</h3><p>${escapeHtml(resource.description||'')}</p><div class="civic-action-links">${links}</div>${note}</article>`;
    }).join('');

    const footnote=document.querySelector('[data-civic-footnote]');
    if(footnote)footnote.textContent=meta.footnote||'';
  }

  function escapeHtml(value){
    return String(value??'').replace(/[&<>\"]/g,ch=>({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'
    }[ch]));
  }

  document.addEventListener('DOMContentLoaded',renderCivicActions);

  document.addEventListener('click',event=>{
    const link=event.target.closest('a[data-confirm-call],a[href="tel:119"],a[href="tel:110"]');
    if(!link||link.hasAttribute('data-call-confirmed'))return;
    event.preventDefault();
    const href=link.getAttribute('href')||'';
    const tel=decodeURIComponent(href.replace(/^tel:/,''));
    window.openCallConfirm({
      number:tel,
      tel,
      confirmTitle:link.dataset.confirmTitle||(tel==='119'?'119へ発信します':tel==='110'?'110へ発信します':`${tel} に電話しますか？`),
      confirmMessage:link.dataset.confirmMessage||(tel==='119'?'救急車・消防が必要な緊急時の番号です。本当に119へ電話しますか？':tel==='110'?'事件・事故など、すぐに警察官の対応が必要な場合の番号です。本当に110へ電話しますか？':'内容を確認してから電話してください。'),
      emergencyAlternative:link.dataset.confirmAlt||(tel==='119'?'救急車を呼ぶか迷う段階なら、長崎県では #7119 を利用できます。':tel==='110'?'緊急ではない警察相談は #9110 です。':''),
      urgency:(tel==='119'||tel==='110')?'emergency':'normal'
    });
  });
})();
