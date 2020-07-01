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




// window.addEventListener("scroll", function () {
//   let scroll = document.documentElement.scrollTop;

//   console.log(scroll);

//   if (scroll > 250) {
//     document.querySelector(".bnr-2").classList.add("active");
//   } else {
//     document.querySelector(".bnr-2").classList.remove("active")
//   }

//   if (scroll > 690) {
//     document.querySelector(".bnr-3").classList.add("active");
//   } else {
//     document.querySelector(".bnr-3").classList.remove("active")
//   }

//   if (scroll > 600) {
//     document.querySelector("#innerLogo").classList.add("active");
//   } else {
//     document.querySelector("#innerLogo").classList.remove("active")
//   }
// });