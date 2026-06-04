/* ====================================
   LOADER
==================================== */

window.addEventListener("load", () => {

const loader =
document.getElementById(
"loader"
);

setTimeout(() => {

loader.style.opacity =
"0";

loader.style.pointerEvents =
"none";

setTimeout(() => {

loader.style.display =
"none";

},500);

},2500);

});

/* ====================================
   DARK MODE
==================================== */

const themeBtn =
document.getElementById(
"themeBtn"
);

themeBtn.addEventListener(
"click",
() => {

document.body.classList.toggle(
"dark"
);

localStorage.setItem(
"theme",
document.body.classList.contains(
"dark"
)
?
"dark"
:
"light"
);

}
);

if(
localStorage.getItem(
"theme"
)
===
"dark"
){

document.body.classList.add(
"dark"
);

}

/* ====================================
   TYPING TEXT
==================================== */

const text =
"Arfy";

let index = 0;

const typingTarget =
document.getElementById(
"typingText"
);

function typeText(){

if(
index <
text.length
){

typingTarget.innerHTML +=
text.charAt(
index
);

index++;

setTimeout(
typeText,
200
);

}

}

typeText();

/* ====================================
   CLOCK
==================================== */

function updateClock(){

const now =
new Date();

const time =
now.toLocaleTimeString(
"id-ID"
);

const date =
now.toLocaleDateString(
"id-ID",
{
weekday:"long",
year:"numeric",
month:"long",
day:"numeric"
}
);

document.getElementById(
"clock"
).innerText =
time;

document.getElementById(
"date"
).innerText =
date;

}

setInterval(
updateClock,
1000
);

updateClock();

/* ====================================
   COPY DISCORD
==================================== */

const copyBtn =
document.getElementById(
"copyDiscordBtn"
);

if(copyBtn){

copyBtn.addEventListener(
"click",
() => {

navigator.clipboard.writeText(
"nelzz1485"
);

copyBtn.innerText =
"Copied!";

setTimeout(() => {

copyBtn.innerText =
"Copy Discord";

},2000);

}
);

}
/* ====================================
   MUSIC PLAYER
==================================== */

const songs = [

"music1.mp3",
"music2.mp3"

];

const songTitles = [

"Bergema Sampai Selamanya",
"Everything You Are"

];

let currentSong = 0;

const audio =
document.getElementById(
"audioPlayer"
);

const songTitle =
document.getElementById(
"songTitle"
);

const playBtn =
document.getElementById(
"playBtn"
);

const nextBtn =
document.getElementById(
"nextBtn"
);

const prevBtn =
document.getElementById(
"prevBtn"
);

if(audio){

audio.src =
songs[currentSong];

songTitle.innerText =
songTitles[currentSong];

}

function loadSong(index){

audio.src =
songs[index];

songTitle.innerText =
songTitles[index];

}

if(playBtn){

playBtn.addEventListener(
"click",
() => {

if(audio.paused){

audio.play();

playBtn.innerText =
"⏸️";

}else{

audio.pause();

playBtn.innerText =
"▶️";

}

}
);

}

if(nextBtn){

nextBtn.addEventListener(
"click",
() => {

currentSong++;

if(
currentSong >=
songs.length
){

currentSong = 0;

}

loadSong(
currentSong
);

audio.play();

}
);

}

if(prevBtn){

prevBtn.addEventListener(
"click",
() => {

currentSong--;

if(
currentSong < 0
){

currentSong =
songs.length - 1;

}

loadSong(
currentSong
);

audio.play();

}
);

}

/* ====================================
   VOLUME
==================================== */

const volumeSlider =
document.getElementById(
"volumeSlider"
);

if(volumeSlider){

volumeSlider.addEventListener(
"input",
() => {

audio.volume =
volumeSlider.value / 100;

}
);

}

/* ====================================
   QUOTES
==================================== */

const quotes = [

"Never Stop Learning.",

"Dream Big, Work Hard.",

"Stay Humble.",

"Success Is A Journey.",

"Keep Moving Forward."

];

const quoteText =
document.getElementById(
"quoteText"
);

const quoteBtn =
document.getElementById(
"newQuoteBtn"
);

if(quoteBtn){

quoteBtn.addEventListener(
"click",
() => {

const random =
Math.floor(
Math.random() *
quotes.length
);

quoteText.innerText =
quotes[random];

}
);

}

/* ====================================
   VISITOR COUNTER
==================================== */

const visitor =
document.getElementById(
"visitorCount"
);

if(visitor){

let count =
1024;

setInterval(() => {

count++;

visitor.innerText =
count;

},3000);

}

/* ====================================
   SKILL BAR
==================================== */

const skillFill =

document.querySelectorAll(
".skill-fill"
);

skillFill.forEach(
(skill) => {

const width =
skill.dataset.width;

skill.style.width =
"0%";

setTimeout(() => {

skill.style.width =
width + "%";

},500);

}
);

/* ====================================
   BACK TO TOP
==================================== */

const topBtn =
document.getElementById(
"topBtn"
);

window.addEventListener(
"scroll",
() => {

if(
window.scrollY >
300
){

topBtn.style.display =
"block";

}else{

topBtn.style.display =
"none";

}

}
);

if(topBtn){

topBtn.addEventListener(
"click",
() => {

window.scrollTo({

top:0,

behavior:"smooth"

});

}
);

}

/* ====================================
   FORM
==================================== */

const form =
document.getElementById(
"messageForm"
);

if(form){

form.addEventListener(
"submit",
(e) => {

e.preventDefault();

alert(
"Pesan berhasil dikirim!"
);

form.reset();

}
);

}

/* ====================================
   FINISHED
==================================== */

console.log(
"Website Arfy Loaded Successfully"
);

/* CALCULATOR */

const display =
document.getElementById("calcDisplay");

function clearDisplay(){

display.value = "";

}

function clearDisplay(){

display.value = "";

}

function calculate(){

try{

display.value =
eval(display.value);

}catch{

display.value =
"Error";

}

}
