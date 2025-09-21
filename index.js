const menu = document.getElementById('menu');
const navlink = document.querySelectorAll('.nav-link')
const butt = document.getElementById("bul")
const close = document.getElementById("close");
const main = document.getElementById("main");



butt.addEventListener("click", () =>
{

  menu.classList.toggle("left-[0]");
  main.classList.toggle("hide");
  

})




navlink.forEach(link => 
  link.addEventListener("click", () =>
  {
    
    menu.classList.toggle("left-[0]");

    main.classList.toggle("hide");
    
  })
);



close.addEventListener("click", () =>
{

  menu.classList.toggle("left-[0]");
  main.classList.toggle("hide");
  

})