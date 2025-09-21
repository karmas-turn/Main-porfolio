const NavMenu = document.getElementById("nav-menu");
const navlink = document.querySelectorAll('.nav-link');
const menu = document.getElementById('menu-button');
const close = document.getElementById("close-button");
const date = document.getElementById("date");
const dates = document.getElementById("dates");
date.innerHTML = new Date().getFullYear();
dates.innerHTML = new Date().getFullYear();

const slide = document.querySelectorAll('.slide');
const list = document.querySelectorAll('.list');

menu.addEventListener("click", ()=> {
  
 NavMenu.classList.toggle("translate-x-full"); NavMenu.classList.toggle("translate-x-0");
  NavMenu.classList.toggle("backdrop-blur-lg");
  NavMenu.classList.toggle("slide");
  list.forEach((item, index) => {
    item.style.transitionDelay = `${index * 150}ms`;
    item.classList.toggle('slide');
  });
  // menu.classList.toggle("hidden");
  // menu.classList.toggle("");
  
});

close.addEventListener("click", ()=> {
  NavMenu.classList.toggle("slide");
  NavMenu.classList.toggle("translate-x-full"); NavMenu.classList.toggle("translate-x-0");
  NavMenu.classList.toggle("backdrop-blur-lg");
  
  list.forEach((item, index) => {
    item.style.transitionDelay = `${index * 100}ms`;
    item.classList.toggle('slide');
  });

})


// navlink.forEach(link => 
//   link.addEventListener("click", () => {
//     NavMenu.classList.toggle("translate-x-full"); NavMenu.classList.toggle("translate-x-0");
 
//   // menu.classList.toggle("");
//   }
//   )
// )

list.forEach((item, index) => {
  item.addEventListener("click", () => {
    NavMenu.classList.toggle("translate-x-full"); NavMenu.classList.toggle("translate-x-0");
 
    item.style.transitionDelay = `${index * 100}ms`;
    item.classList.toggle('slide');
  } )
})
