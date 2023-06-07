const desc = document.querySelector(".description");
const btns = document.querySelectorAll(".tab-btn")
const contents = document.querySelectorAll(".content")
const logoContainer = document.querySelector('.logo-container')
const toggle = document.querySelector(".toggle")
const click = document.querySelector(".click")
const toggleBtn = document.querySelector(".toggle-btn")

desc.addEventListener("click", (e)=>{
    const id = e.target.dataset.id;
    if (id){
        // remove active
        btns.forEach(btn =>{
            btn.classList.remove("active")
            e.target.classList.add("active")
        })
        // hide other articles
        contents.forEach(content =>{
            content.classList.remove('active')
            content.classList.add('block') 
        })
        const element = document.getElementById(id)
        element.classList.add('active')
        element.classList.remove('block')
    }    
})

toggleBtn.addEventListener("click", ()=>{
    toggle.classList.toggle('block')
    click.classList.toggle('block')
})

logoContainer.addEventListener('click', ()=>{
    scrollTo(0,0)
})