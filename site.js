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

  let emergencyDialog;
  function getEmergencyDialog(){
    if(emergencyDialog)return emergencyDialog;
    emergencyDialog=document.createElement('dialog');
    emergencyDialog.className='emergency-confirm';
    emergencyDialog.setAttribute('aria-labelledby','emergency-confirm-title');
    emergencyDialog.setAttribute('aria-describedby','emergency-confirm-text');
    emergencyDialog.innerHTML='<div class="emergency-confirm-inner"><p class="confirm-label">発信前の確認</p><h2 id="emergency-confirm-title">119番へ電話しますか？</h2><p id="emergency-confirm-text">命の危険を感じる場合は、下の赤いボタンを押してください。押すと電話画面が開きます。</p><div class="confirm-actions"><button type="button" class="confirm-cancel">戻る</button><a class="confirm-call" href="tel:119" data-emergency-confirmed>119番へ電話する</a></div></div>';
    document.body.appendChild(emergencyDialog);
    emergencyDialog.querySelector('.confirm-cancel').addEventListener('click',()=>emergencyDialog.close());
    emergencyDialog.addEventListener('click',event=>{if(event.target===emergencyDialog)emergencyDialog.close();});
    return emergencyDialog;
  }
  document.addEventListener('click',event=>{
    const link=event.target.closest('a[href="tel:119"]');
    if(!link||link.hasAttribute('data-emergency-confirmed'))return;
    event.preventDefault();
    getEmergencyDialog().showModal();
  });
})();
