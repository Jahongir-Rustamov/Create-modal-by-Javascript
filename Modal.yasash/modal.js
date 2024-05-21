const btn=document.querySelector('.btn1')
const modal=document.querySelector('.modal')
const close_btn=document.querySelector('.close_btn')
const overly=document.querySelector('.overly')

btn.addEventListener('click',function(){
    modal.classList.remove('hidden')
    overly.classList.remove('hidden')
})
close_btn.addEventListener('click',function(){
    modal.classList.add('hidden')
    overly.classList.add('hidden')
})

overly.addEventListener('click',function(){
    modal.classList.add('hidden')
    overly.classList.add('hidden')
})
document.addEventListener('keydown',(e)=>{
 if(e.key=='Escape'){
    modal.classList.add('hidden')
    overly.classList.add('hidden')
 }
})