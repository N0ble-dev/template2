let parentImg = Array.from(document.querySelectorAll(".ph"))
let moreImg = document.getElementById("moreimg")
let allImg = document.getElementById("all")
let icons = Array.from(document.querySelectorAll("#icons li"))
let increse = 0
let current;

// looping through elemnts and remove class active from all then add it to the one how call the fn
// then add event to the element i click

icons.forEach(function (e)
{
    e.addEventListener("click", function ()
    {
        icons.forEach(function (x)
        {
            x.classList.remove("active")
        })
        this.classList.add("active")
    })
    e.addEventListener("click", showImg)
})

// fisrt disapper all imgs 
//reset increse
//make array from the element who call the function 
// using his value of attribute to get the imgs who have the same id
function showImg ()
{
    parentImg.forEach((img) => img.style.display = "none")
    increse = 0
    current = Array.from(document.querySelectorAll(this.getAttribute("data-img")))
    current[increse].style.display = "block";
    moreImg.classList.remove("noactive")
    moreImg.innerHTML="More"
}
moreImg.onclick = manageImg
function manageImg ()
{
    increse++
    if (increse < current.length) {
        current[increse].style.display = "block"
    }else{
        moreImg.innerHTML="No More Img"
        moreImg.classList.add("noactive")
    }
}
allImg.onclick = allImgHandler
function allImgHandler ()
{
    parentImg.forEach(function (e)
    {
        e.style.display = "block"
    })
}



let btn = document.getElementById("arrow");

window.onscroll = function ()
{
    if (window.scrollY >= 800) {
        btn.classList.add("show")
    }else{
        btn.classList.remove("show")
    
    }
};

btn.onclick = function ()
{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

let countDate= new Date("Dec 31,2023 23:59:59").getTime()

let counter =setInterval(() => {
    let dateNow=new Date().getTime()
    let dateDiff=countDate-dateNow
    let hours=Math.floor(dateDiff%(1000*60*60*24)/(1000*60*60))
    let minuts=Math.floor(dateDiff%(1000*60*60)/(1000*60))
    let seconds=Math.floor(dateDiff%(1000*60)/(1000))
    document.getElementById("days").innerHTML=Math.floor(dateDiff/(1000*60*60*24))
    document.getElementById("hours").innerHTML=hours<10?`0${hours}`:hours
    document.getElementById("minuts").innerHTML=minuts<10?`0${minuts}`:minuts
    document.getElementById("seconds").innerHTML=seconds<10?`0${seconds}`:seconds
}, 1000);

let alpha="abcdefghiklmnopkrszxwqpjABCDEFGHIJKLMNOPQRSWYZ0123456789#$^&*@-_~/"
let serial=""
let numberOfIteration;
let generatedNumber = document.getElementById("genreated")
let getNumber =document.getElementById("number")


function generate(n){
    if (isNaN(n) || n === "0") {
        generatedNumber.innerHTML = "Please enter a valid number greater than 0.";
        return;
        }
        serial="";
    for(let i=0 ; i<n;i++){
        serial+=alpha[Math.floor(Math.random()*alpha.length)]
    }
    generatedNumber.innerHTML=serial
}

getNumber.onblur=getValue

function getValue(){
    numberOfIteration=getNumber.value
}
document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault();
    clone.className=''
    clone.setAttribute("class","fa-regular fa-copy")
    generate(numberOfIteration)
});

let clone =document.getElementById("clone")

clone.onclick=clonning

function clonning() {
navigator.clipboard.writeText(serial)
clone.className=''
clone.setAttribute("class","fa-solid fa-check")
}


