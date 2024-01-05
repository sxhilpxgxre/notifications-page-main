const inbox=document.querySelectorAll('.notifi');
const  btn=document.querySelector('#btn');
const notifi_amt=document.querySelector('#notifi-amt');
const red_dots=document.querySelectorAll('i');
let amt=notifi_amt.innerHTML;


//toggle effect
btn.addEventListener("click",()=>{
    inbox.forEach(x=>{
        
        x.classList.toggle('seen')
        notifi_amt.textContent=0;

    })
    
})

//to seen one message at a time

inbox.forEach((x,i)=>{
    x.addEventListener('click',()=>{
        
        x.style.background="white";
        notifi_amt.textContent=amt=amt-1;
         red_dots[i].style.display="none";
        
    })
})
