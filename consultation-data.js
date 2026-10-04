window.MACHI_CONSULTATION_DATA = {
  "categories": [
    {
      "id": "child",
      "label": "子ども・子育て",
      "icon": "子"
    },
    {
      "id": "elderly",
      "label": "高齢者・介護",
      "icon": "介"
    },
    {
      "id": "money",
      "label": "お金・生活",
      "icon": "￥"
    },
    {
      "id": "family",
      "label": "家族・パートナー",
      "icon": "家"
    },
    {
      "id": "mental",
      "label": "こころ",
      "icon": "心"
    },
    {
      "id": "health",
      "label": "健康・医療",
      "icon": "医"
    },
    {
      "id": "disability",
      "label": "障害・発達",
      "icon": "支"
    },
    {
      "id": "work",
      "label": "仕事",
      "icon": "働"
    },
    {
      "id": "housing",
      "label": "住まい",
      "icon": "住"
    },
    {
      "id": "endoflife",
      "label": "これからの療養・看取り",
      "icon": "看"
    },
    {
      "id": "legal",
      "label": "契約・法律・犯罪被害",
      "icon": "法"
    }
  ],
  "issues": [
    {
      "id": "child-parenting-anxiety",
      "categoryId": "child",
      "label": "子育てがつらい・不安がある",
      "keywords": [
        "育児",
        "子育て",
        "つらい",
        "不安",
        "相談"
      ],
      "firstContactIds": [
        "isahaya-sukusuku"
      ],
      "communityResourceTypes": [
        "地域子育て支援センター",
        "親子の居場所",
        "子育て相談"
      ],
      "urgency": "normal"
    },
    {
      "id": "child-development",
      "categoryId": "child",
      "label": "ことばや発達が気になる",
      "keywords": [
        "ことば",
        "発達",
        "遅れ",
        "療育",
        "発達支援"
      ],
      "firstContactIds": [
        "isahaya-sukusuku",
        "isahaya-disability"
      ],
      "communityResourceTypes": [
        "発達支援教室",
        "児童発達支援",
        "保育所等訪問支援"
      ],
      "urgency": "normal"
    },
    {
      "id": "child-group-life",
      "categoryId": "child",
      "label": "園や集団生活になじめない",
      "keywords": [
        "保育園",
        "幼稚園",
        "集団",
        "こだわり",
        "落ち着き"
      ],
      "firstContactIds": [
        "isahaya-sukusuku"
      ],
      "communityResourceTypes": [
        "発達専門相談",
        "児童発達支援",
        "保育所等訪問支援"
      ],
      "urgency": "normal"
    },
    {
      "id": "child-school",
      "categoryId": "child",
      "label": "学校に行けない・学校生活が心配",
      "keywords": [
        "不登校",
        "学校",
        "いじめ",
        "登校",
        "教育相談"
      ],
      "firstContactIds": [
        "isahaya-civic",
        "nagasaki-support-center"
      ],
      "communityResourceTypes": [
        "教育相談",
        "学校・スクールカウンセラー",
        "子どもの居場所"
      ],
      "urgency": "priority"
    },
    {
      "id": "child-abuse-concern",
      "categoryId": "child",
      "label": "子どもの安全や虐待が心配",
      "keywords": [
        "虐待",
        "暴力",
        "ネグレクト",
        "子ども",
        "安全"
      ],
      "firstContactIds": [
        "nagasaki-support-center",
        "nagasaki-police"
      ],
      "communityResourceTypes": [
        "児童相談",
        "子ども家庭支援",
        "一時保護等の安全支援"
      ],
      "urgency": "urgent",
      "note": "いま生命・身体に危険がある場合は110。児童相談所虐待対応ダイヤル189も案内候補。"
    },
    {
      "id": "child-place",
      "categoryId": "child",
      "label": "親子で過ごせる場所・つながりがほしい",
      "keywords": [
        "居場所",
        "交流",
        "親子",
        "孤立",
        "子育て支援センター"
      ],
      "firstContactIds": [
        "isahaya-sukusuku"
      ],
      "communityResourceTypes": [
        "地域子育て支援センター",
        "親子交流",
        "子育てサークル"
      ],
      "urgency": "normal"
    },
    {
      "id": "elderly-care-start",
      "categoryId": "elderly",
      "label": "親や家族の介護について相談したい",
      "keywords": [
        "介護",
        "親",
        "家族",
        "介護保険"
      ],
      "firstContactIds": [
        "isahaya-houkatsu"
      ],
      "communityResourceTypes": [
        "ケアマネジャー",
        "訪問介護",
        "通所介護",
        "短期入所"
      ],
      "urgency": "normal"
    },
    {
      "id": "elderly-dementia",
      "categoryId": "elderly",
      "label": "もの忘れ・認知症が気になる",
      "keywords": [
        "認知症",
        "もの忘れ",
        "記憶",
        "徘徊"
      ],
      "firstContactIds": [
        "isahaya-houkatsu"
      ],
      "communityResourceTypes": [
        "認知症専門相談",
        "認知症地域支援",
        "認知症カフェ等",
        "医療機関"
      ],
      "urgency": "normal"
    },
    {
      "id": "elderly-alone",
      "categoryId": "elderly",
      "label": "一人暮らしの親・高齢者が心配",
      "keywords": [
        "独居",
        "一人暮らし",
        "見守り",
        "高齢者"
      ],
      "firstContactIds": [
        "isahaya-houkatsu"
      ],
      "communityResourceTypes": [
        "見守り",
        "配食等の生活支援",
        "通いの場"
      ],
      "urgency": "priority"
    },
    {
      "id": "elderly-caregiver",
      "categoryId": "elderly",
      "label": "介護する家族が疲れている",
      "keywords": [
        "介護疲れ",
        "家族",
        "レスパイト",
        "負担"
      ],
      "firstContactIds": [
        "isahaya-houkatsu"
      ],
      "communityResourceTypes": [
        "短期入所",
        "家族支援",
        "通所介護",
        "介護者の集まり"
      ],
      "urgency": "priority"
    },
    {
      "id": "elderly-frail",
      "categoryId": "elderly",
      "label": "外出や人との交流が減ってきた",
      "keywords": [
        "フレイル",
        "閉じこもり",
        "運動",
        "交流",
        "介護予防"
      ],
      "firstContactIds": [
        "isahaya-houkatsu",
        "isahaya-health-promotion"
      ],
      "communityResourceTypes": [
        "語らん場",
        "介護予防教室",
        "運動教室",
        "地域サロン"
      ],
      "urgency": "normal"
    },
    {
      "id": "elderly-wandering",
      "categoryId": "elderly",
      "label": "認知症の家族が行方不明になるのが心配",
      "keywords": [
        "行方不明",
        "徘徊",
        "認知症",
        "見守り"
      ],
      "firstContactIds": [
        "isahaya-houkatsu",
        "nagasaki-police"
      ],
      "communityResourceTypes": [
        "オレンジセーフティネット",
        "見守り支援"
      ],
      "urgency": "priority"
    },
    {
      "id": "money-living",
      "categoryId": "money",
      "label": "生活費が足りない",
      "keywords": [
        "生活費",
        "収入",
        "困窮",
        "お金"
      ],
      "firstContactIds": [
        "isahaya-kurashi"
      ],
      "communityResourceTypes": [
        "生活困窮者自立支援",
        "家計改善支援",
        "食支援"
      ],
      "urgency": "priority"
    },
    {
      "id": "money-rent",
      "categoryId": "money",
      "label": "家賃が払えない・住まいを失いそう",
      "keywords": [
        "家賃",
        "退去",
        "住居",
        "住宅"
      ],
      "firstContactIds": [
        "isahaya-kurashi"
      ],
      "communityResourceTypes": [
        "住居確保給付金",
        "住宅相談",
        "生活困窮支援"
      ],
      "urgency": "priority"
    },
    {
      "id": "money-debt",
      "categoryId": "money",
      "label": "借金や支払いが重なっている",
      "keywords": [
        "借金",
        "ローン",
        "多重債務",
        "返済"
      ],
      "firstContactIds": [
        "isahaya-kurashi",
        "isahaya-civic"
      ],
      "communityResourceTypes": [
        "家計改善支援",
        "法律相談",
        "多重債務相談"
      ],
      "urgency": "priority"
    },
    {
      "id": "money-medical",
      "categoryId": "money",
      "label": "医療費の支払いが心配",
      "keywords": [
        "医療費",
        "入院費",
        "高額療養費",
        "支払い"
      ],
      "firstContactIds": [
        "isahaya-civic",
        "isahaya-kurashi"
      ],
      "communityResourceTypes": [
        "高額療養費等の公的制度",
        "医療機関の相談窓口",
        "生活困窮支援"
      ],
      "urgency": "normal"
    },
    {
      "id": "money-family",
      "categoryId": "money",
      "label": "家計をどう立て直せばよいか分からない",
      "keywords": [
        "家計",
        "収支",
        "滞納",
        "相談"
      ],
      "firstContactIds": [
        "isahaya-kurashi"
      ],
      "communityResourceTypes": [
        "家計相談支援",
        "就労支援",
        "生活支援"
      ],
      "urgency": "normal"
    },
    {
      "id": "money-food",
      "categoryId": "money",
      "label": "食べるものや日用品にも困っている",
      "keywords": [
        "食料",
        "食事",
        "日用品",
        "困窮"
      ],
      "firstContactIds": [
        "isahaya-kurashi"
      ],
      "communityResourceTypes": [
        "食支援",
        "フードバンク等",
        "子ども食堂等",
        "生活支援"
      ],
      "urgency": "priority"
    },
    {
      "id": "family-afraid",
      "categoryId": "family",
      "label": "パートナーや家族との関係が怖い・つらい",
      "keywords": [
        "DV",
        "暴力",
        "暴言",
        "怖い",
        "家族"
      ],
      "firstContactIds": [
        "isahaya-women",
        "nagasaki-support-center"
      ],
      "communityResourceTypes": [
        "DV相談",
        "安全確保支援",
        "女性支援"
      ],
      "urgency": "priority"
    },
    {
      "id": "family-control",
      "categoryId": "family",
      "label": "お金・行動・交友関係を強く制限されている",
      "keywords": [
        "経済的DV",
        "監視",
        "支配",
        "束縛"
      ],
      "firstContactIds": [
        "isahaya-women"
      ],
      "communityResourceTypes": [
        "DV相談",
        "生活支援",
        "法律相談"
      ],
      "urgency": "priority"
    },
    {
      "id": "family-separation",
      "categoryId": "family",
      "label": "別れたい・離婚したいがどうしたらよいか分からない",
      "keywords": [
        "離婚",
        "別居",
        "養育費",
        "親権"
      ],
      "firstContactIds": [
        "isahaya-women",
        "isahaya-civic"
      ],
      "communityResourceTypes": [
        "女性相談",
        "法律相談",
        "ひとり親支援"
      ],
      "urgency": "normal"
    },
    {
      "id": "family-dv-unsure",
      "categoryId": "family",
      "label": "これがDVなのか分からない",
      "keywords": [
        "DVかも",
        "暴言",
        "無視",
        "支配",
        "相談"
      ],
      "firstContactIds": [
        "isahaya-women"
      ],
      "communityResourceTypes": [
        "DV相談",
        "継続相談"
      ],
      "urgency": "priority"
    },
    {
      "id": "family-stalker",
      "categoryId": "family",
      "label": "つきまとい・監視・しつこい連絡が怖い",
      "keywords": [
        "ストーカー",
        "つきまとい",
        "GPS",
        "監視"
      ],
      "firstContactIds": [
        "nagasaki-police"
      ],
      "communityResourceTypes": [
        "警察相談",
        "被害者支援",
        "安全確保支援"
      ],
      "urgency": "urgent",
      "note": "いま危険が迫っている場合は110。"
    },
    {
      "id": "family-sexual-violence",
      "categoryId": "family",
      "label": "望まない性的な行為をされた・強要されている",
      "keywords": [
        "性暴力",
        "性被害",
        "強要",
        "不同意"
      ],
      "firstContactIds": [
        "nagasaki-sexual-violence",
        "nagasaki-police"
      ],
      "communityResourceTypes": [
        "性暴力ワンストップ支援",
        "医療支援",
        "法律相談",
        "カウンセリング"
      ],
      "urgency": "urgent"
    },
    {
      "id": "mental-depressed",
      "categoryId": "mental",
      "label": "気分が落ち込む・不安が強い",
      "keywords": [
        "うつ",
        "不安",
        "気分",
        "こころ"
      ],
      "firstContactIds": [
        "isahaya-mental",
        "nagasaki-mental"
      ],
      "communityResourceTypes": [
        "こころの相談",
        "精神科・心療内科",
        "相談支援"
      ],
      "urgency": "priority"
    },
    {
      "id": "mental-sleep",
      "categoryId": "mental",
      "label": "眠れない・こころの不調が続いている",
      "keywords": [
        "不眠",
        "眠れない",
        "ストレス",
        "心身"
      ],
      "firstContactIds": [
        "isahaya-mental"
      ],
      "communityResourceTypes": [
        "健康相談",
        "医療機関",
        "こころの相談"
      ],
      "urgency": "normal"
    },
    {
      "id": "mental-hikikomori",
      "categoryId": "mental",
      "label": "家から出られない・ひきこもりが心配",
      "keywords": [
        "ひきこもり",
        "外出",
        "家族",
        "孤立"
      ],
      "firstContactIds": [
        "isahaya-mental",
        "nagasaki-mental"
      ],
      "communityResourceTypes": [
        "ひきこもり支援",
        "家族相談",
        "居場所",
        "就労準備支援"
      ],
      "urgency": "normal"
    },
    {
      "id": "mental-addiction",
      "categoryId": "mental",
      "label": "お酒・ギャンブルなどをやめられない",
      "keywords": [
        "依存症",
        "アルコール",
        "ギャンブル",
        "薬物"
      ],
      "firstContactIds": [
        "isahaya-mental",
        "nagasaki-mental"
      ],
      "communityResourceTypes": [
        "依存症相談",
        "医療機関",
        "当事者・家族支援"
      ],
      "urgency": "priority"
    },
    {
      "id": "mental-suicide",
      "categoryId": "mental",
      "label": "生きるのがつらい・消えてしまいたい",
      "keywords": [
        "死にたい",
        "消えたい",
        "自殺",
        "希死念慮"
      ],
      "firstContactIds": [
        "isahaya-mental",
        "nagasaki-mental"
      ],
      "communityResourceTypes": [
        "こころの緊急相談",
        "精神科救急",
        "継続支援"
      ],
      "urgency": "urgent",
      "note": "いま自分を傷つける危険が差し迫っている場合は119・110等の緊急支援につなぐ。"
    },
    {
      "id": "mental-bereavement",
      "categoryId": "mental",
      "label": "大切な人を亡くし、つらさが続いている",
      "keywords": [
        "死別",
        "自死遺族",
        "悲嘆",
        "グリーフ"
      ],
      "firstContactIds": [
        "isahaya-mental"
      ],
      "communityResourceTypes": [
        "こころの相談",
        "遺族支援",
        "グリーフサポート"
      ],
      "urgency": "priority"
    },
    {
      "id": "health-checkup",
      "categoryId": "health",
      "label": "健診結果の見方や生活改善について相談したい",
      "keywords": [
        "健診",
        "血圧",
        "血糖",
        "コレステロール",
        "生活習慣"
      ],
      "firstContactIds": [
        "isahaya-health"
      ],
      "communityResourceTypes": [
        "保健師相談",
        "管理栄養士相談",
        "健康教室"
      ],
      "urgency": "normal"
    },
    {
      "id": "health-nutrition",
      "categoryId": "health",
      "label": "食事・体重・栄養について相談したい",
      "keywords": [
        "栄養",
        "食事",
        "体重",
        "肥満",
        "減塩"
      ],
      "firstContactIds": [
        "isahaya-health"
      ],
      "communityResourceTypes": [
        "管理栄養士相談",
        "食生活改善活動",
        "健康教室"
      ],
      "urgency": "normal"
    },
    {
      "id": "health-where-to-go",
      "categoryId": "health",
      "label": "病院に行った方がよいか・どこを受診するか迷う",
      "keywords": [
        "受診",
        "病院",
        "救急",
        "症状"
      ],
      "firstContactIds": [
        "isahaya-health-promotion"
      ],
      "communityResourceTypes": [
        "かかりつけ医",
        "休日当番医",
        "救急医療電話相談"
      ],
      "urgency": "priority"
    },
    {
      "id": "health-medication",
      "categoryId": "health",
      "label": "薬の飲み方・副作用・飲み合わせが心配",
      "keywords": [
        "薬",
        "副作用",
        "飲み合わせ",
        "服薬"
      ],
      "firstContactIds": [
        "isahaya-health-promotion"
      ],
      "communityResourceTypes": [
        "かかりつけ薬局",
        "薬剤師",
        "医療機関"
      ],
      "urgency": "normal"
    },
    {
      "id": "health-medical-safety",
      "categoryId": "health",
      "label": "医療機関での対応や医療について相談したい",
      "keywords": [
        "医療相談",
        "医療安全",
        "病院",
        "説明"
      ],
      "firstContactIds": [
        "isahaya-health-promotion",
        "isahaya-civic"
      ],
      "communityResourceTypes": [
        "県央地域医療安全相談センター",
        "医療機関の患者相談窓口"
      ],
      "urgency": "normal"
    },
    {
      "id": "health-prevention",
      "categoryId": "health",
      "label": "健診・がん検診・予防について知りたい",
      "keywords": [
        "健診",
        "がん検診",
        "予防",
        "健康づくり"
      ],
      "firstContactIds": [
        "isahaya-health-promotion"
      ],
      "communityResourceTypes": [
        "特定健診",
        "がん検診",
        "健康づくり事業",
        "運動教室"
      ],
      "urgency": "normal"
    },
    {
      "id": "disability-service",
      "categoryId": "disability",
      "label": "障害福祉サービスを利用したいが分からない",
      "keywords": [
        "障害福祉",
        "サービス",
        "相談支援",
        "手続き"
      ],
      "firstContactIds": [
        "isahaya-disability"
      ],
      "communityResourceTypes": [
        "計画相談支援",
        "居宅介護",
        "生活介護",
        "短期入所"
      ],
      "urgency": "normal"
    },
    {
      "id": "disability-adult-development",
      "categoryId": "disability",
      "label": "大人の発達特性や生活のしづらさを相談したい",
      "keywords": [
        "発達障害",
        "大人",
        "特性",
        "生活"
      ],
      "firstContactIds": [
        "isahaya-disability",
        "isahaya-workwork"
      ],
      "communityResourceTypes": [
        "発達障害者支援",
        "相談支援",
        "就労支援"
      ],
      "urgency": "normal"
    },
    {
      "id": "disability-work",
      "categoryId": "disability",
      "label": "障害や特性があり、働くことが不安",
      "keywords": [
        "障害",
        "就労",
        "仕事",
        "発達"
      ],
      "firstContactIds": [
        "isahaya-workwork",
        "isahaya-disability"
      ],
      "communityResourceTypes": [
        "就労移行支援",
        "就労継続支援A型・B型",
        "障害者就業・生活支援"
      ],
      "urgency": "normal"
    },
    {
      "id": "disability-family-rest",
      "categoryId": "disability",
      "label": "家族の介護・支援の負担を軽くしたい",
      "keywords": [
        "障害",
        "家族",
        "介護",
        "休息"
      ],
      "firstContactIds": [
        "isahaya-disability"
      ],
      "communityResourceTypes": [
        "短期入所",
        "日中一時支援",
        "相談支援"
      ],
      "urgency": "priority"
    },
    {
      "id": "disability-going-out",
      "categoryId": "disability",
      "label": "外出や社会参加を支えてほしい",
      "keywords": [
        "移動支援",
        "同行援護",
        "外出",
        "社会参加"
      ],
      "firstContactIds": [
        "isahaya-disability"
      ],
      "communityResourceTypes": [
        "移動支援",
        "同行援護",
        "行動援護",
        "地域活動"
      ],
      "urgency": "normal"
    },
    {
      "id": "disability-child-service",
      "categoryId": "disability",
      "label": "子どもの療育や放課後の支援を探したい",
      "keywords": [
        "療育",
        "児童発達支援",
        "放課後等デイサービス",
        "障害児"
      ],
      "firstContactIds": [
        "isahaya-sukusuku",
        "isahaya-disability"
      ],
      "communityResourceTypes": [
        "児童発達支援",
        "放課後等デイサービス",
        "保育所等訪問支援"
      ],
      "urgency": "normal"
    },
    {
      "id": "work-find",
      "categoryId": "work",
      "label": "仕事を探している",
      "keywords": [
        "就職",
        "求職",
        "仕事",
        "ハローワーク"
      ],
      "firstContactIds": [
        "isahaya-workwork"
      ],
      "communityResourceTypes": [
        "ハローワーク",
        "就職支援",
        "職業相談"
      ],
      "urgency": "normal"
    },
    {
      "id": "work-cannot",
      "categoryId": "work",
      "label": "働きたいけれど働けない・自信がない",
      "keywords": [
        "無職",
        "就労不安",
        "ブランク",
        "働けない"
      ],
      "firstContactIds": [
        "isahaya-kurashi",
        "isahaya-workwork"
      ],
      "communityResourceTypes": [
        "就労準備支援",
        "若者就労支援",
        "福祉就労"
      ],
      "urgency": "normal"
    },
    {
      "id": "work-disability",
      "categoryId": "work",
      "label": "病気・障害・発達特性と仕事を両立したい",
      "keywords": [
        "両立",
        "障害",
        "病気",
        "発達",
        "就労"
      ],
      "firstContactIds": [
        "isahaya-workwork"
      ],
      "communityResourceTypes": [
        "障害者就業・生活支援",
        "職業リハビリテーション",
        "福祉就労"
      ],
      "urgency": "normal"
    },
    {
      "id": "work-income-loss",
      "categoryId": "work",
      "label": "失業・休業で収入が減った",
      "keywords": [
        "失業",
        "休業",
        "収入減",
        "生活"
      ],
      "firstContactIds": [
        "isahaya-kurashi",
        "isahaya-workwork"
      ],
      "communityResourceTypes": [
        "就労支援",
        "生活困窮支援",
        "住居確保給付金"
      ],
      "urgency": "priority"
    },
    {
      "id": "work-trouble",
      "categoryId": "work",
      "label": "職場でのトラブルや人間関係に悩んでいる",
      "keywords": [
        "職場",
        "ハラスメント",
        "労働",
        "人間関係"
      ],
      "firstContactIds": [
        "isahaya-civic",
        "isahaya-mental"
      ],
      "communityResourceTypes": [
        "労働相談",
        "法律相談",
        "こころの相談"
      ],
      "urgency": "priority"
    },
    {
      "id": "work-young",
      "categoryId": "work",
      "label": "学校を出た後の進路・就職で悩んでいる",
      "keywords": [
        "若者",
        "進路",
        "就職",
        "就労"
      ],
      "firstContactIds": [
        "isahaya-workwork"
      ],
      "communityResourceTypes": [
        "若者サポートステーション",
        "ハローワーク",
        "就労支援"
      ],
      "urgency": "normal"
    },
    {
      "id": "housing-no-home",
      "categoryId": "housing",
      "label": "住む場所がない・失いそう",
      "keywords": [
        "住居",
        "ホームレス",
        "退去",
        "家"
      ],
      "firstContactIds": [
        "isahaya-kurashi"
      ],
      "communityResourceTypes": [
        "住居確保支援",
        "生活困窮支援",
        "住宅相談"
      ],
      "urgency": "urgent"
    },
    {
      "id": "housing-public",
      "categoryId": "housing",
      "label": "市営住宅について知りたい",
      "keywords": [
        "市営住宅",
        "公営住宅",
        "入居",
        "住宅"
      ],
      "firstContactIds": [
        "isahaya-housing"
      ],
      "communityResourceTypes": [
        "市営住宅",
        "住宅相談"
      ],
      "urgency": "normal"
    },
    {
      "id": "housing-rent",
      "categoryId": "housing",
      "label": "家賃を払い続けるのが難しい",
      "keywords": [
        "家賃",
        "収入",
        "滞納",
        "住居"
      ],
      "firstContactIds": [
        "isahaya-kurashi"
      ],
      "communityResourceTypes": [
        "住居確保給付金",
        "家計改善支援"
      ],
      "urgency": "priority"
    },
    {
      "id": "housing-dv",
      "categoryId": "housing",
      "label": "家族やパートナーから離れて安全に暮らしたい",
      "keywords": [
        "DV",
        "避難",
        "住居",
        "安全"
      ],
      "firstContactIds": [
        "isahaya-women",
        "nagasaki-police"
      ],
      "communityResourceTypes": [
        "安全確保",
        "一時避難",
        "生活再建支援"
      ],
      "urgency": "urgent"
    },
    {
      "id": "housing-barrierfree",
      "categoryId": "housing",
      "label": "高齢・障害で今の家では暮らしにくい",
      "keywords": [
        "住宅改修",
        "バリアフリー",
        "高齢者",
        "障害"
      ],
      "firstContactIds": [
        "isahaya-houkatsu",
        "isahaya-disability"
      ],
      "communityResourceTypes": [
        "住宅改修",
        "福祉用具",
        "介護・障害福祉サービス"
      ],
      "urgency": "normal"
    },
    {
      "id": "housing-empty",
      "categoryId": "housing",
      "label": "空き家・家の管理について相談したい",
      "keywords": [
        "空き家",
        "管理",
        "老朽",
        "住宅"
      ],
      "firstContactIds": [
        "isahaya-housing"
      ],
      "communityResourceTypes": [
        "空家相談",
        "住宅関連支援"
      ],
      "urgency": "normal"
    },
    {
      "id": "endoflife-homecare",
      "categoryId": "endoflife",
      "label": "自宅で療養できるのか知りたい",
      "keywords": [
        "在宅療養",
        "自宅",
        "訪問診療",
        "訪問看護"
      ],
      "firstContactIds": [
        "isahaya-houkatsu"
      ],
      "communityResourceTypes": [
        "訪問診療",
        "訪問看護",
        "訪問薬剤管理",
        "訪問介護",
        "ケアマネジャー"
      ],
      "urgency": "normal"
    },
    {
      "id": "endoflife-discharge",
      "categoryId": "endoflife",
      "label": "退院した後の生活が心配",
      "keywords": [
        "退院",
        "在宅",
        "病院",
        "介護"
      ],
      "firstContactIds": [
        "isahaya-houkatsu"
      ],
      "communityResourceTypes": [
        "病院の退院支援",
        "ケアマネジャー",
        "訪問看護",
        "在宅医療"
      ],
      "urgency": "priority"
    },
    {
      "id": "endoflife-home-death",
      "categoryId": "endoflife",
      "label": "家で最期まで過ごせるか知りたい",
      "keywords": [
        "看取り",
        "自宅",
        "最期",
        "在宅医療"
      ],
      "firstContactIds": [
        "isahaya-houkatsu"
      ],
      "communityResourceTypes": [
        "在宅医療",
        "訪問看護",
        "ケアマネジャー",
        "訪問介護",
        "薬局"
      ],
      "urgency": "normal"
    },
    {
      "id": "endoflife-acp",
      "categoryId": "endoflife",
      "label": "最期の医療やケアについて考えたい",
      "keywords": [
        "ACP",
        "人生会議",
        "延命治療",
        "意思決定"
      ],
      "firstContactIds": [
        "isahaya-houkatsu"
      ],
      "communityResourceTypes": [
        "ACP・人生会議",
        "かかりつけ医",
        "医療・介護専門職"
      ],
      "urgency": "normal"
    },
    {
      "id": "endoflife-family",
      "categoryId": "endoflife",
      "label": "家族を看取ることになり不安",
      "keywords": [
        "看取り",
        "家族",
        "不安",
        "終末期"
      ],
      "firstContactIds": [
        "isahaya-houkatsu",
        "isahaya-mental"
      ],
      "communityResourceTypes": [
        "訪問看護",
        "在宅医療",
        "介護支援",
        "家族支援"
      ],
      "urgency": "priority"
    },
    {
      "id": "endoflife-grief",
      "categoryId": "endoflife",
      "label": "大切な人を亡くした後のつらさを相談したい",
      "keywords": [
        "死別",
        "グリーフ",
        "遺族",
        "悲嘆"
      ],
      "firstContactIds": [
        "isahaya-mental"
      ],
      "communityResourceTypes": [
        "こころの相談",
        "遺族支援",
        "グリーフサポート"
      ],
      "urgency": "priority"
    },
    {
      "id": "legal-consumer",
      "categoryId": "legal",
      "label": "契約・通販・定期購入を解約したい",
      "keywords": [
        "契約",
        "通販",
        "定期購入",
        "解約"
      ],
      "firstContactIds": [
        "isahaya-consumer"
      ],
      "communityResourceTypes": [
        "消費生活相談",
        "消費者ホットライン188"
      ],
      "urgency": "normal"
    },
    {
      "id": "legal-scam",
      "categoryId": "legal",
      "label": "詐欺かもしれない・お金を請求されている",
      "keywords": [
        "詐欺",
        "架空請求",
        "特殊詐欺",
        "悪質商法"
      ],
      "firstContactIds": [
        "isahaya-consumer",
        "nagasaki-police"
      ],
      "communityResourceTypes": [
        "消費生活相談",
        "警察相談"
      ],
      "urgency": "priority"
    },
    {
      "id": "legal-family",
      "categoryId": "legal",
      "label": "離婚・養育費・相続など法律の相談をしたい",
      "keywords": [
        "法律",
        "相続",
        "離婚",
        "養育費"
      ],
      "firstContactIds": [
        "isahaya-civic"
      ],
      "communityResourceTypes": [
        "法律相談",
        "専門相談"
      ],
      "urgency": "normal"
    },
    {
      "id": "legal-crime",
      "categoryId": "legal",
      "label": "犯罪や暴力の被害にあった",
      "keywords": [
        "犯罪被害",
        "暴力",
        "被害者",
        "警察"
      ],
      "firstContactIds": [
        "nagasaki-police"
      ],
      "communityResourceTypes": [
        "犯罪被害者支援",
        "警察相談",
        "法律・心理支援"
      ],
      "urgency": "urgent",
      "note": "事件・事故が進行中など緊急時は110。"
    },
    {
      "id": "legal-sexual",
      "categoryId": "legal",
      "label": "性被害について誰かに相談したい",
      "keywords": [
        "性被害",
        "性暴力",
        "不同意",
        "痴漢"
      ],
      "firstContactIds": [
        "nagasaki-sexual-violence",
        "nagasaki-police"
      ],
      "communityResourceTypes": [
        "性暴力ワンストップ支援",
        "医療",
        "法律相談",
        "カウンセリング"
      ],
      "urgency": "urgent"
    },
    {
      "id": "legal-unknown",
      "categoryId": "legal",
      "label": "どこに相談すればよいのか分からない",
      "keywords": [
        "相談先",
        "分からない",
        "困りごと",
        "複数"
      ],
      "firstContactIds": [
        "isahaya-civic"
      ],
      "communityResourceTypes": [
        "一般相談",
        "専門機関へのつなぎ"
      ],
      "urgency": "normal"
    }
  ],
  "contacts": [
    {
      "id": "isahaya-sukusuku",
      "name": "諫早市 すくすく広場・子育て専門相談",
      "area": "諫早市",
      "description": "ことばや心身の発達、育児不安など。発達支援教室・発達専門相談・5歳児相談。",
      "phone": "0957-46-5276",
      "officialUrl": "https://www.city.isahaya.nagasaki.jp/soshiki/113/37601.html",
      "type": "local",
      "channels": [
        "in-person",
        "phone"
      ],
      "categories": [
        "子ども・子育て",
        "障害・発達"
      ],
      "keywords": [
        "育児",
        "子育て",
        "つらい",
        "不安",
        "相談",
        "ことば",
        "発達",
        "遅れ",
        "療育",
        "発達支援",
        "保育園",
        "幼稚園",
        "集団",
        "こだわり",
        "落ち着き",
        "居場所",
        "交流",
        "親子",
        "孤立",
        "子育て支援センター",
        "児童発達支援",
        "放課後等デイサービス",
        "障害児",
        "子育て相談",
        "育児不安",
        "ことばの発達",
        "発達相談",
        "5歳児相談",
        "発達支援教室"
      ]
    },
    {
      "id": "isahaya-disability",
      "name": "諫早市 障害福祉課",
      "area": "諫早市",
      "description": "障害福祉サービス、障害児支援、相談支援、就労支援等の制度相談。",
      "phone": "0957-22-1500",
      "officialUrl": "https://www.city.isahaya.nagasaki.jp/soshiki/16/index.html",
      "type": "local",
      "channels": [
        "in-person",
        "phone"
      ],
      "categories": [
        "子ども・子育て",
        "障害・発達",
        "住まい"
      ],
      "keywords": [
        "ことば",
        "発達",
        "遅れ",
        "療育",
        "発達支援",
        "障害福祉",
        "サービス",
        "相談支援",
        "手続き",
        "発達障害",
        "大人",
        "特性",
        "生活",
        "障害",
        "就労",
        "仕事",
        "家族",
        "介護",
        "休息",
        "移動支援",
        "同行援護",
        "外出",
        "社会参加",
        "児童発達支援",
        "放課後等デイサービス",
        "障害児",
        "住宅改修",
        "バリアフリー",
        "高齢者",
        "障害福祉サービス",
        "就労支援"
      ]
    },
    {
      "id": "isahaya-workwork",
      "name": "諫早市 WORK・WORK（ワク・ワク）ナビ",
      "area": "諫早市",
      "description": "働くことに不安がある人向け。ハローワーク、障害者就業・生活支援、若者サポートステーション、発達障害者支援等への案内。",
      "officialUrl": "https://www.city.isahaya.nagasaki.jp/soshiki/16/22436.html",
      "type": "local",
      "channels": [
        "in-person",
        "web"
      ],
      "categories": [
        "障害・発達",
        "仕事"
      ],
      "keywords": [
        "発達障害",
        "大人",
        "特性",
        "生活",
        "障害",
        "就労",
        "仕事",
        "発達",
        "就職",
        "求職",
        "ハローワーク",
        "無職",
        "就労不安",
        "ブランク",
        "働けない",
        "両立",
        "病気",
        "失業",
        "休業",
        "収入減",
        "若者",
        "進路",
        "就労相談",
        "障害者就労",
        "若者就労"
      ]
    },
    {
      "id": "isahaya-houkatsu",
      "name": "諫早市 地域包括支援センター",
      "area": "諫早市",
      "description": "高齢者の介護・福祉・健康・医療・認知症など生活全般の総合相談。",
      "officialUrl": "https://www.city.isahaya.nagasaki.jp/soshiki/26/index.html",
      "type": "local",
      "channels": [
        "in-person",
        "phone"
      ],
      "categories": [
        "高齢者・介護",
        "住まい",
        "これからの療養・看取り"
      ],
      "keywords": [
        "介護",
        "親",
        "家族",
        "介護保険",
        "認知症",
        "もの忘れ",
        "記憶",
        "徘徊",
        "独居",
        "一人暮らし",
        "見守り",
        "高齢者",
        "介護疲れ",
        "レスパイト",
        "負担",
        "フレイル",
        "閉じこもり",
        "運動",
        "交流",
        "介護予防",
        "行方不明",
        "住宅改修",
        "バリアフリー",
        "障害",
        "在宅療養",
        "自宅",
        "訪問診療",
        "訪問看護",
        "退院",
        "在宅",
        "病院",
        "看取り",
        "最期",
        "在宅医療",
        "ACP",
        "人生会議",
        "延命治療",
        "意思決定",
        "不安",
        "終末期",
        "地域包括支援センター",
        "退院支援"
      ]
    },
    {
      "id": "isahaya-kurashi",
      "name": "諫早くらしの相談室",
      "area": "諫早市",
      "description": "生活困窮、家賃、就労、家計など生活全般の相談。住居確保給付金・家計相談支援にも対応。",
      "phone": "0957-47-8150",
      "hours": "月〜金 8:30〜17:00（祝日・年末年始除く）",
      "officialUrl": "https://www.city.isahaya.nagasaki.jp/soshiki/19/1827.html",
      "type": "local",
      "channels": [
        "in-person",
        "phone"
      ],
      "categories": [
        "お金・生活",
        "仕事",
        "住まい"
      ],
      "keywords": [
        "生活費",
        "収入",
        "困窮",
        "お金",
        "家賃",
        "退去",
        "住居",
        "住宅",
        "借金",
        "ローン",
        "多重債務",
        "返済",
        "医療費",
        "入院費",
        "高額療養費",
        "支払い",
        "家計",
        "収支",
        "滞納",
        "相談",
        "食料",
        "食事",
        "日用品",
        "無職",
        "就労不安",
        "ブランク",
        "働けない",
        "失業",
        "休業",
        "収入減",
        "生活",
        "ホームレス",
        "家",
        "生活困窮",
        "住居確保給付金",
        "住まい",
        "就労支援",
        "食支援"
      ]
    },
    {
      "id": "isahaya-women",
      "name": "諫早市 女性相談室",
      "area": "諫早市",
      "description": "DV・デートDV、結婚・離婚など女性の悩み。電話相談は匿名可。",
      "phone": "0957-24-1580",
      "hours": "平日、第2土曜、第4日曜 9:00〜16:00（年末年始除く）",
      "officialUrl": "https://www.city.isahaya.nagasaki.jp/soshiki/40/1726.html",
      "type": "local",
      "channels": [
        "in-person",
        "phone"
      ],
      "categories": [
        "家族・パートナー",
        "住まい"
      ],
      "keywords": [
        "DV",
        "暴力",
        "暴言",
        "怖い",
        "家族",
        "経済的DV",
        "監視",
        "支配",
        "束縛",
        "離婚",
        "別居",
        "養育費",
        "親権",
        "DVかも",
        "無視",
        "相談",
        "避難",
        "住居",
        "安全",
        "女性相談",
        "デートDV",
        "パートナー"
      ]
    },
    {
      "id": "isahaya-mental",
      "name": "諫早市 こころの健康相談",
      "area": "諫早市",
      "description": "こころの健康、依存症、ひきこもり、受診相談、自死に関する悩みなど。保健師・精神保健専門員が対応。",
      "phone": "0957-22-1500",
      "hours": "月〜金 8:30〜17:00（祝日・年末年始除く）",
      "officialUrl": "https://www.city.isahaya.nagasaki.jp/soshiki/24/1113.html",
      "type": "local",
      "channels": [
        "in-person",
        "phone"
      ],
      "categories": [
        "こころ",
        "仕事",
        "これからの療養・看取り"
      ],
      "keywords": [
        "うつ",
        "不安",
        "気分",
        "こころ",
        "不眠",
        "眠れない",
        "ストレス",
        "心身",
        "ひきこもり",
        "外出",
        "家族",
        "孤立",
        "依存症",
        "アルコール",
        "ギャンブル",
        "薬物",
        "死にたい",
        "消えたい",
        "自殺",
        "希死念慮",
        "死別",
        "自死遺族",
        "悲嘆",
        "グリーフ",
        "職場",
        "ハラスメント",
        "労働",
        "人間関係",
        "看取り",
        "終末期",
        "遺族",
        "精神保健",
        "受診相談"
      ]
    },
    {
      "id": "nagasaki-mental",
      "name": "長崎県 こころの健康相談・ひきこもり地域支援センター",
      "area": "長崎県",
      "description": "こころの健康、精神障害、ひきこもり等の専門相談。",
      "phone": "095-846-5115",
      "officialUrl": "https://www.pref.nagasaki.jp/sodan/soshiki/fukusihokenbu/",
      "type": "local",
      "channels": [
        "in-person",
        "phone",
        "web"
      ],
      "categories": [
        "こころ"
      ]
    },
    {
      "id": "isahaya-health",
      "name": "諫早市 健康相談",
      "area": "諫早市",
      "description": "高血圧、脂質異常症、糖尿病、口腔、骨粗しょう症、女性の健康、栄養、禁煙などを保健師・管理栄養士等に相談。",
      "phone": "0957-22-1500",
      "officialUrl": "https://www.city.isahaya.nagasaki.jp/soshiki/24/1111.html",
      "type": "local",
      "channels": [
        "in-person",
        "phone"
      ],
      "categories": [
        "健康・医療"
      ],
      "keywords": [
        "健診",
        "血圧",
        "血糖",
        "コレステロール",
        "生活習慣",
        "栄養",
        "食事",
        "体重",
        "肥満",
        "減塩",
        "健康相談",
        "高血圧",
        "糖尿病",
        "脂質異常症",
        "口腔",
        "骨粗しょう症",
        "女性の健康",
        "禁煙"
      ]
    },
    {
      "id": "isahaya-health-promotion",
      "name": "諫早市 健康推進課",
      "area": "諫早市",
      "description": "健診・検診、健康づくり、食生活、救急医療案内など。",
      "phone": "0957-22-1500",
      "officialUrl": "https://www.city.isahaya.nagasaki.jp/soshiki/24/",
      "type": "local",
      "channels": [
        "in-person",
        "phone",
        "web"
      ],
      "categories": [
        "高齢者・介護",
        "健康・医療"
      ],
      "keywords": [
        "フレイル",
        "閉じこもり",
        "運動",
        "交流",
        "介護予防",
        "受診",
        "病院",
        "救急",
        "症状",
        "薬",
        "副作用",
        "飲み合わせ",
        "服薬",
        "医療相談",
        "医療安全",
        "説明",
        "健診",
        "がん検診",
        "予防",
        "健康づくり",
        "健康推進",
        "食生活",
        "救急医療"
      ]
    },
    {
      "id": "isahaya-housing",
      "name": "諫早市 建築住宅課",
      "area": "諫早市",
      "description": "市営住宅の入居、住宅関連支援、空家等に関する相談。",
      "phone": "0957-22-1500",
      "officialUrl": "https://www.city.isahaya.nagasaki.jp/soshiki/64/",
      "type": "local",
      "channels": [
        "in-person",
        "phone",
        "web"
      ],
      "categories": [
        "住まい"
      ],
      "keywords": [
        "市営住宅",
        "公営住宅",
        "入居",
        "住宅",
        "空き家",
        "管理",
        "老朽",
        "建築住宅課",
        "住宅改修",
        "住まい"
      ]
    },
    {
      "id": "isahaya-consumer",
      "name": "諫早市 消費生活センター",
      "area": "諫早市",
      "description": "商品・サービスの契約トラブル、悪質商法等の相談。",
      "phone": "0957-22-3113",
      "hours": "平日 8:30〜12:00、13:00〜17:00",
      "officialUrl": "https://www.city.isahaya.nagasaki.jp/soshiki/41/9475.html",
      "type": "local",
      "channels": [
        "in-person",
        "phone"
      ],
      "categories": [
        "契約・法律・犯罪被害"
      ],
      "keywords": [
        "契約",
        "通販",
        "定期購入",
        "解約",
        "詐欺",
        "架空請求",
        "特殊詐欺",
        "悪質商法",
        "消費生活",
        "消費者トラブル"
      ]
    },
    {
      "id": "isahaya-civic",
      "name": "諫早市 市民相談",
      "area": "諫早市",
      "description": "どこに相談したらよいか分からない日常生活の困りごと。必要に応じ専門機関を紹介。",
      "officialUrl": "https://www.city.isahaya.nagasaki.jp/soshiki/41/8335.html",
      "type": "local",
      "channels": [
        "in-person",
        "phone"
      ],
      "categories": [
        "子ども・子育て",
        "お金・生活",
        "家族・パートナー",
        "健康・医療",
        "仕事",
        "契約・法律・犯罪被害"
      ],
      "keywords": [
        "不登校",
        "学校",
        "いじめ",
        "登校",
        "教育相談",
        "借金",
        "ローン",
        "多重債務",
        "返済",
        "医療費",
        "入院費",
        "高額療養費",
        "支払い",
        "離婚",
        "別居",
        "養育費",
        "親権",
        "医療相談",
        "医療安全",
        "病院",
        "説明",
        "職場",
        "ハラスメント",
        "労働",
        "人間関係",
        "法律",
        "相続",
        "相談先",
        "分からない",
        "困りごと",
        "複数",
        "市民相談",
        "相談先が分からない",
        "どこに相談",
        "一般相談",
        "法律相談"
      ]
    },
    {
      "id": "nagasaki-support-center",
      "name": "長崎こども・女性・障害者支援センター",
      "area": "長崎県",
      "description": "子ども、女性、障害、こころ、ひきこもり、依存症、DV等の総合的な相談・支援。",
      "phone": "095-844-5132",
      "officialUrl": "https://www.pref.nagasaki.jp/organization/fukushihokenbu/na-shien-c/",
      "type": "local",
      "channels": [
        "in-person",
        "phone",
        "web"
      ],
      "categories": [
        "子ども・子育て",
        "家族・パートナー"
      ]
    },
    {
      "id": "nagasaki-sexual-violence",
      "name": "性暴力被害者支援 サポートながさき",
      "area": "長崎県",
      "description": "性暴力被害の相談、医療・法律・カウンセリング等への支援。",
      "phone": "#8891",
      "officialUrl": "https://www.pref.nagasaki.jp/bunrui/anzen-anshin/anzen-anshinmachidukuri/anshin-anzenmachidukurijigyo/hanzaihigaisya/support-kentorikumi/body.html",
      "type": "local",
      "channels": [
        "phone",
        "web"
      ],
      "categories": [
        "家族・パートナー",
        "契約・法律・犯罪被害"
      ]
    },
    {
      "id": "nagasaki-police",
      "name": "長崎県警察 警察安全相談",
      "area": "長崎県",
      "description": "ストーカー、DV、児童虐待、悪質商法、犯罪被害等。緊急の事件・事故は110。",
      "phone": "#9110",
      "officialUrl": "https://www.police.pref.nagasaki.jp/police/sodan/anzen-sodan/",
      "type": "local",
      "channels": [
        "phone",
        "web"
      ],
      "categories": [
        "子ども・子育て",
        "高齢者・介護",
        "家族・パートナー",
        "住まい",
        "契約・法律・犯罪被害"
      ]
    }
  ],
  "publicResources": [
    {
      "id": "mhlw-mamorouyo-kokoro",
      "name": "まもろうよ こころ",
      "operator": "厚生労働省",
      "sourceType": "government",
      "description": "こころの悩みに応じて、電話・SNS・その他の相談先を探せる厚生労働省の相談案内サイト。",
      "categories": [
        "こころ",
        "子ども・子育て",
        "家族・パートナー"
      ],
      "keywords": [
        "こころ",
        "死にたい",
        "消えたい",
        "不安",
        "SNS相談",
        "電話相談",
        "相談先"
      ],
      "url": "https://www.mhlw.go.jp/mamorouyokokoro/",
      "verifiedBy": "厚生労働省",
      "sourceUrl": "https://www.mhlw.go.jp/mamorouyokokoro/",
      "type": "public",
      "channels": [
        "web",
        "phone",
        "sns"
      ],
      "area": "全国",
      "officialUrl": "https://www.mhlw.go.jp/mamorouyokokoro/",
      "sourceTrust": "government"
    },
    {
      "id": "mhlw-support-search",
      "name": "支援情報検索サイト",
      "operator": "厚生労働省関連",
      "sourceType": "government",
      "description": "どこに相談したらよいか分からないときに、悩み別・方法別・地域別から相談窓口を探せる。",
      "categories": [
        "こころ",
        "お金・生活",
        "仕事",
        "家族・パートナー"
      ],
      "keywords": [
        "相談先",
        "検索",
        "悩み",
        "地域",
        "どこに相談"
      ],
      "url": "https://shienjoho.go.jp/",
      "verifiedBy": "厚生労働省",
      "sourceUrl": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/seikatsuhogo/jisatsu/soudan_info.html",
      "type": "public",
      "channels": [
        "web"
      ],
      "area": "全国",
      "officialUrl": "https://shienjoho.go.jp/",
      "sourceTrust": "government"
    },
    {
      "id": "cao-notalone",
      "name": "あなたはひとりじゃない",
      "operator": "内閣府",
      "sourceType": "government",
      "description": "孤独・孤立や生活上の悩みについて、質問に答えながら状況に合った支援先を探せる。",
      "categories": [
        "こころ",
        "お金・生活",
        "仕事",
        "住まい",
        "家族・パートナー"
      ],
      "keywords": [
        "孤独",
        "孤立",
        "生活",
        "相談先",
        "チャットボット"
      ],
      "url": "https://www.notalone-cao.go.jp/support/",
      "verifiedBy": "内閣府・厚生労働省",
      "sourceUrl": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/yakubuturanyou/soudan.html",
      "type": "public",
      "channels": [
        "web",
        "chat"
      ],
      "area": "全国",
      "officialUrl": "https://www.notalone-cao.go.jp/support/",
      "sourceTrust": "government"
    },
    {
      "id": "mext-child-sos",
      "name": "子供のSOSの相談窓口",
      "operator": "文部科学省",
      "sourceType": "government",
      "description": "いじめ、不登校、学校、家庭、SNSなど、子どもの悩みに応じた相談窓口を案内している。",
      "categories": [
        "子ども・子育て"
      ],
      "keywords": [
        "子ども",
        "いじめ",
        "不登校",
        "学校",
        "家庭",
        "SNS",
        "SOS"
      ],
      "url": "https://www.mext.go.jp/a_menu/shotou/seitoshidou/06112210.htm",
      "verifiedBy": "文部科学省",
      "sourceUrl": "https://www.mext.go.jp/a_menu/shotou/seitoshidou/06112210.htm",
      "type": "public",
      "channels": [
        "web",
        "sns"
      ],
      "area": "全国",
      "officialUrl": "https://www.mext.go.jp/a_menu/shotou/seitoshidou/06112210.htm",
      "sourceTrust": "government"
    },
    {
      "id": "gender-dv",
      "name": "DV相談ナビ・DV相談＋",
      "operator": "内閣府 男女共同参画局",
      "sourceType": "government",
      "description": "配偶者やパートナーからの暴力について、最寄りの支援センターや24時間の電話・チャット相談につながる。",
      "categories": [
        "家族・パートナー",
        "住まい"
      ],
      "keywords": [
        "DV",
        "暴力",
        "パートナー",
        "配偶者",
        "避難",
        "チャット相談"
      ],
      "url": "https://www.gender.go.jp/policy/no_violence/dv_navi/index.html",
      "verifiedBy": "内閣府 男女共同参画局",
      "sourceUrl": "https://www.gender.go.jp/policy/no_violence/dv_navi/index.html",
      "phone": "#8008",
      "type": "public",
      "channels": [
        "web",
        "phone",
        "chat"
      ],
      "area": "全国",
      "officialUrl": "https://www.gender.go.jp/policy/no_violence/dv_navi/index.html",
      "sourceTrust": "government"
    },
    {
      "id": "gender-sexual-violence",
      "name": "性犯罪・性暴力の相談窓口",
      "operator": "内閣府 男女共同参画局",
      "sourceType": "government",
      "description": "性犯罪・性暴力被害者のためのワンストップ支援センターやチャット相談等を案内している。",
      "categories": [
        "家族・パートナー",
        "契約・法律・犯罪被害"
      ],
      "keywords": [
        "性被害",
        "性暴力",
        "不同意",
        "犯罪被害",
        "ワンストップ"
      ],
      "url": "https://www.gender.go.jp/policy/no_violence/no_violence_act/",
      "verifiedBy": "内閣府 男女共同参画局",
      "sourceUrl": "https://www.gender.go.jp/policy/no_violence/no_violence_act/",
      "phone": "#8891",
      "type": "public",
      "channels": [
        "web",
        "chat"
      ],
      "area": "全国",
      "officialUrl": "https://www.gender.go.jp/policy/no_violence/no_violence_act/",
      "sourceTrust": "government"
    },
    {
      "id": "mhlw-kokoro-no-mimi",
      "name": "こころの耳",
      "operator": "厚生労働省",
      "sourceType": "government",
      "description": "働く人と家族向けのメンタルヘルスポータル。電話・SNS・メール相談、セルフチェック、医療機関検索等がある。",
      "categories": [
        "こころ",
        "仕事"
      ],
      "keywords": [
        "仕事",
        "職場",
        "メンタルヘルス",
        "ストレス",
        "休職",
        "復職"
      ],
      "url": "https://kokoro.mhlw.go.jp/",
      "verifiedBy": "厚生労働省",
      "sourceUrl": "https://kokoro.mhlw.go.jp/",
      "type": "public",
      "channels": [
        "web",
        "phone",
        "sns"
      ],
      "area": "全国",
      "officialUrl": "https://kokoro.mhlw.go.jp/",
      "sourceTrust": "government"
    },
    {
      "id": "mhlw-seikatsu-konkyu",
      "name": "生活困窮者自立支援制度",
      "operator": "厚生労働省",
      "sourceType": "government",
      "description": "生活費、仕事、家賃、住まい、家計の立て直しなど、生活に困っている人への支援制度を案内している。",
      "categories": [
        "お金・生活",
        "仕事",
        "住まい"
      ],
      "keywords": [
        "生活費",
        "家賃",
        "仕事",
        "住まい",
        "家計",
        "生活困窮"
      ],
      "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000059425.html",
      "verifiedBy": "厚生労働省",
      "sourceUrl": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000059425.html",
      "type": "public",
      "channels": [
        "web"
      ],
      "area": "全国",
      "officialUrl": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000059425.html",
      "sourceTrust": "government"
    },
    {
      "id": "caa-188",
      "name": "消費者ホットライン188",
      "operator": "消費者庁",
      "sourceType": "government",
      "description": "契約、悪質商法、定期購入、製品・サービスのトラブルなどについて、最寄りの消費生活相談窓口につながる。",
      "categories": [
        "契約・法律・犯罪被害",
        "お金・生活"
      ],
      "keywords": [
        "契約",
        "通販",
        "定期購入",
        "悪質商法",
        "詐欺",
        "消費者"
      ],
      "url": "https://www.caa.go.jp/policies/policy/local_cooperation/local_consumer_administration/hotline/",
      "verifiedBy": "消費者庁",
      "sourceUrl": "https://www.caa.go.jp/policies/policy/local_cooperation/local_consumer_administration/hotline/",
      "phone": "188",
      "type": "public",
      "channels": [
        "web",
        "phone"
      ],
      "area": "全国",
      "officialUrl": "https://www.caa.go.jp/policies/policy/local_cooperation/local_consumer_administration/hotline/",
      "sourceTrust": "government"
    },
    {
      "id": "moj-human-rights",
      "name": "みんなの人権110番",
      "operator": "法務省",
      "sourceType": "government",
      "description": "差別、いじめ、ハラスメント、家庭内の問題など、人権に関する相談窓口。",
      "categories": [
        "家族・パートナー",
        "仕事",
        "子ども・子育て",
        "契約・法律・犯罪被害"
      ],
      "keywords": [
        "人権",
        "差別",
        "いじめ",
        "ハラスメント",
        "家庭"
      ],
      "url": "https://www.moj.go.jp/JINKEN/jinken20.html",
      "verifiedBy": "法務省",
      "sourceUrl": "https://www.moj.go.jp/JINKEN/jinken03_00223.html",
      "phone": "0570-003-110",
      "type": "public",
      "channels": [
        "web"
      ],
      "area": "全国",
      "officialUrl": "https://www.moj.go.jp/JINKEN/jinken20.html",
      "sourceTrust": "government"
    },
    {
      "id": "lifelink-yorisoi-chat",
      "name": "生きづらびっと",
      "operator": "特定非営利活動法人 自殺対策支援センターライフリンク",
      "sourceType": "officially-listed",
      "description": "SNS・チャットによる相談。必要に応じて電話・対面支援や地域の支援先等へのつなぎも行う。",
      "categories": [
        "こころ",
        "お金・生活",
        "家族・パートナー"
      ],
      "keywords": [
        "SNS相談",
        "チャット",
        "生きづらい",
        "死にたい",
        "孤独"
      ],
      "url": "https://yorisoi-chat.jp/",
      "verifiedBy": "厚生労働省「まもろうよ こころ」",
      "sourceUrl": "https://www.mhlw.go.jp/mamorouyokokoro/soudan/sns/",
      "audience": "年齢・性別を問わず",
      "note": "民間/NPO。厚生労働省の公式相談先一覧に掲載されていることを根拠として収載。",
      "type": "public",
      "channels": [
        "web",
        "phone",
        "sns",
        "chat"
      ],
      "area": "全国",
      "officialUrl": "https://yorisoi-chat.jp/",
      "sourceTrust": "officially-listed"
    },
    {
      "id": "tms-kokoro-hotchat",
      "name": "こころのほっとチャット",
      "operator": "特定非営利活動法人 東京メンタルヘルス・スクエア",
      "sourceType": "officially-listed",
      "description": "LINE・Facebook・ウェブチャット等で相談でき、必要に応じて公的機関や支援団体へのつなぎも行う。",
      "categories": [
        "こころ",
        "家族・パートナー"
      ],
      "keywords": [
        "SNS相談",
        "LINE",
        "チャット",
        "こころ",
        "孤独"
      ],
      "url": "https://www.npo-tms.or.jp/public/kokoro_hotchat/",
      "verifiedBy": "厚生労働省「まもろうよ こころ」",
      "sourceUrl": "https://www.mhlw.go.jp/mamorouyokokoro/soudan/sns/",
      "audience": "年齢・性別を問わず",
      "note": "民間/NPO。厚生労働省の公式相談先一覧に掲載されていることを根拠として収載。",
      "type": "public",
      "channels": [
        "web",
        "sns",
        "chat"
      ],
      "area": "全国",
      "officialUrl": "https://www.npo-tms.or.jp/public/kokoro_hotchat/",
      "sourceTrust": "officially-listed"
    },
    {
      "id": "anata-no-ibasho",
      "name": "あなたのいばしょ チャット相談",
      "operator": "特定非営利活動法人 あなたのいばしょ",
      "sourceType": "officially-listed",
      "description": "誰でも利用できる匿名のチャット相談。孤独・孤立や生きづらさを抱える人の相談に対応する。",
      "categories": [
        "こころ",
        "お金・生活",
        "家族・パートナー"
      ],
      "keywords": [
        "孤独",
        "孤立",
        "チャット",
        "相談",
        "生きづらい"
      ],
      "url": "https://talkme.jp/",
      "verifiedBy": "厚生労働省",
      "sourceUrl": "https://www.mhlw.go.jp/mamorouyokokoro/soudan/sns/",
      "note": "民間/NPO。厚生労働省が相談支援団体として公式情報で案内しているものを収載。",
      "type": "public",
      "channels": [
        "web",
        "chat"
      ],
      "area": "全国",
      "officialUrl": "https://talkme.jp/",
      "sourceTrust": "officially-listed"
    }
  ],
  "quickDials": [
    {
      "id": "emergency-medical-119",
      "number": "119",
      "tel": "119",
      "name": "救急・消防",
      "organization": "消防",
      "description": "救急車や消防車が必要な緊急時。",
      "categories": [
        "健康・医療",
        "緊急"
      ],
      "keywords": [
        "救急",
        "意識",
        "呼吸",
        "大けが",
        "火事"
      ],
      "area": "全国",
      "availability": "24時間",
      "urgency": "emergency",
      "officialUrl": "https://www.fdma.go.jp/",
      "confirmBeforeCall": true,
      "confirmTitle": "119へ発信します",
      "confirmMessage": "救急車・消防が必要な緊急時の番号です。本当に119へ電話しますか？",
      "emergencyAlternative": "救急車を呼ぶか迷う段階なら、長崎県では #7119 を利用できます。",
      "type": "dial",
      "channels": [
        "phone"
      ],
      "sourceTrust": "government"
    },
    {
      "id": "emergency-police-110",
      "number": "110",
      "tel": "110",
      "name": "警察への緊急通報",
      "organization": "警察",
      "description": "事件・事故・暴力など、直ちに警察官の対応が必要なとき。",
      "categories": [
        "契約・法律・犯罪被害",
        "家族・パートナー",
        "緊急"
      ],
      "keywords": [
        "事件",
        "事故",
        "暴力",
        "危険",
        "警察"
      ],
      "area": "全国",
      "availability": "24時間",
      "urgency": "emergency",
      "officialUrl": "https://www.npa.go.jp/",
      "confirmBeforeCall": true,
      "confirmTitle": "110へ発信します",
      "confirmMessage": "事件・事故など、すぐに警察官の対応が必要な場合の番号です。本当に110へ電話しますか？",
      "emergencyAlternative": "緊急ではない警察相談は #9110 です。",
      "type": "dial",
      "channels": [
        "phone"
      ],
      "sourceTrust": "government"
    },
    {
      "id": "nagasaki-7119",
      "number": "#7119",
      "tel": "#7119",
      "name": "長崎県救急安心センター",
      "organization": "長崎県",
      "description": "急な病気やけがで、救急車を呼ぶべきか・今すぐ受診すべきか迷ったときの電話相談。",
      "categories": [
        "健康・医療"
      ],
      "keywords": [
        "救急",
        "受診",
        "病院",
        "救急車",
        "迷う",
        "けが",
        "急病"
      ],
      "area": "長崎県",
      "availability": "24時間365日",
      "fee": "相談料無料・通話料は利用者負担",
      "urgency": "priority",
      "officialUrl": "https://www.pref.nagasaki.jp/doc/page-677772.html",
      "confirmBeforeCall": true,
      "confirmTitle": "#7119 に電話しますか？",
      "confirmMessage": "救急車を呼ぶべきか、今すぐ受診すべきか迷ったときの相談窓口です。",
      "emergencyAlternative": "意識がない、呼吸が苦しいなど明らかな緊急時は119を利用してください。",
      "note": "#7119につながらない場合は長崎県が案内する代替番号を公式ページで確認してください。",
      "type": "dial",
      "channels": [
        "phone"
      ],
      "sourceTrust": "government"
    },
    {
      "id": "nagasaki-8000",
      "number": "#8000",
      "tel": "#8000",
      "name": "長崎県子ども医療電話相談",
      "organization": "長崎県",
      "description": "子どもの急な病気やけがで、家庭での対処や受診の必要性を迷ったときの電話相談。",
      "categories": [
        "子ども・子育て",
        "健康・医療"
      ],
      "keywords": [
        "子ども",
        "発熱",
        "けが",
        "誤飲",
        "受診",
        "夜間",
        "休日"
      ],
      "area": "長崎県",
      "availability": "平日・土曜 18:00〜翌8:00／日曜・祝日等 24時間",
      "fee": "相談料無料・通話料は利用者負担",
      "urgency": "priority",
      "officialUrl": "https://www.pref.nagasaki.jp/bunrui/hukushi-hoken/hoken-iryo/iryokankeigaiyo/kensaku-iryo/body.html",
      "confirmBeforeCall": true,
      "confirmTitle": "#8000 に電話しますか？",
      "confirmMessage": "子どもの急な病気やけがについて、受診や対処に迷ったときの相談窓口です。",
      "emergencyAlternative": "意識がない、呼吸が苦しいなど緊急性が高い場合は119を利用してください。",
      "type": "dial",
      "channels": [
        "phone"
      ],
      "sourceTrust": "government"
    },
    {
      "id": "child-abuse-189",
      "number": "189",
      "tel": "189",
      "reading": "いちはやく",
      "name": "児童相談所虐待対応ダイヤル",
      "organization": "こども家庭庁",
      "description": "「虐待かもしれない」と思ったときに、近くの児童相談所につながる全国共通番号。",
      "categories": [
        "子ども・子育て"
      ],
      "keywords": [
        "虐待",
        "子ども",
        "児童相談所",
        "通告",
        "家庭",
        "安全"
      ],
      "area": "全国",
      "availability": "全国共通",
      "fee": "通話料無料",
      "urgency": "priority",
      "officialUrl": "https://www.cfa.go.jp/policies/jidougyakutai/gyakutai-taiou-dial",
      "confirmBeforeCall": true,
      "confirmTitle": "189 に電話しますか？",
      "confirmMessage": "「虐待かもしれない」と思ったときに相談・通告できる児童相談所虐待対応ダイヤルです。",
      "emergencyAlternative": "今すぐ子どもの生命・身体に危険がある場合は110・119を利用してください。",
      "type": "dial",
      "channels": [
        "phone"
      ],
      "sourceTrust": "government"
    },
    {
      "id": "child-consultation-189783",
      "number": "0120-189-783",
      "tel": "0120189783",
      "reading": "いちはやく・おなやみを",
      "name": "児童相談所相談専用ダイヤル",
      "organization": "こども家庭庁",
      "description": "子育てや子どもの福祉に関する相談を、近くの児童相談所につなぐ相談専用ダイヤル。",
      "categories": [
        "子ども・子育て"
      ],
      "keywords": [
        "子育て",
        "子ども",
        "親子",
        "児童相談所"
      ],
      "area": "全国",
      "fee": "無料",
      "urgency": "normal",
      "officialUrl": "https://www.cfa.go.jp/policies/jidougyakutai/gyakutai-taiou-dial",
      "confirmBeforeCall": true,
      "confirmTitle": "児童相談所相談専用ダイヤルに電話しますか？",
      "confirmMessage": "子育てや子どもの福祉について相談できる全国共通ダイヤルです。",
      "type": "dial",
      "channels": [
        "phone"
      ],
      "sourceTrust": "government"
    },
    {
      "id": "child-sos-24h",
      "number": "0120-0-78310",
      "tel": "0120078310",
      "reading": "なやみ言おう",
      "name": "24時間子供SOSダイヤル",
      "organization": "文部科学省・都道府県等教育委員会",
      "description": "いじめ、不登校、学校生活など、子どもや保護者のSOSを24時間受け付ける相談ダイヤル。",
      "categories": [
        "子ども・子育て"
      ],
      "keywords": [
        "いじめ",
        "不登校",
        "学校",
        "子ども",
        "SOS"
      ],
      "area": "全国",
      "availability": "24時間",
      "fee": "フリーダイヤル",
      "urgency": "priority",
      "officialUrl": "https://www.mext.go.jp/a_menu/h30gouu7/1407291.htm",
      "confirmBeforeCall": true,
      "confirmTitle": "24時間子供SOSダイヤルに電話しますか？",
      "confirmMessage": "いじめ、不登校、学校生活などについて子どもや保護者が相談できる窓口です。",
      "type": "dial",
      "channels": [
        "phone"
      ],
      "sourceTrust": "government"
    },
    {
      "id": "consumer-188",
      "number": "188",
      "tel": "188",
      "reading": "いやや",
      "name": "消費者ホットライン",
      "organization": "消費者庁",
      "description": "契約、通販、定期購入、悪質商法などの消費者トラブルを最寄りの相談窓口につなぐ。",
      "categories": [
        "契約・法律・犯罪被害",
        "お金・生活"
      ],
      "keywords": [
        "契約",
        "通販",
        "定期購入",
        "悪質商法",
        "詐欺"
      ],
      "area": "全国",
      "fee": "相談は無料・接続後の通話料は利用者負担",
      "urgency": "normal",
      "officialUrl": "https://www.caa.go.jp/policies/policy/local_cooperation/local_consumer_administration/hotline/",
      "confirmBeforeCall": true,
      "confirmTitle": "188 に電話しますか？",
      "confirmMessage": "契約・通販・悪質商法などの消費者トラブルについて、最寄りの消費生活相談窓口につながります。",
      "type": "dial",
      "channels": [
        "phone"
      ],
      "sourceTrust": "government"
    },
    {
      "id": "dv-8008",
      "number": "#8008",
      "tel": "#8008",
      "reading": "はれれば",
      "name": "DV相談ナビ",
      "organization": "内閣府 男女共同参画局",
      "description": "配偶者や交際相手からの暴力について、最寄りの配偶者暴力相談支援センターにつながる。",
      "categories": [
        "家族・パートナー",
        "住まい"
      ],
      "keywords": [
        "DV",
        "暴力",
        "パートナー",
        "配偶者",
        "避難",
        "支配"
      ],
      "area": "全国",
      "urgency": "priority",
      "officialUrl": "https://www.gender.go.jp/policy/no_violence/dv_navi/index.html",
      "confirmBeforeCall": true,
      "confirmTitle": "#8008 に電話しますか？",
      "confirmMessage": "DVについて、最寄りの配偶者暴力相談支援センターにつながる相談番号です。",
      "emergencyAlternative": "今すぐ危険が迫っている場合は110を利用してください。",
      "type": "dial",
      "channels": [
        "phone"
      ],
      "sourceTrust": "government"
    },
    {
      "id": "sexual-violence-8891",
      "number": "#8891",
      "tel": "#8891",
      "reading": "はやくワンストップ",
      "name": "性犯罪・性暴力被害者のためのワンストップ支援センター",
      "organization": "内閣府 男女共同参画局",
      "description": "性犯罪・性暴力被害について、最寄りのワンストップ支援センターにつながる。",
      "categories": [
        "家族・パートナー",
        "契約・法律・犯罪被害"
      ],
      "keywords": [
        "性被害",
        "性暴力",
        "不同意",
        "ワンストップ"
      ],
      "area": "全国",
      "urgency": "priority",
      "officialUrl": "https://www.gender.go.jp/policy/no_violence/no_violence_act/",
      "confirmBeforeCall": true,
      "confirmTitle": "#8891 に電話しますか？",
      "confirmMessage": "性犯罪・性暴力被害について、最寄りのワンストップ支援センターにつながります。",
      "emergencyAlternative": "今すぐ危険が迫っている場合は110を利用してください。",
      "type": "dial",
      "channels": [
        "phone"
      ],
      "sourceTrust": "government"
    },
    {
      "id": "police-sexual-crime-8103",
      "number": "#8103",
      "tel": "#8103",
      "reading": "ハートさん",
      "name": "性犯罪被害相談電話",
      "organization": "警察庁・都道府県警察",
      "description": "性犯罪・性暴力被害について、発信地域を管轄する都道府県警察の相談窓口につながる。",
      "categories": [
        "契約・法律・犯罪被害",
        "家族・パートナー"
      ],
      "keywords": [
        "性犯罪",
        "性被害",
        "警察"
      ],
      "area": "全国",
      "availability": "24時間",
      "urgency": "priority",
      "officialUrl": "https://www.npa.go.jp/hanzaihigai/portal/search/kensaku/support/",
      "confirmBeforeCall": true,
      "confirmTitle": "#8103 に電話しますか？",
      "confirmMessage": "性犯罪被害について警察に相談するための全国共通番号です。",
      "emergencyAlternative": "事件が進行中など、直ちに警察官の対応が必要な場合は110を利用してください。",
      "type": "dial",
      "channels": [
        "phone"
      ],
      "sourceTrust": "government"
    },
    {
      "id": "police-9110",
      "number": "#9110",
      "tel": "#9110",
      "name": "警察相談専用電話",
      "organization": "警察庁・都道府県警察",
      "description": "ストーカー、DV、悪質商法など、緊急ではない警察への相談全般。",
      "categories": [
        "契約・法律・犯罪被害",
        "家族・パートナー"
      ],
      "keywords": [
        "警察",
        "ストーカー",
        "DV",
        "悪質商法",
        "犯罪"
      ],
      "area": "全国",
      "urgency": "normal",
      "officialUrl": "https://www.npa.go.jp/hanzaihigai/portal/search/madoguchi/04/index.html",
      "confirmBeforeCall": true,
      "confirmTitle": "#9110 に電話しますか？",
      "confirmMessage": "緊急ではない警察相談の全国共通番号です。",
      "emergencyAlternative": "緊急の事件・事故は110を利用してください。",
      "type": "dial",
      "channels": [
        "phone"
      ],
      "sourceTrust": "government"
    }
  ],
  "accessibilityResources": [
    {
      "id": "nftrs-telephone-relay",
      "name": "電話リレーサービス",
      "operator": "一般財団法人 日本財団電話リレーサービス",
      "description": "聴覚や発話に困難がある方が、通訳オペレータを介して手話または文字と音声をつなぎ、電話できる公共サービスです。",
      "categories": [
        "子ども・子育て",
        "高齢者・介護",
        "お金・生活",
        "家族・パートナー",
        "こころ",
        "健康・医療",
        "障害・発達",
        "仕事",
        "住まい",
        "これからの療養・看取り",
        "契約・法律・犯罪被害"
      ],
      "keywords": [
        "手話",
        "文字",
        "聴覚",
        "発話",
        "電話リレー"
      ],
      "channels": [
        "sign-language",
        "text-relay",
        "web"
      ],
      "area": "全国",
      "type": "accessibility",
      "sourceTrust": "government",
      "officialUrl": "https://www.nftrs.or.jp/",
      "availability": "24時間365日",
      "note": "利用登録や利用方法、緊急通報への対応は公式サイトで確認してください。"
    }
  ],
  "civicResources": [
    {
      "id": "city-find",
      "kicker": "探す",
      "title": "医療機関・相談先・地域資源",
      "description": "病院や相談窓口、地域で利用できる支援を探します。",
      "type": "navigation",
      "organization": "まちの健康・医療案内",
      "links": [
        {
          "label": "医療機関を探す",
          "url": "visit.html",
          "external": false
        },
        {
          "label": "地域の相談先を探す",
          "url": "#local",
          "external": false
        }
      ],
      "keywords": [
        "医療機関",
        "病院",
        "診療所",
        "薬局",
        "相談先",
        "地域資源",
        "支援",
        "探す"
      ]
    },
    {
      "id": "city-consult",
      "kicker": "相談する",
      "title": "自分に合う方法で相談",
      "description": "地域の窓口、電話、Web、SNS・チャット、手話・文字などから選べます。",
      "type": "navigation",
      "organization": "まちの健康・医療案内",
      "links": [
        {
          "label": "相談先ナビを開く",
          "url": "#local",
          "external": false
        }
      ],
      "keywords": [
        "相談",
        "相談方法",
        "地域の窓口",
        "電話",
        "Web",
        "SNS",
        "チャット",
        "手話",
        "文字",
        "電話リレー"
      ]
    },
    {
      "id": "isahaya-city-main",
      "kicker": "問い合わせる",
      "title": "市役所に聞きたい",
      "description": "担当窓口が分からないときは、市役所の代表電話や一般相談を利用できます。",
      "type": "inquiry",
      "organization": "諫早市",
      "area": "諫早市",
      "phone": "0957-22-1500",
      "tel": "0957221500",
      "officialUrl": "https://www.city.isahaya.nagasaki.jp/",
      "links": [
        {
          "label": "諫早市役所代表 0957-22-1500",
          "url": "tel:0957221500",
          "kind": "phone",
          "confirmTitle": "諫早市役所代表に電話しますか？",
          "confirmMessage": "担当窓口が分からないときなどに利用できる諫早市役所の代表電話です。"
        },
        {
          "label": "市民相談を見る ↗",
          "url": "https://www.city.isahaya.nagasaki.jp/soshiki/41/8335.html",
          "external": true
        }
      ],
      "keywords": [
        "諫早市役所",
        "市役所",
        "代表電話",
        "問い合わせ",
        "担当課",
        "担当窓口",
        "どこに聞く",
        "窓口が分からない",
        "市民相談"
      ]
    },
    {
      "id": "isahaya-official-line",
      "kicker": "受け取る",
      "title": "諫早市公式LINE",
      "description": "防災、子育て、ごみ出し、イベントなど、市からのお知らせを受け取れます。友だち追加後は受信設定を確認してください。",
      "type": "information",
      "organization": "諫早市",
      "area": "諫早市",
      "officialUrl": "https://www.city.isahaya.nagasaki.jp/soshiki/116/2305.html",
      "links": [
        {
          "label": "諫早市公式LINEを見る ↗",
          "url": "https://www.city.isahaya.nagasaki.jp/soshiki/116/2305.html",
          "external": true
        }
      ],
      "note": "※個別相談の窓口ではありません。",
      "keywords": [
        "諫早市公式LINE",
        "LINE",
        "公式LINE",
        "お知らせ",
        "情報配信",
        "防災",
        "子育て",
        "ごみ",
        "ごみ出し",
        "イベント"
      ]
    },
    {
      "id": "isahaya-procedures",
      "kicker": "手続きする",
      "title": "申請・届出を確認",
      "description": "住民票・戸籍、子育て、福祉、介護、水道などの手続きやオンライン申請を探せます。",
      "type": "procedure",
      "organization": "諫早市",
      "area": "諫早市",
      "officialUrl": "https://www.city.isahaya.nagasaki.jp/life/sub/10/index-2.html",
      "links": [
        {
          "label": "諫早市の各種手続きを見る ↗",
          "url": "https://www.city.isahaya.nagasaki.jp/life/sub/10/index-2.html",
          "external": true
        }
      ],
      "keywords": [
        "手続き",
        "申請",
        "届出",
        "オンライン申請",
        "住民票",
        "戸籍",
        "転入",
        "転出",
        "子育て",
        "福祉",
        "介護",
        "水道"
      ]
    },
    {
      "id": "isahaya-disaster",
      "kicker": "備える",
      "title": "防災・避難情報を確認",
      "description": "避難情報、防災行政無線、防災SNS、避難所など、もしものときに必要な情報を確認します。",
      "type": "preparedness",
      "organization": "諫早市",
      "area": "諫早市",
      "officialUrl": "https://www.city.isahaya.nagasaki.jp/soshiki/3/1153.html",
      "links": [
        {
          "label": "諫早市の防災情報を見る ↗",
          "url": "https://www.city.isahaya.nagasaki.jp/soshiki/3/1153.html",
          "external": true
        },
        {
          "label": "避難所を確認する ↗",
          "url": "https://www.city.isahaya.nagasaki.jp/life/1/4/24/index.html",
          "external": true
        }
      ],
      "keywords": [
        "防災",
        "災害",
        "避難",
        "避難所",
        "防災行政無線",
        "防災SNS",
        "台風",
        "大雨",
        "洪水",
        "地震",
        "警報"
      ]
    }
  ],
  "civicResourcesMeta": {
    "sectionEyebrow": "市の情報・手続き",
    "sectionTitle": "知りたいこと・したいことから",
    "sectionDescription": "相談先だけでなく、問い合わせ、情報の受け取り、手続き、防災情報まで、次の行動につながる入口をまとめています。",
    "footnote": "防災・子育て・ごみ出し・イベントなどの情報は、諫早市公式LINEでも配信されています。緊急時は、このページの相談番号ではなく110・119など必要な緊急通報を優先してください。"
  }
};
