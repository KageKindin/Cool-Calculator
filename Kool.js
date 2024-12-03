var num1
var num2

function input(){
     num1 = parseFloat(document.getElementById("num1").value);
     num2 = parseFloat(document.getElementById("num2").value);
}

function add(){
    input()
    document.getElementById("result").innerText=(num1+num2);
}
  
function subtract(){
    input()
    document.getElementById("result").innerText=(num1-num2);
} 
 
function multiply(){
    input()
    document.getElementById("result").innerText=(num1*num2);
}

var bt=document.querySelector("#dbtn")
bt.addEventListener("click",()=>{
    input()
    document.getElementById("result").innerText=(num1/num2)
} )

bt.addEventListener("keydown",()=>{
    input()
    document.getElementById("result").innerText=(num1/num2)
})

// bt.addEventListener("mouseover",()=>{
//     alert("Mousehovered over divide button")
// })    