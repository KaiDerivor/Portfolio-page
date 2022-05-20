
import {vocabulary} from './vocabulary.js';
window.onload=init;

function init(){

   const list =document.querySelector('.language');
   list.addEventListener('click',changeLangHandler);

}
function changeLangHandler(event){
   const target=event.target;

   if(target.tagName!=="A"){return;}
   if(target.id!=='ua'&&target.id!=='eng'){return};

   if(target.classList.contains('current_language')){return;}
   else{
      const previosLang=document.querySelector('.current_language');
      previosLang.classList.remove('current_language');
      
      target.classList.add('current_language');

   }
   callChange();
}

function changeItems(select,index){
   let temp='';
   const item=document.getElementById(select)

   temp=item.innerHTML;
   item.innerHTML=vocabulary[index];
   vocabulary[index]=temp;
}

function callChange(){
   changeItems('title','title');
   changeItems('name','h1');
   changeItems('profile','profile');
   changeItems('bio','bio');
   changeItems('education','education');
   changeItems('describe_education','educationP');
   changeItems('skill','skill');
   changeItems('ghs','ghs');
   changeItems('gp','gp');
   changeItems('gj','gj');
   changeItems('gm','gm');
   changeItems('gg','gg');
   changeItems('area','area');
   changeItems('area-place','areaPlace');
   changeItems('about_me_h','aboutMeH');
   changeItems('about_me_b1','aboutMeB1');
   changeItems('about_me_b2','aboutMeB2');
   changeItems('interest_h','interestH');
   changeItems('hobby','hobby');
   changeItems('expirience','expirience');
   changeItems('expirience_text','expText');

}