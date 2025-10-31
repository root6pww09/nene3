const titles = [
  "MUSIC","ACTION","INNER CHILD","RELIEVE TENSION","PASSION",
  "OPEN YOUR HEART","TRAVEL","REJUVENATE","SELF AFFIRMATION","WRITE OUT",
  "CONNECT WITH NATURE","DRAW BOUNDARIES","TRIAL AND ERROR","MOVING FORWARD","EXPRESSING MY FEELINGS",
  "SPARKLE","ENJOY","LOOK AT","RELUX","HIT",
  "CLEAN UP","CELEBRATION"
];

const messages = [
  "新たな可能性があなたに舞い込む時。",
  "自由に飛び立つ心を大切にする時。",
  "内なる声に耳を傾けよう。",
  "緊張を解きほぐすとき時。",
  "情熱を持って努力すれば克服できる。",
  "心のつながりが大事な時。",
  "人の目を気にせず、雰囲気や出来事を楽しんで。",
  "挑戦を力に変えて前進しよう。",
  "自分にも人にも感謝の言葉を送って。",
  "ひとりの時間で答えを見つける時。",
  "良い変化を受け入れ、流れに逆らわず進む時。",
  "公正とバランスを保つ時。",
  "視点を変えて新しい道を見つける時。",
  "古いものを手放し、新たな始まりへ行く時。",
  "気持ちを表現する時。",
  "子供心を思い出す時。憧れを表現して。",
  "創造的混沌を楽しむ時。",
  "やりたいことを具体的に計画する時。",
  "感情の揺れを受け入れる時。",
  "活躍する自分を想像しながら行動する時。",
  "過去の記憶や体験を振り返ってみる時。",
  "これまでの歩みを祝う時。自分を褒めてみましょう。"
];

const details = [
  { love: "無垢な好奇心が新しい恋を呼びます。恐れず一歩踏み出して。", work: "型にとらわれない発想で、自由なプロジェクトに挑戦を。異業種への転職もあるかも。", relation: "素直な心が人を惹きつけます。緊張せず自分らしく接しましょう。", other: "軽やかさと可能性の象徴。とにかく一歩を踏み出してみましょう。" },
  { love: "言葉と行動で自分の魅力を伝えるとき。積極的にアプローチするほど幸せに。", work: "あなたのスキルが光る場面。新しい企画にリーダーシップを発揮。", relation: "コミュニケーション能力がカギ。言葉選びを丁寧に。", other: "創造力と行動力の象徴。自分の意志と判断で何かを“作り出す”力を示します。" },
  { love: "直感を信じて、心の声に従った選択を。", work: "冷静な判断が吉。情報収集と分析を徹底して。", relation: "沈黙の中にも深い交流があることを思い出して。", other: "知識と直感のバランスを表します。冴えた思考と心の声に従いキッパリと判断できる時期。" },
  { love: "優しさと愛情に包まれる予感。大切な人との時間を楽しんで。", work: "クリエイティブな成果が得られます。仲間と共にプロジェクトに愛情を注いで。", relation: "温かな気配りで周囲の考えを受け入れてみる時。", other: "豊穣・育みの象徴。実りある時期なので自身を持ってください。" },
  { love: "安定した関係を築くチャンス。頼りがいのあるあなたを見せて。", work: "リーダーシップを発揮し、秩序とルールを整えましょう。", relation: "明確な意見表明が信頼を呼びます。", other: "有限実行を心がけて物事を進める時。" },
  { love: "伝統や価値観を共有することで心が通じます。信頼した人からの紹介で関係が築かれる可能性。", work: "マニュアルや規則を守り、堅実に進めると吉。", relation: "年長者や先輩との絆が深まります。", other: "教えと学びの象徴。知恵を分かち合う時期。信頼する人に相談して賛成してもらえると吉。" },
  { love: "大切な絆が深まる予感。心からの会話を大切に。", work: "チームワークが成功の鍵。協力体制を築きましょう。", relation: "相手の気持ちを尊重することで信頼が生まれます。", other: "選択と調和の象徴。真剣な選択を示します。" },
  { love: "積極的なアプローチが功を奏します。迷わず突き進んで。", work: "目標に向かって突進する時。集中力が成功を呼ぶ。", relation: "同じ熱意を持つ人と行動することがカギ。", other: "意志と勝利の象徴。進まないと後悔する時。強い行動力がカギ。" },
  { love: "優しさと思いやりで、時間をかけて絆を育む時。", work: "長期計画の時。困難を乗り越えられる時期。", relation: "寛容さで歩み寄る時。対人関係を円滑にします。", other: "内なる強さの象徴。絶対に諦めない心を持つ時。" },
  { love: "一度立ち止まり、内省することで真実の愛に気づきます。", work: "慎重なリサーチが吉。ひとりで深く考える時間を。", relation: "静かな交流で心の通い合いが深まります。関わるなら深い会話ができる人がおすすめ。", other: "探求と内省の象徴。本当に貫きたいことを見つけるために自分自身を見つめ直す時。" },
  { love: "運命的な出会いが期待できます。チャンスを逃さないで。", work: "大きな転機が訪れます。直感を信じて乗り越えて。", relation: "人との縁が巡ってくる時期。感謝を忘れずに。", other: "変化と循環の象徴。流れに身を任せタイミングを逃す前に行動しましょう。" },
  { love: "相手と自分は釣り合っているので心配をしないこと。", work: "バランス感覚が成功を呼ぶ。判断は慎重に。周りからあなたは正当に評価される時。", relation: "一人ひとりの意見を聞き入れて正直なコミュニケーションすることが鍵。", other: "公正と秩序の象徴。正しい選択をするため状況を見直してみる時。" },
  { love: "尽くす側になるかも。ゆっくり前進する時。", work: "今は急がずタイミングを待つことが大切。キャパオーバー気味だけど乗り越える試練の可能性。", relation: "思い道理に意図が伝わらない可能性。一人で考える時。", other: "自己犠牲と視点の転換を。" },
  { love: "古いパターンを手放す。未練を断ち切り新しい愛を迎え入れましょう。", work: "不要なプロセスを一掃し、刷新の時期です。転職や異動の可能性。", relation: "関係の終焉と再生を経験するかも。", other: "終焉と再生の象徴。諦めたり、辞めると決めるのに最適な時期。変革期を示します。" },
  { love: "順調な前進の時。バランスを保ちつつ自分の言葉を投げかける時。", work: "ペース配分を大切に。無理なく進めると吉。", relation: "相手にも良い刺激を与えることができると吉。", other: "調和と節制の象徴。バランスをとりつつも自分のために行動することが鍵。" },
  { love: "情熱が過熱に変わりやすいので注意。泣かされる相手から離れる。", work: "執着や誘惑に注意し、冷静な判断を。再起のチャンス。", relation: "依存関係に気をつけて。", other: "束縛と欲望の象徴。子供心や初診を忘れずときめきを大事にして。" },
  { love: "突然の変化が訪れるかも。恐れず向き合って。", work: "計画が崩れる可能性あり。柔軟に対応を。", relation: "価値観の崩壊と再構築を経験するかも。", other: "破壊と解放の象徴。激変に対応して一新する覚悟が大事。" },
  { love: "希望に満ちた恋が芽生えます。夢を語り合って。", work: "インスピレーションが高まる時期。", relation: "誠意を持って対応する。楽しい会話の中からひらめきが生まれる。", other: "希望と癒しの象徴。望む方向を迷わず示すことができれば明るい未来を示します。" },
  { love: "感情が揺れ動きやすいので慎重に。", work: "管理に対して大雑把さがあるが、直感を信じて。", relation: "誤解や不安に注意し、言葉を選んで。自分自身も人の言葉に敏感になってしまう時期。怒りっぽくならないよう気をつけて。", other: "不安と直感の象徴。どう決断しても迷いや不安が残る時。行動するだけでも偉いと思おう。" },
  { love: "喜びと祝福に満ちた時期。積極的に楽しんで。", work: "成功と認知が得られます。自信を持って。", relation: "ポジティブな交流が広がるでしょう。人脈が広がる時期。", other: "繁栄と喜びの象徴。即決でもOK、勢いが大事。" },
  { love: "過去の誤解が溶け、新たな理解が深まります。", work: "再評価の時期。成果が認められるかも。", relation: "重要な再生のチャンス、悪縁は立つことができる。", other: "再生と評価の象徴。過去の失敗は気にせずに進む。" },
  { love: "円満で満足感のある愛を享受できます。", work: "プロジェクトが完結し、達成感を味わう時。", relation: "すべての人との調和が得られるでしょう。仲間や味方を募ることができる。", other: "完成と統合の象徴。大きな一区切りを示すことができる。新たな挑戦をする時。" }
];

// カードデータの設定
const params = new URLSearchParams(location.search);
let idx = parseInt(params.get("index"), 10);
if (isNaN(idx) || idx < 0 || idx > 21) idx = Math.floor(Math.random() * 22);

document.getElementById("cardTitle").textContent = `#${idx} ${titles[idx]}`;
document.getElementById("cardSubTitle").textContent = messages[idx];
document.getElementById("cardImg").src = `cards/${idx}.png`;

document.getElementById("workDetail").textContent = details[idx].work;
document.getElementById("relationDetail").textContent = details[idx].relation;
document.getElementById("loveDetail").textContent = details[idx].love;
document.getElementById("otherDetail").textContent = details[idx].other;

// シェアボタンの設定
const shareX = document.getElementById('shareX');
const topPageUrl = 'https://nekutarin31.github.io/nene2/';
const tweetText = 'ワンオラクル タロットで１枚引いてみよう！';
shareX.href = 
  'https://twitter.com/intent/tweet?' +
  `text=${encodeURIComponent(tweetText)}` +
  `&url=${encodeURIComponent(topPageUrl)}`;

// ★★★ 演出なしで即座に結果表示 ★★★
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('show-result');
});

// 背景の星・雲アニメーション（そのまま残す）
(function(){
  const STAR_COUNT_MOBILE = 22;
  const STAR_COUNT_DESKTOP = 40;
  const CLOUD_COUNT_MOBILE = 4;
  const CLOUD_COUNT_DESKTOP = 7;

  const sparkleLayer = document.querySelector('.sparkle-layer');
  const cloudLayer   = document.querySelector('.cloud-layer');

  if(!sparkleLayer || !cloudLayer) return;

  // 被せたくない要素（ボタン、ヘッダーなど）
  const avoidSelectors = ['.btn', 'button', 'header', 'nav'];
  const getAvoidRects = () =>
    Array.from(document.querySelectorAll(avoidSelectors.join(',')))
      .map(el => el.getBoundingClientRect());

  // ビューポート内ランダム座標（px）
  function randPos(size = 0, padding = 8){
    const w = window.innerWidth, h = window.innerHeight;
    return {
      left: Math.random() * (w - size - padding*2) + padding,
      top : Math.random() * (h - size - padding*2) + padding
    };
  }

  // 衝突判定（単純な矩形同士）
  function intersects(r1, r2){
    return !(r2.left > r1.right ||
             r2.right < r1.left ||
             r2.top > r1.bottom ||
             r2.bottom < r1.top);
  }

  // 「避ける矩形」とぶつからない位置を探す
  function placeWithoutOverlap(el, size){
    const maxTry = 80;
    const avoids = getAvoidRects().map(r => ({
      left:r.left, top:r.top, right:r.right, bottom:r.bottom
    }));
    for(let i=0; i<maxTry; i++){
      const {left, top} = randPos(size, 10);
      const rect = { left, top, right:left+size, bottom:top+size };
      const hit = avoids.some(a => intersects(rect, a));
      if(!hit){
        el.style.left = left + 'px';
        el.style.top  = top + 'px';
        return true;
      }
    }
    // 見つからなければ最後の位置で妥協（ほぼ起きない）
    const {left, top} = randPos(size, 10);
    el.style.left = left + 'px';
    el.style.top  = top + 'px';
    return false;
  }

  // ⭐ 星をつくる
  function createStar(){
    const s = document.createElement('div');
    s.className = 'sparkle';
    // サイズと速度をランダム（既存パステルの世界観に合う軽さ）
    const size = Math.round(8 + Math.random()*14);   // 8〜22px
    const dur  = (8 + Math.random()*6).toFixed(1);   // 8〜14s
    s.style.setProperty('--s', size + 'px');
    s.style.setProperty('--d', dur + 's');
    placeWithoutOverlap(s, size);
    sparkleLayer.appendChild(s);
  }

  // ☁️ 雲をつくる（SVG雲：線と塗りは既存のゆめかわ配色に寄せる）
/* ……すでにある即時関数の中の createCloud を置き換え …… */
function createCloud(){
  const wrap = document.createElement('div');
  wrap.className = 'cloud-puff';

  // サイズ（小さめで軽い雲に）
  const width  = Math.round(120 + Math.random()*180);   // 120〜300px
  const height = Math.round(width * (0.55 + Math.random()*0.15));
  wrap.style.width  = width+'px';
  wrap.style.height = height+'px';

  // ふわふわ上下のスピード
  wrap.style.setProperty('--cd', (14 + Math.random()*10) + 's');

  // 左右スライドの幅と速さ（小さめにして“ボタンを横切りにくい”よう配慮）
  const slideDur = (24 + Math.random()*14) + 's';   // 24〜38s
  const rangeVW  = (4 + Math.random()*4) + 'vw';    // 4〜8vw（横ゆれ幅）
  // 右→左スタート or 左→右スタートをランダムに
  const invert   = Math.random() > 0.5 ? 1 : -1;
  wrap.style.setProperty('--slide', slideDur);
  wrap.style.setProperty('--from',  `calc(${invert * -1} * ${rangeVW})`);
  wrap.style.setProperty('--to',    `calc(${invert *  1} * ${rangeVW})`);

  // 初期座標はこれまで通り「避けたい場所」をよけて配置
  const maxWH = Math.max(width, height);
  placeWithoutOverlap(wrap, maxWH);

  // 内側に SVG を入れる（内側だけ上下ふわふわ）
  wrap.innerHTML = `
    <div class="cloud-body" aria-hidden="true">
      <svg viewBox="0 0 200 110" width="100%" height="100%">
        <defs>
          <linearGradient id="cloudFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"  stop-color="var(--yume-white)"/>
            <stop offset="100%" stop-color="color-mix(in oklab, var(--yume-lav) 35%, #fff)"/>
          </linearGradient>
        </defs>
        <path d="M40,80
                 C20,78,15,55,35,50
                 C35,25,70,20,85,35
                 C95,15,130,15,140,35
                 C160,35,172,50,165,62
                 C185,68,180,90,155,90
                 L55,90
                 C50,90,45,85,40,80Z"
              fill="url(#cloudFill)"
              stroke="color-mix(in oklab, var(--yume-lav) 55%, #caa8ff)"
              stroke-width="2" />
      </svg>
    </div>
  `;

  cloudLayer.appendChild(wrap);
}

  // 端末ごとに数を調整
  function populate(){
    sparkleLayer.innerHTML = '';
    cloudLayer.innerHTML = '';

    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    const stars = isDesktop ? STAR_COUNT_DESKTOP : STAR_COUNT_MOBILE;
    const clouds = isDesktop ? CLOUD_COUNT_DESKTOP : CLOUD_COUNT_MOBILE;

    for(let i=0; i<stars; i++) createStar();
    for(let i=0; i<clouds; i++) createCloud();
  }

  // 初期化＆リサイズ時に再配置（“左に固まる”のを防ぐ）
  window.addEventListener('load', populate);
  window.addEventListener('resize', () => {
    // 連打抑制
    clearTimeout(window.__reflowTimer);
    window.__reflowTimer = setTimeout(populate, 200);
  });
})();
