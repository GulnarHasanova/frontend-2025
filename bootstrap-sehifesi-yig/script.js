const nav = document.querySelector('.nav')

window.addEventListener('scroll', ()=>{
    if (window.scrollY>0) {
    nav.classList.add('navbar-scrolled')

   
}
 else{
        nav.classList.remove('navbar-scrolled')
    }
    
})



