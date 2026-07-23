/* ==========================================
   WEBSITE HASIL OBSERVASI
   SCRIPT.JS
========================================== */


/* ===============================
   ANIMASI SCROLL
================================ */

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(
".card,.content-card,.gallery-card,.anggota-card,.timeline-item,.info-card");

hiddenElements.forEach((el)=>{
    el.classList.add("hidden");
    observer.observe(el);
});


/* ===============================
   BACK TO TOP
================================ */

const topButton = document.createElement("button");

topButton.innerHTML="↑";

topButton.id="topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/* ===============================
   NAVBAR SHADOW
================================ */

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>50){

nav.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";

}else{

nav.style.boxShadow="0 5px 15px rgba(0,0,0,.08)";

}

});

/* =====================================
   MENU HAMBURGER
===================================== */

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav");

if(menuBtn){

menuBtn.onclick = () =>{

navMenu.classList.toggle("show-menu");

};

}

/* =====================================
   DARK MODE
===================================== */

const darkBtn = document.querySelector("#darkMode");

if(darkBtn){

darkBtn.onclick=()=>{

document.body.classList.toggle("dark");

}

}

/* =====================================
   LIGHTBOX FOTO
===================================== */

const images=document.querySelectorAll(".gallery-card img");

images.forEach((img)=>{

img.onclick=()=>{

const light=document.createElement("div");

light.className="lightbox";

light.innerHTML=`

<img src="${img.src}">

`;

document.body.appendChild(light);

light.onclick=()=>{

light.remove();

}

}

});

/* =====================================
   TYPING EFFECT
===================================== */

const text=document.querySelector(".typing");

if(text){

const kalimat="Website Hasil Observasi";

let i=0;

function ketik(){

if(i<kalimat.length){

text.innerHTML+=kalimat.charAt(i);

i++;

setTimeout(ketik,90);

}

}

ketik();

}

