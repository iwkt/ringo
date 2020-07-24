// let mySwiper = new Swiper('.swiper-container', {
//   navigation: {  //ナビゲーションのオプション（矢印ボタンの要素を指定）
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }
// });

let slider1 = new Swiper('.slider1', {
  // 以下にオプションを設定
  loop: true, //最後に達したら先頭に戻る

  //ページネーション表示の設定
  pagination: {
    el: '.swiper-pagination', //ページネーションの要素
    type: 'bullets', //ページネーションの種類
    clickable: true, //クリックに反応させる
  },

  //ナビゲーションボタン（矢印）表示の設定
  navigation: {
    nextEl: '.swiper-button-next', //「次へボタン」要素の指定
    prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
  }
});

let slider2 = new Swiper('.slider2', {
  // 以下にオプションを設定
  loop: true, //最後に達したら先頭に戻る

  //ページネーション表示の設定
  pagination: {
    el: '.swiper-pagination', //ページネーションの要素
    type: 'bullets', //ページネーションの種類
    clickable: true, //クリックに反応させる
  },

  //ナビゲーションボタン（矢印）表示の設定
  navigation: {
    nextEl: '.swiper-button-next', //「次へボタン」要素の指定
    prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
  }
});

let slider_pc = new Swiper('.slider_pc', {
  // 以下にオプションを設定
  loop: true, //最後に達したら先頭に戻る

  //ページネーション表示の設定
  pagination: {
    el: '.swiper-pagination', //ページネーションの要素
    type: 'bullets', //ページネーションの種類
    clickable: true, //クリックに反応させる
  },

  //ナビゲーションボタン（矢印）表示の設定
  navigation: {
    nextEl: '.swiper-button-next_pc', //「次へボタン」要素の指定
    prevEl: '.swiper-button-prev_pc', //「前へボタン」要素の指定
  }
});




// let mySwiper = new Swiper('.swiper-container', {
//   autoplay: {
//     delay: 2000,
//   },

//   loop: true,

//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// })

// let mySwiper01 = new Swiper('#swiper01', { //この例では id のセレクタを指定して初期化
//   navigation: {  //ナビゲーションボタンを表示
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
