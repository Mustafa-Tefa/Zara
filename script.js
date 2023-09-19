let bar = document.getElementById("bar")
let close = document.getElementById("close")
let nav = document.getElementById("navbar")


    bar.addEventListener("click", () => {
        nav.classList.add('active')
    })

    close.addEventListener("click", () => {
        nav.classList.remove('active')
    })

// ...................regular.....................

let up = document.getElementById('scroll-up')
window.addEventListener('scroll',function(){
    if(scrollY>=700){
        up.style.display='block'
    }else{
        up.style.display='none'
    }
})
up.addEventListener('click',function(){
    scroll({
        top:0,
        letf:0,
        behavior:'smooth'
    })
})

// ...................End-scroll.....................



// ...................End-scroll.....................

let outshop = document.getElementById("out-shop")
let productinfo = document.getElementById("product-info")
let markt = document.querySelector(".your-markting")
let pro = document.querySelectorAll(".pro")
let img1 = document.getElementById("img1")

let showmarkt = document.getElementById("show-markt")

showmarkt.addEventListener("click",function(){
    productinfo.style.display = "flex"
    markt.style.width = "80%"

})
outshop.addEventListener("click",function(){
    productinfo.style.display = "none"
    markt.style.width = "0px"
})

pro[0].addEventListener("click",function(){
    productinfo.style.display = "flex"
    markt.style.width = "80%"
    img1.setAttribute("src","img/products/f1.jpg")
    
})
pro[1].addEventListener("click",function(){
    productinfo.style.display = "flex"
    markt.style.width = "80%"
    img1.setAttribute("src","img/products/f2.jpg")
   
})
pro[2].addEventListener("click",function(){
    productinfo.style.display = "flex"
    markt.style.width = "80%"
    img1.setAttribute("src","img/products/f3.jpg")
    
})
pro[3].addEventListener("click",function(){
    productinfo.style.display = "flex"
    markt.style.width = "80%"
    img1.setAttribute("src","img/products/f4.jpg")
})
pro[4].addEventListener("click",function(){
    productinfo.style.display = "flex"
    markt.style.width = "80%"
    img1.setAttribute("src","img/products/f5.jpg")
})
pro[5].addEventListener("click",function(){
    productinfo.style.display = "flex"
    markt.style.width = "80%"
    img1.setAttribute("src","img/products/f6.jpg")
})
pro[6].addEventListener("click",function(){
    productinfo.style.display = "flex"
    markt.style.width = "80%"
    img1.setAttribute("src","img/products/f7.jpg")
})
pro[7].addEventListener("click",function(){
    productinfo.style.display = "flex"
    markt.style.width = "80%"
    img1.setAttribute("src","img/products/f8.jpg")
})
pro[8].addEventListener("click",function(){
    productinfo.style.display = "flex"
    markt.style.width = "80%"
    img1.setAttribute("src","img/products/n1.jpg")
})
pro[9].addEventListener("click",function(){
    productinfo.style.display = "flex"
    markt.style.width = "80%"
    img1.setAttribute("src","img/products/n2.jpg")
})
pro[10].addEventListener("click",function(){
    productinfo.style.display = "flex"
    markt.style.width = "80%"
    img1.setAttribute("src","img/products/n3.jpg")
})
pro[11].addEventListener("click",function(){
    productinfo.style.display = "flex"
    markt.style.width = "80%"
    img1.setAttribute("src","img/products/n4.jpg")
})
pro[12].addEventListener("click",function(){
    productinfo.style.display = "flex"
    markt.style.width = "80%"
    img1.setAttribute("src","img/products/n5.jpg")
})
pro[13].addEventListener("click",function(){
    productinfo.style.display = "flex"
    markt.style.width = "80%"
    img1.setAttribute("src","img/products/n6.jpg")
})
pro[14].addEventListener("click",function(){
    productinfo.style.display = "flex"
    markt.style.width = "80%"
    img1.setAttribute("src","img/products/n7.jpg")
})
pro[15].addEventListener("click",function(){
    productinfo.style.display = "flex"
    markt.style.width = "80%"
    img1.setAttribute("src","img/products/n8.jpg")
})

// ...................end-your-shop.....................

let price = document.getElementById("price")
let total = document.getElementById("total")
let sel = document.getElementById("sel")


function getTotal(){

    if (price.value !== ''){
   
       let result = "$" + (+price.value * 139.00)
   
       total.innerHTML = result 
    }else{
        if(price.value === ''){
            total.innerHTML = "$139"
        }
    }   
   }

// ...................end-price.....................

let addshop = document.getElementById("add-shop")
let arry = []

if (localStorage.getItem('store') !== null){
    arry = JSON.parse(localStorage.getItem('store'))
    loop()
}else{
    arry = []
}
addshop.addEventListener("click",function(){
    let add = {
        pprice : price.value , 
        ttotal : total.innerHTML , 
        ssel : sel.value ,
        iimg1 : img1.src 
    }
    arry.push(add)

    loop()
    localStorage.setItem('store', JSON.stringify(arry))
    
})


function loop() {
    let data = ""
    for (let i = 1 ; i < arry.length; i++) {
        data+= ` <div class="card-client" id="cardclient1">
                <h4>${i}</h4>
                <div class="img-card">
                <img src=${arry[i].iimg1} id="img2"  alt="">
                </div>
                <div class="number">
                    <h6>${arry[i].pprice} Piece</h6>
                    <h6>${arry[i].ttotal}</h6>
                    <h6>${arry[i].ssel}</h6>
                </div>
                <i onclick="deletedata(${i})" class="fa-solid fa-circle-xmark"></i>
                </div>
        `
        document.getElementById("Client").innerHTML=data
        
    }
}loop()

function deletedata(i){
    arry.splice(i,1)
    localStorage.store = JSON.stringify(arry)
    loop()
}



// ...................end-creat your shop.....................







