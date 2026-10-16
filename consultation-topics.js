(function(){
  const data=window.MACHI_CONSULTATION_DATA;
  if(!data)return;

  const original=new Map(data.issues.map(item=>[item.id,item]));
  const categories=[
    {id:'medical',label:'医療・薬・健康',icon:'医'},
    {id:'mental',label:'こころ・依存症',icon:'心'},
    {id:'pregnancy',label:'妊娠・性の健康',icon:'妊'},
    {id:'child',label:'子ども・子育て',icon:'子'},
    {id:'elderly',label:'高齢者・介護',icon:'介'},
    {id:'disability-work',label:'障害・仕事',icon:'働'},
    {id:'life-money',label:'暮らし・お金',icon:'暮'},
    {id:'safety',label:'安全・人権・法律',icon:'守'}
  ];

  function topic(categoryId,id,label,options={}){
    const base=original.get(options.from||id)||{};
    return {
      ...base,
      id,
      categoryId,
      label,
      keywords:options.keywords||base.keywords||label.split(/[・、について]/).filter(Boolean),
      firstContactIds:options.firstContactIds||base.firstContactIds||[],
      communityResourceTypes:options.communityResourceTypes||base.communityResourceTypes||[],
      urgency:options.urgency||base.urgency||'normal',
      ...(options.note?{note:options.note}:base.note?{note:base.note}:{})
    };
  }

  const issues=[
    // 医療・薬・健康（10）
    topic('medical','health-where-to-go','病院へ行くか迷っている',{note:'呼吸が苦しい、意識がおかしい、突然の激しい痛みなど、生命の危険がある場合は119。救急車や受診を迷う場合は#7119（つながらない場合は095-801-1217）を案内する。',firstContactIds:['nagasaki-7119']}),
    topic('medical','health-night-holiday','夜間・休日に診てもらいたい',{from:'health-where-to-go',keywords:['夜間','休日','救急','当番医'],urgency:'priority',firstContactIds:['nagasaki-7119'],note:'重い症状や生命の危険がある場合は119。受診の判断に迷う場合は#7119、受診先を探す場合は休日当番医や医療情報ネットを案内する。'}),
    topic('medical','health-medication','薬の飲み方・副作用・飲み合わせが心配'),
    topic('medical','health-checkup','健診結果の見方や生活改善について相談したい'),
    topic('medical','health-prevention','健診・がん検診・予防について知りたい'),
    topic('medical','health-swallowing','食事や飲み込みが難しくなった',{from:'health-nutrition',keywords:['食事','嚥下','飲み込み','むせ','栄養'],urgency:'priority',note:'突然飲み込めない、呼吸が苦しい、意識がおかしい場合は緊急対応を優先する。徐々に食べにくくなった場合は医療・歯科・栄養・介護の相談先を案内する。'}),
    topic('medical','health-smoking','禁煙したい',{from:'health-prevention',keywords:['禁煙','たばこ','禁煙外来','禁煙補助薬','ニコチンガム','ニコチンパッチ'],firstContactIds:['isahaya-health','isahaya-health-promotion'],communityResourceTypes:['禁煙外来','かかりつけ薬局・薬剤師','健康サポート薬局','OTC医薬品を扱う薬局'],note:'禁煙補助薬の市販薬を取り扱う薬局の公開一覧はないため、まずはかかりつけ薬局・薬剤師へ相談する。健康サポート薬局やOTC医薬品の取扱品目数も、相談先を探す際の参考にできる。'}),
    topic('medical','health-difficult-disease','難病の治療や生活について相談したい',{from:'health-medical-safety',keywords:['難病','治療','療養','生活'],firstContactIds:['isahaya-health-promotion']}),
    topic('medical','health-medical-safety','医療機関での対応や医療について相談したい'),
    topic('medical','family-missing','家族と連絡が取れない・安否が心配',{from:'elderly-wandering',keywords:['安否','行方不明','連絡が取れない','事故'],urgency:'urgent',firstContactIds:['nagasaki-police'],note:'事故や事件、緊急の行方不明が疑われる場合は110。一般的な家族関係の相談とは分けて案内する。'}),

    // こころ・依存症（7）
    topic('mental','mental-depressed','気分が落ち込む・不安が強い'),
    topic('mental','mental-sleep','眠れない・こころの不調が続いている'),
    topic('mental','mental-hikikomori','外出や人との交流が難しい'),
    topic('mental','mental-addiction','ギャンブルや買い物などをやめられない',{keywords:['ギャンブル','買い物','依存','やめられない'],note:'ギャンブル、買い物、アルコール、薬物では必要な支援が異なる。状況を確認して相談先を分ける。'}),
    topic('mental','mental-alcohol','お酒や薬物をやめられない',{from:'mental-addiction',keywords:['アルコール','お酒','薬物','依存'],firstContactIds:['isahaya-mental','nagasaki-mental']}),
    topic('mental','mental-suicide','生きるのがつらい・消えてしまいたい',{note:'今、自分を傷つける危険が差し迫っている場合は119・110などの緊急支援を優先する。継続的な悩みには、本人が使いやすい電話・SNS・対面の相談先を案内する。'}),
    topic('mental','mental-bereavement','大切な人を亡くし、つらさが続いている'),

    // 妊娠・性の健康（7）
    topic('pregnancy','pregnancy-check','妊娠しているか確認したい',{from:'health-where-to-go',keywords:['妊娠','妊娠検査','生理','産婦人科'],urgency:'priority',firstContactIds:['isahaya-health-promotion'],note:'妊娠の確認や受診、これからのことについて相談できる。強い腹痛、失神、大量出血がある場合は速やかな受診を案内する。'}),
    topic('pregnancy','pregnancy-emergency-contraception','緊急避妊薬を探したい',{from:'health-medication',keywords:['緊急避妊薬','アフターピル','避妊','薬局'],urgency:'urgent',firstContactIds:[],note:'できるだけ早く入手・服用できるよう、厚生労働省の販売可能薬局一覧や医療機関を確認する。来院・来店前に在庫と対応可能な医師・薬剤師を電話で確認する。'}),
    topic('pregnancy','pregnancy-unexpected','予期しない妊娠について相談したい',{from:'health-where-to-go',keywords:['予期しない妊娠','妊娠相談','産婦人科'],firstContactIds:['isahaya-health-promotion']}),
    topic('pregnancy','pregnancy-birth','妊娠・出産について相談したい',{from:'child-parenting-anxiety',keywords:['妊娠','出産','妊婦健診','母子手帳'],firstContactIds:['isahaya-sukusuku']}),
    topic('pregnancy','pregnancy-fertility','不妊・不育について相談したい',{from:'health-medical-safety',keywords:['不妊','不育','妊活','治療'],firstContactIds:['isahaya-health-promotion']}),
    topic('pregnancy','sexual-health-sti','性感染症について相談したい',{from:'health-where-to-go',keywords:['性感染症','STI','検査','治療'],firstContactIds:['isahaya-health-promotion']}),
    topic('pregnancy','sexual-health-contraception','性や避妊について相談したい',{from:'health-medication',keywords:['性','避妊','コンドーム','相談'],firstContactIds:['isahaya-health-promotion']}),

    // 子ども・子育て（8）
    topic('child','child-parenting-anxiety','子育てがつらい・不安がある'),
    topic('child','child-development','ことばや発達が気になる'),
    topic('child','child-group-life','園や集団生活になじめない'),
    topic('child','child-school','学校に行けない・学校生活が心配'),
    topic('child','child-abuse-concern','子どもへの虐待が心配',{note:'自分の子育てへの不安は子育て相談へつなぐ。虐待が疑われる子どもの保護は189、差し迫った危険がある場合は110を案内する。'}),
    topic('child','child-place','親子で過ごせる場所・つながりがほしい'),
    topic('child','child-young-carer','家族の世話や介護をしていて大変',{from:'disability-family-rest',keywords:['ヤングケアラー','家族の世話','介護','学校','仕事'],firstContactIds:['nagasaki-support-center','isahaya-civic']}),
    topic('child','child-health','子どもの病気や体調が心配',{from:'health-where-to-go',keywords:['子ども','発熱','体調','小児科'],urgency:'priority',firstContactIds:['nagasaki-8000','nagasaki-7119']}),

    // 高齢者・介護（9）
    topic('elderly','elderly-care-start','親や家族の介護について相談したい'),
    topic('elderly','elderly-dementia','もの忘れ・認知症が気になる'),
    topic('elderly','elderly-alone','一人暮らしの親・高齢者が心配'),
    topic('elderly','elderly-caregiver','介護する家族が疲れている'),
    topic('elderly','elderly-frail','外出や人との交流が減ってきた'),
    topic('elderly','elderly-wandering','認知症の家族が行方不明になるのが心配'),
    topic('elderly','elderly-driving','運転を続けても大丈夫か心配',{from:'elderly-dementia',keywords:['高齢者','運転','免許','認知機能'],firstContactIds:['isahaya-houkatsu','nagasaki-police']}),
    topic('elderly','endoflife-homecare','自宅で療養できるのか知りたい'),
    topic('elderly','endoflife-acp','最期の医療やケアについて考えたい'),

    // 障害・仕事（7）
    topic('disability-work','disability-service','障害福祉サービスを利用したい'),
    topic('disability-work','disability-adult-development','発達特性や生活のしづらさを相談したい'),
    topic('disability-work','disability-child-service','子どもの療育や放課後の支援を探したい'),
    topic('disability-work','work-find','仕事を探したい'),
    topic('disability-work','work-disability','病気・障害・発達特性と仕事を両立したい'),
    topic('disability-work','work-leave','仕事を休みたい・辞めた・働けない',{from:'work-cannot',keywords:['休職','退職','働けない','離職'],firstContactIds:['isahaya-workwork','isahaya-kurashi']}),
    topic('disability-work','accessibility-contact','聞こえにくい・電話以外で相談したい',{from:'disability-going-out',keywords:['聞こえ','聴覚','手話','文字','電話以外'],firstContactIds:['isahaya-disability']}),

    // 暮らし・お金（7）
    topic('life-money','money-living','生活費が足りない'),
    topic('life-money','money-rent','家賃が払えない・住まいを失いそう'),
    topic('life-money','money-debt','借金や支払いが重なっている'),
    topic('life-money','money-medical','医療費の支払いが心配'),
    topic('life-money','money-family','家計をどう立て直せばよいか分からない'),
    topic('life-money','money-food','食べるものや日用品にも困っている'),
    topic('life-money','housing-public','市営住宅について知りたい'),

    // 安全・人権・法律（7）
    topic('safety','family-afraid','家族やパートナーから暴力を受けている',{urgency:'urgent',firstContactIds:['isahaya-women','dv-8008'],note:'加害者に閲覧を知られる危険がある。安全な端末・連絡方法を選び、危険が迫っている場合は110を優先する。'}),
    topic('safety','family-sexual-violence','性暴力の被害について相談したい',{urgency:'urgent',firstContactIds:['nagasaki-sexual-violence','sexual-violence-8891'],note:'被害直後は安全確保と医療を優先する。時間が経ってからでも相談できる。長崎県のサポートながさき、全国共通番号#8891を案内する。'}),
    topic('safety','child-safety-report','虐待が疑われる子どもの安全を守りたい',{from:'child-abuse-concern',urgency:'urgent',firstContactIds:['child-abuse-189'],note:'迷う段階でも189へ相談できる。子どもに差し迫った危険がある場合は110。'}),
    topic('safety','crime-stalker','つきまとい・監視・しつこい連絡が怖い'),
    topic('safety','legal-consumer','契約・通販・定期購入で困っている'),
    topic('safety','crime-scam','詐欺かもしれない・不審な請求がある'),
    topic('safety','human-rights','差別・人権侵害・法律について相談したい',{from:'legal-unknown',keywords:['差別','人権','法律','相談'],firstContactIds:['isahaya-civic','nagasaki-police']})
  ];

  data.categories=categories;
  data.issues=issues;
})();
