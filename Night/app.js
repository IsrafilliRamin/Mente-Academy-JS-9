

const btn = document.querySelector(".btn");
let conta = document.querySelector(".container");



/* btn.addEventListener("click", ()=>{
    btn.classList.toggle("btnNight");
    conta.classList.toggle("containerNight");
}); */

let localNight = localStorage.getItem("night");
let localSun = localStorage.getItem("sun");
/* console.log(localNight);
console.log(localSun); */

if(localNight){
    btn.className = "btnNight";
    conta.className = "containerNight";
};

btn.addEventListener("click", ()=>{
    if(btn.className == "btn"){
       btn.className = "btnNight";
        conta.className = "containerNight";
        localStorage.setItem("night","containerNight");
        localStorage.removeItem("sun");
    }else{
        btn.className = "btn";
        conta.className = "container";
        localStorage.setItem("sun","container");
        localStorage.removeItem("night");
    }
});
console.log(localNight);
