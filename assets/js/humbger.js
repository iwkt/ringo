const mobilemenu = document.querySelector('#MobileMenu')
const layor = document.querySelector('.layor');

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('navOpen').addEventListener('click', function () {
    this.classList.toggle('active');
    // document.getElementById('MobileMenu').classList.toggle('active');
    mobilemenu.classList.toggle('active');
    layor.classList.toggle('active');
  })
});


// class MobileMenu {
//   constructor() {
//     this.DOM = {};
//     this.DOM.btn = document.getElementById('navOpen');
//     this.DOM.container = document.getElementById('MobileMenu')
//     this.DOM.btn.addEventListener('click',this._toggle());
//   }

//   _toggle() {
//       this.DOM.btn.classList.toggle('active');
//       this.DOM.container.classList.toggle('active');
//   }
// }

// new MobileMenu();