document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('navOpen').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('navMBBase').classList.toggle('active');
  })
});