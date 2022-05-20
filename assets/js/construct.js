
const side=document.getElementById('backSideMain');
const sideWrapper=document.getElementById('backSideWrapper');

side.classList.remove('side-space');
sideWrapper.classList.remove('side-space');

const arrow=document.querySelector('.wrapper-arrow');
setTimeout(()=>{
   arrow.style.cssText='right:-2.5vw; opacity:1; transition:0.5s;';
},1000);

const boxes=document.querySelectorAll('.box');
setTimeout(()=>{
   boxes.forEach((element)=>{
      element.style.cssText="margin-top:0px;opacity:1;";
   });
   
},1000);

const wrapMain=document.getElementById('mainWrapper');
setInterval(()=>{
   wrapMain.style.opacity="1";
},1000);

