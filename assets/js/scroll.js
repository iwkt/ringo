document.addEventListener('DOMContentLoaded', function () {
  
  function showElementAnimation() {
    
    let element = document.getElementsByClassName('animate-title');
    if (!element) return; // 要素がなかったら処理をキャンセル
    
    
    let showTiming = window.innerHeight > 768 ? 220 : 100; // 要素が出てくるタイミングはここで調整
    let scrollY = window.pageYOffset; //スクロール量を取得
    let windowH = window.innerHeight; //ブラウザウィンドウのビューポート(viewport)の高さを取得
  
    for (let i = 0; i < element.length; i++) {
      let elemClientRect = element[i].getBoundingClientRect();
      let elemY = scrollY + elemClientRect.top;
      if (scrollY + windowH - showTiming > elemY) {
        element[i].classList.add('inview');
      } else if (scrollY + windowH < elemY) {
        // 上にスクロールして再度非表示にする場合はこちらを記述
        element[i].classList.remove('inview');
      }
    }
  }
  showElementAnimation();
  window.addEventListener('scroll', showElementAnimation);
  
});
