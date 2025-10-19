// ハンバーガーボタンとナビゲーションを取得
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

// クリックで開閉
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"); // ボタンのアニメーション用
  navMenu.classList.toggle("active");   // メニュー表示用
});
