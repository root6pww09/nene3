// JavaScript

(function () {
  const STAR_COUNT_MOBILE = 22;
  const STAR_COUNT_DESKTOP = 40;
  const CLOUD_COUNT_MOBILE = 4;
  const CLOUD_COUNT_DESKTOP = 7;

  const sparkleLayer = document.querySelector('.sparkle-layer');
  const cloudLayer = document.querySelector('.cloud-layer');

  if (!sparkleLayer || !cloudLayer) return;

  // 被せたくない要素（ボタン、ヘッダーなど）
  const avoidSelectors = ['.btn', 'button', 'header', 'nav'];
  const getAvoidRects = () =>
    Array.from(document.querySelectorAll(avoidSelectors.join(',')))
      .map(el => el.getBoundingClientRect());

  // ビューポート内ランダム座標（px）
  function randPos(size = 0, padding = 8) {
    const w = window.innerWidth, h = window.innerHeight;
    return {
      left: Math.random() * (w - size - padding * 2) + padding,
      top: Math.random() * (h - size - padding * 2) + padding
    };
  }

  // 衝突判定（単純な矩形同士）
  function intersects(r1, r2) {
    return !(r2.left > r1.right ||
      r2.right < r1.left ||
      r2.top > r1.bottom ||
      r2.bottom < r1.top);
  }

  // 「避ける矩形」とぶつからない位置を探す
  function placeWithoutOverlap(el, size) {
    const maxTry = 80;
    const avoids = getAvoidRects().map(r => ({
      left: r.left, top: r.top, right: r.right, bottom: r.bottom
    }));
    for (let i = 0; i < maxTry; i++) {
      const { left, top } = randPos(size, 10);
      const rect = { left, top, right: left + size, bottom: top + size };
      const hit = avoids.some(a => intersects(rect, a));
      if (!hit) {
        el.style.left = left + 'px';
        el.style.top = top + 'px';
        return true;
      }
    }
    // 見つからなければ最後の位置で妥協（ほぼ起きない）
    const { left, top } = randPos(size, 10);
    el.style.left = left + 'px';
    el.style.top = top + 'px';
    return false;
  }

  // ⭐ 星をつくる
  function createStar() {
    const s = document.createElement('div');
    s.className = 'sparkle';
    // サイズと速度をランダム（既存パステルの世界観に合う軽さ）
    const size = Math.round(8 + Math.random() * 14);   // 8〜22px
    const dur = (8 + Math.random() * 6).toFixed(1);   // 8〜14s
    s.style.setProperty('--s', size + 'px');
    s.style.setProperty('--d', dur + 's');
    placeWithoutOverlap(s, size);
    sparkleLayer.appendChild(s);
  }

  // ☁️ 雲をつくる（SVG雲：線と塗りは既存のゆめかわ配色に寄せる）
  function createCloud() {
    const wrap = document.createElement('div');
    wrap.className = 'cloud-puff';

    // サイズ（小さめで軽い雲に）
    const width = Math.round(120 + Math.random() * 180);   // 120〜300px
    const height = Math.round(width * (0.55 + Math.random() * 0.15));
    wrap.style.width = width + 'px';
    wrap.style.height = height + 'px';

    // ふわふわ上下のスピード
    wrap.style.setProperty('--cd', (14 + Math.random() * 10) + 's');

    // 左右スライドの幅と速さ（小さめにして"ボタンを横切りにくい"よう配慮）
    const slideDur = (24 + Math.random() * 14) + 's';   // 24〜38s
    const rangeVW = (4 + Math.random() * 4) + 'vw';    // 4〜8vw（横ゆれ幅）
    // 右→左スタート or 左→右スタートをランダムに
    const invert = Math.random() > 0.5 ? 1 : -1;
    wrap.style.setProperty('--slide', slideDur);
    wrap.style.setProperty('--from', `calc(${invert * -1} * ${rangeVW})`);
    wrap.style.setProperty('--to', `calc(${invert * 1} * ${rangeVW})`);

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
  function populate() {
    sparkleLayer.innerHTML = '';
    cloudLayer.innerHTML = '';

    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    const stars = isDesktop ? STAR_COUNT_DESKTOP : STAR_COUNT_MOBILE;
    const clouds = isDesktop ? CLOUD_COUNT_DESKTOP : CLOUD_COUNT_MOBILE;

    for (let i = 0; i < stars; i++) createStar();
    for (let i = 0; i < clouds; i++) createCloud();
  }

  // 初期化＆リサイズ時に再配置（"左に固まる"のを防ぐ）
  window.addEventListener('load', populate);
  window.addEventListener('resize', () => {
    // 連打抑制
    clearTimeout(window.__reflowTimer);
    window.__reflowTimer = setTimeout(populate, 200);
  });
})();


// Back to top 表示制御と動作
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});
backBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* ==== ゆめかわ Sparkles ==== */
(function () {
  const rootPrefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  const containers = document.querySelectorAll('.yume-sparkles .sparkles');
  containers.forEach(box => {
    const host = box.closest('.yume-sparkles');
    const n = Number(host?.dataset?.sparkles || 20);
    const palette = ["#ffd7f7", "#e8d7ff", "#d7f7ff", "#fff3c9"];
    for (let i = 0; i < n; i++) {
      const el = document.createElement('span');
      el.className = 'sparkle' + (Math.random() > .5 ? ' is-star' : '');
      const s = 6 + Math.random() * 16;                 // サイズ
      const d = 6 + Math.random() * 8;                  // 速度
      const x = Math.random() * 100, y = Math.random() * 100;
      el.style.setProperty('--s', s + 'px');
      el.style.setProperty('--d', d + 's');
      el.style.setProperty('--x', x + '%');
      el.style.setProperty('--y', y + '%');
      el.style.setProperty('--c', palette[(Math.random() * palette.length) | 0]);
      el.style.left = 0; el.style.top = 0;
      el.style.transform = `translate(${x}%, ${y}%)`;
      if (!rootPrefersReduced) { el.style.animationDelay = (-Math.random() * d) + 's'; }
      box.appendChild(el);
    }
    // パフォーマンス：画面に見えている時だけアニメさせる
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        box.style.visibility = e.isIntersecting ? 'visible' : 'hidden';
      });
    }, { threshold: 0.05 });
    io.observe(host);
  });
})();


/* ===== Cloud Transition (index側) ===== */
(function () {
  if (window.__cloudTransitionInitialized) {
    return;
  }
  window.__cloudTransitionInitialized = true;

  document.addEventListener('click', function (e) {
    const a = e.target.closest('a[href]');
    if (!a) return;
    
    const href = a.getAttribute('href') || "";
    if (!href.startsWith('result.html')) return;

    const hasBtn = a.classList.contains('btn');
    
    if (!hasBtn) {
      return;
    }

    e.preventDefault();
    
    document.body.classList.add('fade-out');
    
    let navigated = false;
    function doNavigate() {
      if (!navigated) {
        navigated = true;
        window.location.href = href;
      }
    }

    const fallback = setTimeout(doNavigate, 2800);
    
    setTimeout(() => {
      runCloudCover(() => {
        clearTimeout(fallback);
        doNavigate();
      });
    }, 400);
  });

  function runCloudCover(onDone) {
    const overlay = document.createElement('div');
    overlay.className = 'cloud-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);

    const stage = document.createElement('div');
    stage.className = 'cloud-stage';
    overlay.appendChild(stage);

    const STAGE_W = 1200;
    const STAGE_H = 1000;
    const COUNT = 30;

    for (let i = 0; i < COUNT; i++) {
      const cloud = document.createElement('div');
      cloud.className = 'cloud';

      const size = rand(100, 200);
      const x = rand(0, STAGE_W - size);
      const y = rand(0, STAGE_H - Math.floor(size * 0.6));
      const dur = rand(480, 900);
      const rot = rand(-12, 12);

      Object.assign(cloud.style, {
        position: 'absolute',
        left: x + 'px',
        top: y + 'px',
        width: size + 'px',
        '--tx': (x > STAGE_W / 2 ? '-40px' : '40px'),
        '--ty': (y > STAGE_H / 2 ? '-30px' : '30px'),
        '--rot': rot + 'deg',
        animation: `cloudIn ${dur}ms ease-out ${i * 14}ms forwards`
      });

      cloud.innerHTML = cloudSVG();
      stage.appendChild(cloud);
    }

    const maxDelay = 900 + COUNT * 14 + 160;
    setTimeout(() => { 
      onDone && onDone(); 
    }, maxDelay);

    function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
  }

  function cloudSVG() {
    return `
    <svg viewBox="0 0 200 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img">
      <defs><radialGradient id="g${Math.random().toString(36).substr(2,9)}" cx="50%" cy="45%" r="70%">
        <stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#fff7ff"/></radialGradient></defs>
      <path class="fill" d="M60 90c-22 0-40-14-40-32 0-14 11-26 26-30 6-13 20-22 36-22 17 0 31 10 37 24 3-1 6-1 9-1 20 0 36 14 36 31s-16 30-36 30H60z" fill="url(#g${Math.random().toString(36).substr(2,9)})"/>
      <path class="stroke" d="M60 90c-22 0-40-14-40-32 0-14 11-26 26-30 6-13 20-22 36-22 17 0 31 10 37 24 3-1 6-1 9-1 20 0 36 14 36 31s-16 30-36 30H60z"/>
      <circle cx="70" cy="72" r="4" fill="#ffd6f6" opacity=".9"/>
      <circle cx="130" cy="72" r="4" fill="#ffd6f6" opacity=".9"/>
    </svg>`;
  }
})();


window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('first-visit-loader');
  if (!loader) return;

  const hasVisited = localStorage.getItem('has-visited-oracle');
  
  if (hasVisited) {
    loader.remove();
    return;
  }

  loader.hidden = false;

  const html = document.documentElement;
  const prevOverflow = html.style.overflow;
  html.style.overflow = 'hidden';

  const MIN_SHOW = 3000;
  let minTimePassed = false;
  let pageLoaded = false;

  setTimeout(() => { minTimePassed = true; tryHide(); }, MIN_SHOW);
  window.addEventListener('load', () => { pageLoaded = true; tryHide(); });

  const FORCE_CLOSE = setTimeout(() => {
    minTimePassed = true;
    pageLoaded = true;
    tryHide();
  }, 10000);

  function tryHide() {
    if (minTimePassed && pageLoaded) {
      clearTimeout(FORCE_CLOSE);
      loader.classList.add('hide');
      html.style.overflow = prevOverflow || '';
      
      localStorage.setItem('has-visited-oracle', 'true');
      
      setTimeout(() => loader.remove(), 700);
    }
  }
});
