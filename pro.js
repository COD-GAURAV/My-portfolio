let body = document.querySelector("body");

let bar = document.getElementById("bar");

let menu = document.getElementById("option");

let cross = document.getElementById("cross");

let arrowDiv = document.getElementById("arrow")

let about = document.getElementById("meabout");

let mySkill = document.getElementById("meskill");

let home = document.getElementById("mehome")

let myContact = document.getElementById("mecontact");

let contactme = document.getElementById("contact-us");

let frinedSection = document.getElementById("my-Friends");

let footer = document.getElementById("footer");

let SkillSection = document.getElementById("My-skill");

let arrow = document.getElementById("upArrow")

let sendmessage = document.getElementById("send-message");

let friend = document.getElementById("my-Friends")

let map = document.getElementById("map");

let img = document.getElementById("image");

let sendSection = document.getElementById("send-message");

let gallery = document.getElementById("my-gallery");

let menuOption = document.getElementById("menu-option");

let aboutSection = document.getElementById("about");

let content = document.getElementById("content");

// let scrollY  =  window.scrollTo(0,0);

body.addEventListener("click", function (E) {
  console.log(E.x, E.y);
  // console.log("screen Y =" +screenY)
});

// console.log(bar)

bar.addEventListener("click", function () {
  menu.style.display = "flex";
  menuOption.style.width = "70vw";
  cross.style.right = "2.7%";
  cross.style.display = "block";
  bar.style.display = "none";
  body.style.overflow = "hidden";
  gallery.style.display = "none";
  content.style.display = "none";
  aboutSection.style.display = "none";
  SkillSection.style.display = "none";
  contactme.style.display = "none";
  sendSection.style.display = "none";
  friend.style.display = "none"
  footer.style.display = "none";
  arrowDiv.style.display = "none";

  // if (Math.round(scrollY) === 1946) {
  //   aboutSection.style.display = "none";
  //   SkillSection.style.display = "none";
  // } else if (Math.round(scrollY === 3212)) {
  //   contactme.style.display = "none";
  //   sendSection.style.display = "none";
  // }
});

cross.addEventListener("click", function (e) {
  menu.style.display = "none";
  cross.style.display = "none";
  bar.style.display = "flex";
  body.style.overflow = "auto";
  content.style.display = "flex";
  gallery.style.display = "flex";
  body.style.overflow = "";
  gallery.style.display = "flex";
  content.style.display = "flex";
  aboutSection.style.display = "flex";
  SkillSection.style.display = "block";
  contactme.style.display = "block";
  sendSection.style.display = "block";
  friend.style.display = "block"
  footer.style.display = "flex";
  arrowDiv.style.display = "flex";
  
  
});

about.addEventListener("click", function (e) {
  aboutSection.scrollIntoView();
  bar.style.display = "flex";
    cross.style.display = "none";
  body.style.overflow = "";
  content.style.display = "flex";
  gallery.style.display = "flex";
  body.style.overflow = "";
  gallery.style.display = "flex";
  content.style.display = "flex";
  aboutSection.style.display = "flex";
  SkillSection.style.display = "block";
  contactme.style.display = "block";
  sendSection.style.display = "block";
  menu.style.display = "none";
  friend.style.display = "block"
  footer.style.display = "flex";
  window.scrollTo(0,1900)
  
});

window.addEventListener("scroll", function (e) {
  console.log(Math.round(scrollY));
});

home.addEventListener("click", function (e) {
    menu.style.display = "none";
  cross.style.display = "none";
  bar.style.display = "flex";
  body.style.overflow = "auto";
  content.style.display = "flex";
  gallery.style.display = "flex";
  body.style.overflow = "";
  gallery.style.display = "flex";
  content.style.display = "flex";
  aboutSection.style.display = "flex";
  SkillSection.style.display = "block";
  contactme.style.display = "block";
  sendSection.style.display = "block";
  friend.style.display = "block"
  footer.style.display = "flex";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
});

myContact.addEventListener("click", function () {
//   contactme.scrollIntoView();
  body.style.overflow = "";
   bar.style.display = "flex";
    cross.style.display = "none";
  body.style.overflow = "";
  content.style.display = "flex";
  gallery.style.display = "flex";
  body.style.overflow = "";
  gallery.style.display = "flex";
  content.style.display = "flex";
  aboutSection.style.display = "flex";
  SkillSection.style.display = "block";
  contactme.style.display = "block";
  sendSection.style.display = "block";
  menu.style.display = "none";
  friend.style.display = "block"
  footer.style.display = "flex";
  window.scrollTo(0,3200)
  
  // contactme.scroll({
  //     behavior: "smooth"
  // })
});

mySkill.addEventListener("click", function () {
  SkillSection.scrollIntoView();
   bar.style.display = "flex";
    cross.style.display = "none";
  body.style.overflow = "";
  content.style.display = "flex";
  gallery.style.display = "flex";
  body.style.overflow = "";
  gallery.style.display = "flex";
  content.style.display = "flex";
  aboutSection.style.display = "flex";
  SkillSection.style.display = "block";
  contactme.style.display = "block";
  sendSection.style.display = "block";
  menu.style.display = "none";
  body.style.overflow = "";
  friend.style.display = "block"
  footer.style.display = "flex";
  window.scrollTo(0,2190)
});

function scrollTotop(){
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  })
}

arrow.addEventListener("click",scrollTotop)