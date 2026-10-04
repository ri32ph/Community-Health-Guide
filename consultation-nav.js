(function(){
  const data=window.MACHI_CONSULTATION_DATA;
  const mount=document.querySelector('[data-consultation-nav]');
  if(!data||!mount)return;

  const state={categoryId:null,issueId:null,channel:'all'};
  const channelLabels={all:'すべて', 'in-person':'地域の窓口',phone:'電話',web:'インターネット',sns:'SNS',chat:'チャット','sign-language':'手話','text-relay':'文字・電話リレー'};
  const categoryLabel=id=>data.categories.find(c=>c.id===id)?.label||'';
  const currentIssue=()=>data.issues.find(i=>i.id===state.issueId);
  const categoryDetailPages={child:{url:'child-parenting.html',label:'子ども・子育てについて詳しく見る'},elderly:{url:'elderly-care.html',label:'高齢者・介護について詳しく見る'},money:{url:'money-life.html',label:'お金・生活について詳しく見る'},disability:{url:'disability-development.html',label:'障害・発達について詳しく見る'},legal:{url:'legal-assets.html',label:'契約・法律・財産について詳しく見る'}};
  const issueDetailPages={'endoflife-grief':{url:'after-loss.html',label:'大切な方を亡くされたあとの手続き・相談を見る'}};
  const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));

  const defaultNextSteps={
    child:['今困っていることを簡単にメモする','園・学校・家庭での様子を整理する','必要に応じて地域の支援やサービスを探す'],
    elderly:['本人の希望と困っていることを確認する','介護・医療・生活のどこに支援が必要か相談する','地域で使えるサービスや通いの場を探す'],
    money:['収入・支出・滞納など、分かる範囲で状況を整理する','利用できる制度や支援について相談する','住まい・就労など関連する困りごとも一緒に伝える'],
    family:['安全を最優先にする','無理に一人で解決せず相談機関につながる','必要に応じて生活・住まい・法律の支援も確認する'],
    mental:['今のつらさや生活への影響を伝える','一人で抱えず、相談方法を選んでつながる','必要に応じて医療・生活・就労などの支援も確認する'],
    health:['症状や気になっていることを整理する','受診や相談が必要か確認する','必要に応じて医療機関・薬局などを探す'],
    disability:['困っている場面と希望する支援を整理する','相談支援や利用できる制度を確認する','自分に合う事業所やサービスを探す'],
    work:['困っていることと希望する働き方を整理する','就労相談・生活相談につながる','必要に応じて職業訓練や両立支援を探す'],
    housing:['現在の住まいと期限・支払い状況を整理する','早めに相談窓口へつながる','利用できる住宅・生活支援を確認する'],
    endoflife:['本人が大切にしたいことを確認する','かかりつけ医やケアマネジャー等に相談する','訪問診療・訪問看護など地域の支援体制を確認する'],
    legal:['契約書・請求内容・日時など分かる情報を残す','専門の相談窓口に早めに相談する','必要に応じて警察・法律・生活支援につながる']
  };

  const specialNextSteps={
    'child-development':['気になっている様子を、いつ・どこで見られるかメモする','園や学校での様子も聞いてみる','発達相談後、必要なら児童発達支援などを探す'],
    'child-abuse-concern':['子どもの安全を最優先にする','迷う段階でも189などに相談する','差し迫った危険がある場合は110・119を利用する'],
    'elderly-dementia':['もの忘れや生活上の変化を具体的にメモする','地域包括支援センターや医療機関に相談する','認知症カフェ・介護予防・家族支援などを探す'],
    'money-living':['今月困っている支払いを整理する','諫早くらしの相談室で利用できる制度を確認する','食支援・就労・住まいの支援も必要なら一緒に相談する'],
    'family-afraid':['今いる場所が安全か確認する','危険が迫っていれば110、安全を確保できれば相談窓口につながる','避難・住まい・生活費・法律についても必要に応じて相談する'],
    'family-dv-unsure':['「DVかどうか」を自分で判断しなくても相談できる','怖い・つらいと感じる状況をそのまま相談員に伝える','必要なら安全確保や生活支援について一緒に考える'],
    'mental-suicide':['今、自分を傷つける危険が差し迫っている場合は119・110など緊急支援につながる','一人にならず、電話・SNS・身近な人など使いやすい方法で相談する','継続して支えてくれる医療・生活支援につながる'],
    'health-where-to-go':['緊急性が高い症状なら119を利用する','救急車や今すぐの受診を迷うときは#7119を利用する','受診先を探すときは医療情報ネットを利用する'],
    'endoflife-home-death':['本人がどこでどう過ごしたいか、話せる範囲で確認する','かかりつけ医・訪問看護・ケアマネジャー等に早めに相談する','急変時の連絡先や夜間の対応について事前に確認する'],
    'endoflife-acp':['本人が大切にしていることを話す','家族・医療・介護職と希望を共有する','気持ちや状況が変わったら何度でも話し直す'],
    'endoflife-grief':['今必要な手続きだけを確認する','市役所で該当する保険・年金等の手続きを確認する','相続や名義変更は必要に応じて専門相談を利用する','つらさが続くときはこころの相談先につながる']
  };

  const publicTools=[
    {id:'local-resources',name:'いさはやの地域資源集',description:'地域ごとの生活支援、介護予防、認知症、医療・介護連携などを探せます。',url:'https://isahaya-korei-portal.jp/%E5%9C%B0%E5%9F%9F%E8%B3%87%E6%BA%90%E9%9B%86%E3%82%92%E6%9B%B4%E6%96%B0%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F/',categories:['高齢者・介護','これからの療養・看取り'],tag:'諫早市の地域資源'},
    {id:'isahaya-map',name:'諫早市デジタルマップ',description:'公共施設などの場所を地図上で確認できます。',url:'https://www.sonicweb-asp.jp/isahaya/',categories:['子ども・子育て','高齢者・介護','お金・生活','家族・パートナー','こころ','健康・医療','障害・発達','仕事','住まい','これからの療養・看取り','契約・法律・財産','犯罪・被害'],tag:'場所を確認'},
    {id:'navi',name:'医療情報ネット（ナビイ）',description:'病院・診療所・歯科・薬局を、場所や診療内容などから検索できます。',url:'https://www.iryou.teikyouseido.mhlw.go.jp/znk-web/juminkanja/S2300/initialize',categories:['健康・医療','高齢者・介護','これからの療養・看取り'],tag:'医療機関・薬局'},
    {id:'care-search',name:'介護サービス情報公表システム',description:'全国の介護サービス事業所のサービス内容を検索・比較できます。',url:'https://www.mhlw.go.jp/stf/kaigo-kouhyou.html',categories:['高齢者・介護','これからの療養・看取り'],tag:'介護サービス'},
    {id:'wam',name:'WAM NET 障害福祉サービス等情報検索',description:'障害福祉・児童発達支援などの事業所を地域やサービス種別から検索できます。',url:'https://www.wam.go.jp/sfkohyoout/',categories:['子ども・子育て','障害・発達'],tag:'障害・発達支援'},
    {id:'kokode',name:'ここdeサーチ',description:'認定こども園、保育所、幼稚園などを地域から探せます。',url:'https://www.wam.go.jp/kokodesearch/ANN010100E00.do',categories:['子ども・子育て'],tag:'保育・こども園'},
    {id:'ryoritsu',name:'治療と仕事の両立支援ナビ',description:'病気を抱えながら働く人や支援者向けに、相談窓口・支援機関を探せます。',url:'https://chiryoutoshigoto.mhlw.go.jp/',categories:['仕事','健康・医療'],tag:'治療と仕事'}
  ];

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

  function nextSteps(issue){return specialNextSteps[issue.id]||defaultNextSteps[issue.categoryId]||[];}
  function toolsFor(issue){const cat=categoryLabel(issue.categoryId);return publicTools.filter(t=>t.categories.includes(cat));}
  function toolCards(issue){
    const tools=toolsFor(issue);
    if(!tools.length)return '';
    return `<div class="consult-tools"><div class="consult-subhead"><strong>地域・公的な検索ツールで探す</strong><span>相談したあとに、実際の施設やサービスを探すときに使えます。</span></div><div class="consult-tool-grid">${tools.map(t=>`<a class="consult-tool-card" href="${esc(t.url)}" target="_blank" rel="noopener"><span class="tool-tag">${esc(t.tag)}</span><strong>${esc(t.name)}</strong><small>${esc(t.description)}</small><span class="tool-open">開く ↗</span></a>`).join('')}</div></div>`;
  }

  function render(){
    const cat=state.categoryId;
    const issue=currentIssue();
    const issueList=cat?data.issues.filter(i=>i.categoryId===cat):[];
    const resources=issue?resourcesFor(issue):[];
    const steps=issue?nextSteps(issue):[];
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
        ${categoryDetailPages[cat]?`<a class="consult-detail-link" href="${esc(categoryDetailPages[cat].url)}">${esc(categoryDetailPages[cat].label)} →</a>`:''}
      </div>`:''}
      ${issue?`<div class="consult-step consult-results" data-consult-print-area>
        <div class="consult-print-head" aria-hidden="true"><strong>まちの健康・医療案内｜相談先ナビ</strong><span>${esc(issue.label)}</span></div>
        <div class="selected-concern"><span>選択中</span><strong>${esc(issue.label)}</strong></div>
        ${issueDetailPages[issue.id]?`<a class="consult-detail-link" href="${esc(issueDetailPages[issue.id].url)}">${esc(issueDetailPages[issue.id].label)} →</a>`:''}
        ${steps.length?`<div class="next-step-box"><div class="consult-subhead"><strong>相談したあとにできること</strong><span>全部を一度にする必要はありません。できそうなものからで大丈夫です。</span></div><ul>${steps.map(x=>`<li><label><input type="checkbox"> <span>${esc(x)}</span></label></li>`).join('')}</ul></div>`:''}
        ${(issue.communityResourceTypes||[]).length?`<div class="community-types"><strong>地域で利用できる支援の例</strong><div>${issue.communityResourceTypes.map(x=>`<span>${esc(x)}</span>`).join('')}</div><p class="community-search-help"><b>もう少し詳しく探したいときは</b><br>下の言葉を参考に、<strong>「諫早市 ＋ キーワード」</strong>で検索してみてください。地域で利用できる支援やサービスが見つかることがあります。</p></div>`:''}
        ${toolCards(issue)}
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
