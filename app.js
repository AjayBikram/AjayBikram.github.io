const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle('nav-toggle');
 });

 const watch = document.querySelector(".watch");
 watch.addEventListener("click", () => {
    window.open("https://www.youtube.com/watch?v=dntmuB6kw_A");
});
const rating = document.querySelector(".rating");
 rating.addEventListener("click", () => {
    window.open("https://www.google.com/shopping/product/9424516302856189969/reviews?q=review+on+jordan+1s&oq=review+on+jordan+1s&aqs=chrome..69i57j33i160.5628j0j4&sourceid=chrome&ie=UTF-8&sa=X&ved=2ahUKEwjB7v3jovT7AhUdoXIEHT5HCLYQ4jV6BAgEECk");
});