/* =========================
SCROLL REVEAL (OPTIMIZED)
========================= */
function reveal(){

const reveals = document.querySelectorAll(".reveal");

reveals.forEach(el=>{

const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
el.classList.add("active");
}

});

}

window.addEventListener("scroll", reveal);

/* =========================
HAMBURGER MENU (IMPORTANT)
========================= */

const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", ()=>{
nav.classList.toggle("show");
});


/* =========================
HERO SLIDER (NEW)
========================= */

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(){

slides.forEach(slide=>slide.classList.remove("active"));

slides[index].classList.add("active");

index++;

if(index === slides.length){
index = 0;
}

}

setInterval(showSlide, 4000);


/* =========================
COUNTER (ON SCROLL)
========================= */

let counterStarted = false;

function startCounter(){

const counters = document.querySelectorAll(".count");

counters.forEach(counter=>{

counter.innerText = "0";

const update = ()=>{

const target = +counter.dataset.target;
const c = +counter.innerText;

const inc = target / 200;

if(c < target){
counter.innerText = Math.ceil(c + inc);
setTimeout(update, 10);
}else{
counter.innerText = target;
}

};

update();

});

}

window.addEventListener("scroll", ()=>{

const stats = document.querySelector(".stats");

if(!counterStarted && stats){

const top = stats.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
startCounter();
counterStarted = true;
}

}

});


/* =========================
LIGHTBOX GALLERY
========================= */

const images = document.querySelectorAll(".gallery-grid img");

images.forEach(img=>{

img.addEventListener("click", ()=>{

const overlay = document.createElement("div");

overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background = "rgba(0,0,0,0.9)";
overlay.style.display = "flex";
overlay.style.alignItems = "center";
overlay.style.justifyContent = "center";
overlay.style.zIndex = "9999";

const image = document.createElement("img");

image.src = img.src;
image.style.maxWidth = "90%";
image.style.maxHeight = "90%";

overlay.appendChild(image);

overlay.addEventListener("click", ()=>overlay.remove());

document.body.appendChild(overlay);

});

});
window.addEventListener("load",()=>{
document.getElementById("loader").style.display="none";
});
window.addEventListener("scroll",()=>{
let scroll = document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

let scrolled = (scroll / height) * 100;

document.getElementById("progress-bar").style.width = scrolled + "%";
});
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
});

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn=>{
btn.addEventListener("mousemove", e=>{
const rect = btn.getBoundingClientRect();
const x = e.clientX - rect.left - rect.width/2;
const y = e.clientY - rect.top - rect.height/2;

btn.style.transform = `translate(${x*0.2}px, ${y*0.2}px)`;
});

btn.addEventListener("mouseleave", ()=>{
btn.style.transform = "translate(0,0)";
});
});

const hero = document.querySelector(".hero");

document.addEventListener("mousemove", e=>{
let x = (e.clientX / window.innerWidth - 0.5) * 20;
let y = (e.clientY / window.innerHeight - 0.5) * 20;

hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});

document.querySelector("form").addEventListener("submit", ()=>{
alert("Form submitted successfully!");
});