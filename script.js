const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const loader = document.querySelector("[data-loader]");
const disabledSocialLinks = document.querySelectorAll(".social-card.is-disabled");
const directionButtons = document.querySelectorAll("[data-direction-target]");
const variantNodes = document.querySelectorAll("[data-variant]");
const revealItems = document.querySelectorAll(
  ".intro-grid, .section-heading, .feature-card, .media-panel, .service-copy, .flow-step, .contact-copy, .social-card, .company-grid"
);

const variants = {
  trust: {
    heroEyebrow: "Design 01 / 信頼感重視",
    heroLead:
      "初めての住まい探しでも、判断材料をひとつずつ整理。仲介手数料無料と夜間対応で、無理なく相談できる不動産仲介です。",
    pointOneTitle: "安心",
    pointOneText: "代表が相談から契約まで伴走",
    pointTwoTitle: "0円",
    pointTwoText: "対象物件は仲介手数料無料",
    pointThreeTitle: "夜間",
    pointThreeText: "仕事終わりの相談も可能",
    intro:
      "迷いやすい物件選びを、費用・条件・暮らしやすさの順に整理。PERIVIVEは、納得して選べる状態づくりを大切にします。",
    strengthTitle: "安心して相談できる不動産仲介へ。",
    strengthCopy:
      "費用の見通し、物件比較、契約前の確認事項まで、はじめての方にもわかりやすく案内します。",
    serviceTitle: "住まい探しの判断を、ひとつずつ明確に。",
    serviceCopy:
      "気になる物件をただ紹介するだけでなく、費用感、生活動線、契約条件まで見比べながら、納得して選べる状態をつくります。",
    contactTitle: "まずは、希望条件を軽く聞かせてください。",
    contactCopy:
      "公式LINEとInstagramの導線を用意しています。URLが決まり次第、下の枠に追加できます。",
  },
  zero: {
    heroEyebrow: "Design 02 / 仲介手数料無料訴求",
    heroLead:
      "初期費用を少しでも抑えたい方へ。対象物件は仲介手数料無料で、条件整理から契約までスムーズにサポートします。",
    pointOneTitle: "無料",
    pointOneText: "対象物件の仲介手数料0円",
    pointTwoTitle: "比較",
    pointTwoText: "初期費用を並べて確認",
    pointThreeTitle: "相談",
    pointThreeText: "無理な提案をせず条件整理",
    intro:
      "家賃だけでなく、敷金・礼金・保証料・仲介手数料まで含めて比較。費用面で納得できる選択を一緒につくります。",
    strengthTitle: "初期費用を抑える選択肢を、最初から。",
    strengthCopy:
      "対象物件の仲介手数料を無料で案内し、予算に合う候補を現実的に絞り込みます。",
    serviceTitle: "費用の差がわかる物件提案。",
    serviceCopy:
      "候補ごとの初期費用、月額費用、契約条件を整理。安さだけでなく、暮らし始めてからの納得感まで見比べます。",
    contactTitle: "費用を抑えたい条件から相談できます。",
    contactCopy:
      "LINEとInstagramの枠を用意済みです。公式URLを追加すれば、そのまま問い合わせ導線として使えます。",
  },
  night: {
    heroEyebrow: "Design 03 / 夜間対応訴求",
    heroLead:
      "日中に動きづらい方でも、仕事終わりに住まい探しを進められます。夜間相談に対応し、候補整理から内見調整まで伴走します。",
    pointOneTitle: "夜間",
    pointOneText: "事前予約で夜の相談に対応",
    pointTwoTitle: "時短",
    pointTwoText: "条件整理を先に済ませる",
    pointThreeTitle: "伴走",
    pointThreeText: "内見・申込までまとめて対応",
    intro:
      "忙しい毎日の中でも、住まい探しを止めないために。PERIVIVEは、夜の時間帯でも相談しやすい導線を整えています。",
    strengthTitle: "仕事終わりでも、住まい探しを前に進める。",
    strengthCopy:
      "夜間相談で希望条件を整理し、内見候補や費用感を事前に確認。限られた時間を有効に使えます。",
    serviceTitle: "夜の相談から、次の行動まで決める。",
    serviceCopy:
      "気になる物件を共有し、条件の優先順位を整理。翌日以降の内見調整や申込準備までスピード感を持って進めます。",
    contactTitle: "夜の時間帯も、まずは気軽に。",
    contactCopy:
      "公式LINE・Instagramの枠は後からURLを入れるだけ。夜間相談の入口として使える設計にしています。",
  },
  social: {
    heroEyebrow: "Design 04 / LINE・Instagram導線重視",
    heroLead:
      "気になる物件や希望条件を、LINEやInstagramから気軽に相談できるホームページ案。SNS導線を目立たせつつ、信頼感も保ちます。",
    pointOneTitle: "LINE",
    pointOneText: "公式LINE枠を用意済み",
    pointTwoTitle: "Instagram",
    pointTwoText: "投稿導線をあとから追加",
    pointThreeTitle: "相談",
    pointThreeText: "物件URLの共有にも対応",
    intro:
      "問い合わせの入口をわかりやすく。PERIVIVEは、LINEとInstagramから相談につながる導線を前提にした設計にしています。",
    strengthTitle: "SNSから相談しやすい不動産窓口に。",
    strengthCopy:
      "物件URL、スクリーンショット、希望条件を送りやすい導線を用意。公式アカウントの運用開始後も自然に拡張できます。",
    serviceTitle: "気になる物件を、そのまま相談へ。",
    serviceCopy:
      "SNSで見つけた物件や条件を共有し、費用・空室状況・内見可否を確認。問い合わせ前の小さな不安にも対応します。",
    contactTitle: "LINEとInstagramの追加枠を用意済みです。",
    contactCopy:
      "今はURL設定待ちの状態です。公式LINEとInstagramのURLが決まれば、カードのリンクを差し替えるだけで公開できます。",
  },
};

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

const updateHeroMotion = () => {
  const drift = Math.min(window.scrollY / 9, 72);
  document.documentElement.style.setProperty("--hero-drift", `${drift}px`);
};

year.textContent = new Date().getFullYear();

const setDirection = (direction) => {
  const nextVariant = variants[direction] ? direction : "trust";
  document.body.dataset.direction = nextVariant;

  variantNodes.forEach((node) => {
    const key = node.dataset.variant;
    if (variants[nextVariant][key]) {
      node.textContent = variants[nextVariant][key];
    }
  });

  directionButtons.forEach((button) => {
    const isActive = button.dataset.directionTarget === nextVariant;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

directionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setDirection(button.dataset.directionTarget);
  });
});

disabledSocialLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("scroll", updateHeroMotion, { passive: true });
updateHeader();
updateHeroMotion();
setDirection(document.body.dataset.direction);

if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches && "IntersectionObserver" in window) {
  document.body.classList.add("motion-ready");

  revealItems.forEach((item) => {
    item.dataset.revealItem = "";
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.14 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (window.lucide) {
  window.lucide.createIcons();
}

let loaderFinished = false;
let loaderProgress = 0;
let touchStartY = null;

const setLoaderProgress = (progress) => {
  loaderProgress = Math.max(0, Math.min(progress, 1));
  loader?.style.setProperty("--intro-progress", loaderProgress.toFixed(3));
  loader?.style.setProperty("--intro-rotate", `${Math.round(loaderProgress * 180)}deg`);
  loader?.style.setProperty("--intro-scale", (1 + loaderProgress * 1.05).toFixed(3));
};

const finishLoader = () => {
  if (loaderFinished) return;
  loaderFinished = true;
  setLoaderProgress(1);
  loader?.classList.add("is-hidden");
  document.body.classList.remove("is-loading");
  window.removeEventListener("wheel", handleLoaderWheel);
  window.removeEventListener("touchstart", handleLoaderTouchStart);
  window.removeEventListener("touchmove", handleLoaderTouchMove);
  window.removeEventListener("keydown", handleLoaderKeydown);
};

const advanceLoader = (delta) => {
  if (loaderFinished || delta <= 0) return;
  setLoaderProgress(loaderProgress + delta / 720);
  if (loaderProgress >= 1) {
    finishLoader();
  }
};

function handleLoaderWheel(event) {
  if (loaderFinished) return;
  event.preventDefault();
  advanceLoader(event.deltaY);
}

function handleLoaderTouchStart(event) {
  touchStartY = event.touches[0]?.clientY ?? null;
}

function handleLoaderTouchMove(event) {
  if (loaderFinished || touchStartY === null) return;
  const currentY = event.touches[0]?.clientY ?? touchStartY;
  const delta = touchStartY - currentY;
  if (delta > 0) {
    event.preventDefault();
    advanceLoader(delta * 2.35);
  }
  touchStartY = currentY;
}

function handleLoaderKeydown(event) {
  if (loaderFinished) return;
  if (["ArrowDown", "PageDown", " ", "Enter"].includes(event.key)) {
    event.preventDefault();
    advanceLoader(230);
  }
}

setLoaderProgress(0);
window.addEventListener("wheel", handleLoaderWheel, { passive: false });
window.addEventListener("touchstart", handleLoaderTouchStart, { passive: true });
window.addEventListener("touchmove", handleLoaderTouchMove, { passive: false });
window.addEventListener("keydown", handleLoaderKeydown);
