
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

// ..............................................
let set = document.getElementById("set")
let setarry = ["img/clothes/pexels-erik-mclean-9367503.jpg","img/clothes/pexels-evg-kowalievska-1148957.jpg"
,"img/clothes/pexels-ivan-samkov-7671168.jpg","img/clothes/pexels-matteo-basile-8464020.jpg",
"img/clothes/pexels-robin-1020370.jpg","img/clothes/pexels-burak-başgöze-15673588.jpg"]

   let cou = 0
    setInterval(function(){
        set.setAttribute("src",setarry[cou])
        cou++
        if (cou > setarry.length -1 ) {
            cou = 0
        }
    } , 2000)

// ..............................................

let moon = document.querySelector(".fa-moon")
let mood = document.querySelector(".fa-sun")
let x = document.querySelector(".x")
let signdown = document.querySelector(".sign-down")
let aria = document.getElementById("aria")


mood.addEventListener("click",function(){
    x.style.display = "none"
    aria.style.display = "none"
    aria.style.opacity = "0"
    signdown.removeAttribute("style")
})

moon.addEventListener("click",function(){
    x.style.display = "block"
    aria.style.display = "block"
    aria.style.opacity = "1"
    signdown.style.opacity = "0"
    signdown.style.display = "none"
})
// ..............................................


let email = document.getElementById("your-email")
let username = document.getElementById("user-name")
let pass = document.getElementById("pass")
let creat = document.getElementById("creat-data")
let arry = []
function mustafa(){
    let user = {
        eemail : email.value ,
        uusername : username.value , 
        ppass : pass.value
    }

    arry.push(user)
    
    localStorage.setItem("userData",JSON.stringify(arry))
    deletedata()
    // showlog()
    
}
creat.addEventListener("click",function(){
    mustafa()
})
function deletedata(){
    email.value = ""
    username.value = ""
    pass.value = ""
}

// function showlog() {
//     let show  = ``

//     show = ` <span><strong>Go to login page</strong></span>
//     <a href="login.html"><i class="fa-solid fa-right-from-bracket"></i></a>`
//     document.getElementById("go-lo").innerHTML = show
// }


//               SIGN UP

// let emaillogin = document.getElementById("email-login")
// let passlogin = document.getElementById("pass-login")
// let btn = document.getElementById("l-ogin")

// console.log(btn);