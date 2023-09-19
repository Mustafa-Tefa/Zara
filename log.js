JSON.parse(localStorage.getItem("userData"))

let userPush = JSON.parse(localStorage.getItem("userData"))
console.log(userPush);

let email = document.getElementById("email-login")
let pass = document.getElementById("pass-login")
let login = document.getElementById("l-ogin")

login.addEventListener("click", function(){

    checkData()
})

function checkData (){
    let cartoon = ``
    for (let i = 0; i < userPush.length; i++) {
        if (userPush[i].eemail == email.value && userPush[i].ppass == pass.value) {
            seaction.style.opacity="0"
            seaction.style.left="130%"
            seaction.style.transition="1.5s"
            cartoon =`
            <span>${userPush[i].uusername}</span>
            `
            break;
        } else{
            console.log("Not Aquel");
        }
    }
    document.getElementById("namelogin").style= "flex"
    document.getElementById("namelogin").innerHTML=cartoon
    changeicon()
    let move = document.getElementById('move')
    move.style.display = 'none'
   
}

// 

let loginx = document.querySelector(".fa-user")
let seaction = document.getElementById("logo-up")
loginx.addEventListener("click",function(mo){
    mo.preventDefault()
    if (window !== null) {
        seaction.style.opacity="1"
        seaction.style.left="0%"
        seaction.style.transition="2s"
    }
})

let move1 = document.getElementById('move1')

function changeicon() {
    
    move1.style.display = "flex"

}


