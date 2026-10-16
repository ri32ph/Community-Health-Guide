(function(){
  const data=window.MACHI_CONSULTATION_DATA;
  const mount=document.querySelector('[data-consultation-nav]');
  if(!data||!mount)return;

  const state={categoryId:null,issueId:null,channel:'all'};
  // The preceding consultation-topics.js already defines the eight visible
  // categories and their issues. Reuse its canonical IDs rather than
  // maintaining a second, incompatible grouping.
  const displayGroups = data.categories.map(category => ({
    ...category,
    members: [category.id]
  }));
  const groupFor = id => displayGroups.find(group => group.id === id);

  const channelLabels={all:'すべて', 'in-person':'地域の窓口',phone:'電話',web:'インターネット',sns:'SNS',chat:'チャット','sign-language':'手話','text-relay':'文字・電話リレー'};
  const categoryLabel=id=>data.categories.find(c=>c.id===id)?.label||'';
  const currentIssue=()=>data.issues.find(i=>i.id===state.issueId);
  const categoryDetailPages={medical:{url:'health.html',label:'健康・医療について詳しく見る'},pregnancy:{url:'child-parenting.html',label:'妊娠・子育ての地域情報を見る'},child:{url:'child-parenting.html',label:'子ども・子育てについて詳しく見る'},elderly:{url:'elderly-care.html',label:'高齢者・介護について詳しく見る'},'disability-work':{url:'disability-development.html',label:'障害・発達について詳しく見る'},'life-money':{url:'money-life.html',label:'暮らし・お金について詳しく見る'},safety:{url:'legal-assets.html',label:'法律・財産について詳しく見る'}};
  const issueDetailPages={'health-smoking':{url:'smoking-cessation.html',label:'禁煙の方法と相談先・薬局の探し方を見る'},'mental-bereavement':{url:'after-loss.html',label:'大切な方を亡くされたあとの手続き・相談を見る'},'pregnancy-emergency-contraception':{url:'emergency-contraception.html',label:'緊急避妊薬の入手方法と諫早市内の取扱先を見る'}};
  const resourceCategoryAliases={
    medical:['健康・医療'],mental:['こころ'],pregnancy:['子ども・子育て','健康・医療','家族・パートナー'],child:['子ども・子育て'],elderly:['高齢者・介護','これからの療養・看取り'],'disability-work':['障害・発達','仕事'],'life-money':['お金・生活','住まい'],safety:['家族・パートナー','契約・法律・財産','犯罪・被害']
  };
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
  defaultNextSteps.medical=defaultNextSteps.health;
  defaultNextSteps.pregnancy=['今の状況と最後の月経、気になる症状を整理する','医療機関や相談窓口に早めに相談する','必要に応じて今後のことを一緒に考える'];
  defaultNextSteps['disability-work']=['困っている場面と希望する働き方を整理する','障害・就労・生活の相談先につながる','利用できる制度や支援を確認する'];
  defaultNextSteps['life-money']=defaultNextSteps.money;
  defaultNextSteps.safety=['今いる場所の安全を確認する','記録や資料を安全に残す','状況に合う警察・法律・人権・生活支援につながる'];

  const specialNextSteps={
    'child-development':['気になっている様子を、いつ・どこで見られるかメモする','園や学校での様子も聞いてみる','発達相談後、必要なら児童発達支援などを探す'],
    'child-abuse-concern':['子どもの安全を最優先にする','迷う段階でも189などに相談する','差し迫った危険がある場合は110・119を利用する'],
    'elderly-dementia':['もの忘れや生活上の変化を具体的にメモする','地域包括支援センターや医療機関に相談する','認知症カフェ・介護予防・家族支援などを探す'],
    'money-living':['今月困っている支払いを整理する','諫早くらしの相談室で利用できる制度を確認する','食支援・就労・住まいの支援も必要なら一緒に相談する'],
    'family-afraid':['今いる場所が安全か確認する','危険が迫っていれば110、安全を確保できれば相談窓口につながる','避難・住まい・生活費・法律についても必要に応じて相談する'],
    'family-dv-unsure':['「DVかどうか」を自分で判断しなくても相談できる','怖い・つらいと感じる状況をそのまま相談員に伝える','必要なら安全確保や生活支援について一緒に考える'],
    'mental-suicide':['今、自分を傷つける危険が差し迫っている場合は119・110など緊急支援につながる','一人にならず、電話・SNS・身近な人など使いやすい方法で相談する','継続して支えてくれる医療・生活支援につながる'],
    'health-where-to-go':['緊急性が高い症状なら119を利用する','救急車や今すぐの受診を迷うときは#7119を利用する','受診先を探すときは医療情報ネットを利用する'],
    'health-smoking':['自分に合う禁煙方法を医師・薬剤師などに相談する','市販薬を希望する場合は、かかりつけ薬局や健康サポート薬局から探す','来店前に、禁煙補助薬の在庫と相談できる薬剤師がいるか電話で確認する'],
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
  function resourcesFor(issue,channel=state.channel){
    const cat=categoryLabel(issue.categoryId);
    const direct=new Set(issue.firstContactIds||[]);
    return allResources().filter(r=>{
      const methodOk=channel==='all'||(r.channels||[]).includes(channel);
      if(!methodOk)return false;
      if(direct.has(r.id))return true;
      const aliases=resourceCategoryAliases[issue.categoryId]||[cat];
      if(!(r.categories||[]).some(category=>aliases.includes(category)))return false;
      if(r.type==='dial') return overlap(issue,r)>0; // Never show unrelated emergency numbers solely because an issue is urgent.
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
  function resourceCard(r, preferred=false){
    const url=r.officialUrl||r.url||'#';
    const operator=r.operator||r.organization||r.area||'';
    const isDial=r.type==='dial';
    const number=r.number||'';
    const call=isDial?`<button class="resource-call" type="button" data-dial-id="${esc(r.id)}">${esc(number)} に電話する</button>`:'';
    const phone=(!isDial&&r.phone)?`<p class="resource-phone">電話：<strong>${esc(r.phone)}</strong></p>`:'';
    const localCall=(!isDial&&r.phone&&(r.channels||[]).includes('phone'))?`<button class="resource-call" type="button" data-local-call="${esc(r.id)}">電話する（確認画面へ）</button>`:'';
    const hours=[
      r.receptionHours?['来庁受付',r.receptionHours]:null,
      r.telephoneHours?['電話対応',r.telephoneHours]:null,
      r.consultationHours?['専門相談',r.consultationHours]:null
    ].filter(Boolean);
    if(r.availability){
      const kind=r.availability==='全国共通'?'利用範囲':r.type==='dial'?'電話受付':(r.channels||[]).includes('chat')&&!(r.channels||[]).includes('in-person')?'チャット・SNSの受付':'相談・サービスの受付';
      hours.push([kind,r.availability]);
    }
    const methodNames={phone:'電話',web:'Web',sns:'SNS',chat:'チャット','in-person':'来所・対面','sign-language':'手話','text-relay':'文字・電話リレー'};
    const methods=[...new Set((r.channels||[]).map(c=>methodNames[c]).filter(Boolean))].join('・');
    const practical=[
      methods?['相談方法',methods]:null,
      r.audience?['相談できる人',r.audience]:null,
      r.reservationStatus?['予約',r.reservationStatus]:null
    ].filter(Boolean);
    const verifiedDate=(typeof r.verifiedAt==='string'&&/^\\d{4}-\\d{2}-\\d{2}$/.test(r.verifiedAt)&&!Number.isNaN(Date.parse(r.verifiedAt)))?r.verifiedAt:null;
    const verificationText=verifiedDate?'情報最終確認：'+verifiedDate.replace(/-/g,'/'):'情報最終確認：未登録';
    const meta=hours.map(([label,value])=>`<span class="consult-hour-item"><strong>${esc(label)}</strong> ${esc(value)}</span>`).join('')+(r.fee?`<span class="consult-hour-item"><strong>費用</strong> ${esc(r.fee)}</span>`:'');
    return `<article class="consult-resource ${r.type==='dial'&&r.urgency==='emergency'?'is-emergency':''}">
      <div class="resource-top">${preferred?'<span class="source-badge preferred-contact">この相談の優先窓口</span>':'<span class="source-badge related-contact">関連する相談先</span>'}${sourceBadge(r)}${channelBadges(r)}</div>
      <h4>${isDial?`<span class="resource-number">${esc(number)}</span>`:''}${esc(r.name)}</h4>
      ${operator?`<p class="resource-operator">${esc(operator)}</p>`:''}
      <p>${esc(r.description||'')}</p>${phone}
      ${meta?`<p class="resource-meta">${meta}</p>`:''}
      ${practical.length?`<dl class="consult-practical">${practical.map(([label,value])=>`<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl>`:''}
      <div class="resource-actions">${call}${localCall}<a class="resource-official" href="${esc(url)}" target="_blank" rel="noopener">公式情報を見る ↗</a></div>
      <p class="consult-verified" title="各窓口の公開情報を最後に照合した日">${esc(verificationText)}</p>\n      ${url!=='#'?`<p class="consult-print-official">公式情報：${esc(url)}</p>`:''}\n      ${r.note?`<p class="resource-note">${esc(r.note)}</p>`:''}
      ${r.id==='isahaya-houkatsu'?'<p><a class="consult-detail-link" href="houkatsu-finder.html">お住まいの町名から担当センターを探す →</a></p>':''}
    </article>`;
  }

  function nextSteps(issue){return (specialNextSteps[issue.id]||defaultNextSteps[issue.categoryId]||[]).slice(0,3);}
  function toolsFor(issue){const cat=categoryLabel(issue.categoryId);const aliases=resourceCategoryAliases[issue.categoryId]||[cat];return publicTools.filter(t=>t.categories.some(category=>aliases.includes(category)));}
  function toolCards(issue){
    const tools=toolsFor(issue);
    if(!tools.length)return '';
    return `<div class="consult-tools"><div class="consult-subhead"><strong>地域・公的な検索ツールで探す</strong><span>相談したあとに、実際の施設やサービスを探すときに使えます。</span></div><div class="consult-tool-grid">${tools.map(t=>`<a class="consult-tool-card" href="${esc(t.url)}" target="_blank" rel="noopener"><span class="tool-tag">${esc(t.tag)}</span><strong>${esc(t.name)}</strong><small>${esc(t.description)}</small><span class="tool-open">開く ↗</span></a>`).join('')}</div></div>`;
  }

  // Display-only subheadings; issue IDs and their consultation destinations are unchanged.
  const subgroupRules={
    medical:[['受診・医療の相談',['health-where-to-go','health-night-holiday','health-difficult-disease','health-medical-safety','family-missing']],['薬・健診・健康づくり',['health-medication','health-checkup','health-prevention','health-smoking','health-swallowing']]],
    mental:[['こころの不調・つらさ',['mental-depressed','mental-sleep','mental-hikikomori','mental-suicide','mental-bereavement']],['依存症の相談',['mental-addiction','mental-alcohol']]],
    pregnancy:[['妊娠・出産',['pregnancy-check','pregnancy-unexpected','pregnancy-birth','pregnancy-fertility']],['避妊・性の健康',['pregnancy-emergency-contraception','sexual-health-sti','sexual-health-contraception']]],
    child:[['育児・発達・居場所',['child-parenting-anxiety','child-development','child-group-life','child-place','child-young-carer']],['学校・健康・安全',['child-school','child-health','child-abuse-concern']]],
    elderly:[['介護・生活・認知症',['elderly-care-start','elderly-dementia','elderly-alone','elderly-caregiver','elderly-frail','elderly-wandering','elderly-driving']],['在宅療養・人生の最終段階',['endoflife-homecare','endoflife-acp']]],
    'disability-work':[['障害・発達・相談方法',['disability-service','disability-adult-development','disability-child-service','accessibility-contact']],['仕事・働き方',['work-find','work-disability','work-leave']]],
    'life-money':[['生活費・家計・借金',['money-living','money-debt','money-medical','money-family','money-food']],['住まい',['money-rent','housing-public']]],
    safety:[['暴力・被害・安全',['family-afraid','family-sexual-violence','child-safety-report','crime-stalker','crime-scam']],['契約・人権・法律',['legal-consumer','human-rights']]]
  };
  function issueSections(cat,items){
    const rules=subgroupRules[cat]||[];
    const seen=new Set();
    const sections=rules.map(([title,ids])=>({title,issues:ids.map(id=>items.find(i=>i.id===id)).filter(Boolean).filter(i=>{if(seen.has(i.id))return false;seen.add(i.id);return true})})).filter(section=>section.issues.length);
    const remaining=items.filter(i=>!seen.has(i.id));
    if(remaining.length)sections.push({title:'その他の相談',issues:remaining});
    return sections.map(section=>`<div class="consult-issue-section"><h3 class="consult-issue-heading">${esc(section.title)}</h3><div class="consult-issue-grid">${section.issues.map(i=>`<button type="button" class="consult-issue ${state.issueId===i.id?'is-active':''}" aria-pressed="${state.issueId===i.id}" data-issue="${esc(i.id)}">${esc(i.label)}</button>`).join('')}</div></div>`).join('');
  }

  function render(){
    const cat=state.categoryId;
    const issue=currentIssue();
    const group=groupFor(cat);
    const issueList = group ? data.issues.filter(i => i.categoryId === group.id) : [];
    if(group && issueList.length === 0) console.error('[consultation-nav] No matching issues for group:', cat, 'data category ids:', [...new Set(data.issues.map(i=>i.categoryId))]);
    const resources=issue?resourcesFor(issue):[];
    const allMethodResources=issue?resourcesFor(issue,'all'):[];
    const steps=issue?nextSteps(issue):[];
    mount.innerHTML=`
      <div class="consult-step">
        <p class="consult-step-label"><span>1</span> 目的別に探す</p>
        <div class="consult-category-grid">
          ${displayGroups.map(c=>`<button type="button" class="consult-category ${cat===c.id?'is-active':''}" aria-pressed="${cat===c.id}" data-category="${esc(c.id)}"><span class="category-mark">${esc(c.icon)}</span><span>${esc(c.label)}</span></button>`).join('')}
        </div>
      </div>
      ${cat?`<div class="consult-step">
        <p class="consult-step-label"><span>2</span> 今の悩みに近いものを選んでください</p>
        <div class="consult-issue-sections">${issueList.length ? issueSections(cat,issueList) : '<p class="consult-empty">相談内容を表示できません。ページを更新してください。</p>'}</div>
        ${group&&group.members.length===1&&categoryDetailPages[cat]?`<a class="consult-detail-link" href="${esc(categoryDetailPages[cat].url)}">${esc(categoryDetailPages[cat].label)} →</a>`:''}
      </div>`:''}
      ${issue?`<div class="consult-step consult-results" data-consult-print-area>
        <div class="consult-print-head"><strong>まちの健康・医療案内｜相談先ナビ</strong><span>${esc(issue.label)}</span></div><div class="consult-print-source"><p>PDF出力日：<span data-print-date></span>（情報の最終確認日ではありません）</p><p>掲載情報は変更されることがあります。連絡前に各窓口の公式情報を確認してください。</p><p>案内ページ：https://machicare.vercel.app/index.html#local</p></div>
        <div class="selected-concern"><span>選択中</span><strong>${esc(issue.label)}</strong></div>
        <button type="button" class="consult-print-result" data-print-consultation aria-label="この相談結果を印刷またはPDFに保存">この相談結果を印刷・PDF保存</button>
        ${issueDetailPages[issue.id]?`<a class="consult-detail-link" href="${esc(issueDetailPages[issue.id].url)}">${esc(issueDetailPages[issue.id].label)} →</a>`:''}
        ${issue.id==='pregnancy-emergency-contraception'?'<div class="next-step-box"><strong>販売・調剤できる薬局を確認する</strong><p>緊急避妊薬は取り扱う薬局・対応可能な薬剤師が限られます。来店前に在庫と対応状況を電話で確認してください。</p><a class="consult-detail-link" href="https://www.mhlw.go.jp/stf/kinnkyuuhininnyaku.html" target="_blank" rel="noopener">厚生労働省：緊急避妊薬の販売可能薬局一覧を見る ↗</a></div>':''}
        ${['health-where-to-go','health-night-holiday'].includes(issue.id)?'<p class="resource-note">#7119に接続できない場合は 095-801-1217。生命の危険がある場合は119へ。</p>':''}
        <p class="consult-step-label"><span>3</span> 相談方法を選べます</p>
        <div class="consult-channel-tabs" role="group" aria-label="相談方法で絞り込む">
          ${Object.entries(channelLabels).filter(([id])=>id==='all'||allMethodResources.some(r=>(r.channels||[]).includes(id))).map(([id,label])=>`<button type="button" class="channel-tab ${state.channel===id?'is-active':''}" aria-pressed="${state.channel===id}" data-channel="${esc(id)}">${esc(label)}</button>`).join('')}
        </div>
        ${resources.length?(() => {
          const direct=new Set(issue.firstContactIds||[]);
          const priority=resources.filter(r=>direct.has(r.id));
          const related=resources.filter(r=>!direct.has(r.id));
          return `
            ${priority.length?`<h3 class="consult-result-heading">まず相談する窓口</h3><div class="consult-resource-grid">${priority.map(r=>resourceCard(r,true)).join('')}</div>`:''}
            ${!priority.length&&related.length?'<p class="consult-related-hint">この相談で個別に指定された優先窓口はありません。以下の関連窓口から相談先を探せます。</p>':''}
          `;
        })():'<p class="consult-empty">この方法で表示できる相談先は現在登録していません。別の相談方法を選んでください。</p>'}
        ${steps.length?`<div class="next-step-box"><div class="consult-subhead"><strong>次にできること</strong><span>全部を一度にする必要はありません。できそうなものからで大丈夫です。</span></div><ul>${steps.map(x=>`<li><label><input type="checkbox"> <span>${esc(x)}</span></label></li>`).join('')}</ul></div>`:''}
        ${(issue.communityResourceTypes||[]).length?`<div class="community-types"><strong>地域で利用できる支援の例</strong><div>${issue.communityResourceTypes.map(x=>`<span>${esc(x)}</span>`).join('')}</div><p class="community-search-help"><b>もう少し詳しく探したいときは</b><br>下の言葉を参考に、<strong>「諫早市 ＋ キーワード」</strong>で検索してみてください。地域で利用できる支援やサービスが見つかることがあります。</p></div>`:''}
        ${toolCards(issue)}

        ${resources.length?(() => {
          const direct=new Set(issue.firstContactIds||[]);
          const priority=resources.filter(r=>direct.has(r.id));
          const related=resources.filter(r=>!direct.has(r.id));
          return related.length?`<details class="consult-related" ${priority.length?'':'open'}><summary>その他の相談先を見る（${related.length}件）</summary><p class="consult-related-hint">相談方法を変えると表示される窓口も変わります。</p><div class="consult-resource-grid">${related.map(r=>resourceCard(r,false)).join('')}</div></details>`:'';
        })():''}
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
    const print=e.target.closest('[data-print-consultation]');
    if(print){
      const today=new Date();
      const dateLabel=new Intl.DateTimeFormat('ja-JP',{year:'numeric',month:'long',day:'numeric'}).format(today);
      mount.querySelectorAll('[data-print-date]').forEach(el=>{el.textContent=dateLabel;});
      document.body.classList.add('print-consultation-only');
      try{window.print();}finally{
        // Keep print rules active until the system print dialog has finished.
      }
      return;
    }
    const localCall=e.target.closest('[data-local-call]');
    if(localCall){
      const resource=allResources().find(r=>r.id===localCall.dataset.localCall);
      if(resource&&resource.phone&&window.openCallConfirm){
        const number=resource.phone;
        window.openCallConfirm({
          number,
          tel:number.replace(/[^0-9+#]/g,''),
          confirmTitle:resource.name+'に電話しますか？',
          confirmMessage:'電話番号：'+number+'。受付時間と相談内容を確認してからおかけください。',
          urgency:'normal'
        });
      }
      return;
    }
    const dial=e.target.closest('[data-dial-id]');
    if(dial){
      const r=data.quickDials.find(x=>x.id===dial.dataset.dialId);
      if(r&&window.openCallConfirm)window.openCallConfirm(r);
    }
  });
  let printOpenedDetails=[];
  window.addEventListener('beforeprint',()=>{
    if(!document.body.classList.contains('print-consultation-only'))return;
    printOpenedDetails=[...mount.querySelectorAll('.consult-related:not([open])')];
    printOpenedDetails.forEach(el=>{el.open=true;});
  });
  window.addEventListener('afterprint',()=>{
    printOpenedDetails.forEach(el=>{el.open=false;});
    printOpenedDetails=[];
    document.body.classList.remove('print-consultation-only');
  });
  render();
})();
