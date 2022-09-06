const menuBt = document.getElementById("teslaMenu")
const mainNavE = document.getElementById("mainNav")
const X = document.getElementById("dropdownX")
let fadeNav = true;

window.scrollBy(1000,0)

// console.log(menuBt)

menuBt.addEventListener('click', function(){
 console.log("hello")
mainNavE.style.visibility = "visible";
})


// X.addEventListener('click', function(){
//     console.log("hello")
//    mainNavE.style.visibility = "hidden";
//    })

X.addEventListener('click', function(){
    console.log("hello")
    mainNavE.style.animation = "fadeout 0.5s";
    mainNavE.style.visibility = "hidden";
    // element.classList.add("mystyle");
   })


  