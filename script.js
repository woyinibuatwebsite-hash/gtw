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
