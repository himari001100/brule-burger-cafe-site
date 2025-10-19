const faders = document.querySelectorAll('.fadein');

const appearOptions = {
  threshold: 0.0, // 10%見えたら発火
  rootMargin: "0px 0px -120px 0px" // 下から少しずつ出る感
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return; // 見えていなければスキップ
    entry.target.classList.add('show'); // .showを追加してアニメーション発火
    observer.unobserve(entry.target);    // 一度だけ発火したら監視終了
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
