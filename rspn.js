manuicon = document.querySelector('.manuicon');
headnav = document.querySelector('.headnav');
nav = document.querySelector('.nav');
logo = document.querySelector('.logo');
search = document.querySelector('.search');

manuicon.addEventListener('click',()=>{
    nav.classList.toggle('v-nav')
    search.classList.toggle('v-nav')
    logo.classList.toggle('v-nav')
    headnav.classList.toggle('h-nav')


})


var headnav= document.getElementById("headnav");
window.onscroll=function(){
   var scrollnav= window.scrollY;
  if(scrollnav>=200){
     headnav.classList.add('after-scroll-navbar1');
  }

  else{
     headnav.classList.remove('after-scroll-navbar1') 
  }
}
