const burger=document.getElementById('burger');
const fries=document.getElementById('fries');
const smoothie=document.getElementById('smoothie');
const priceCalc=document.getElementById('priceCalc');

burger.addEventListener('click',()=>{
    let val=parseInt(priceCalc.innerText);
    val+=50;
    priceCalc.innerText=val;
})
fries.addEventListener('click',()=>{
    let val=parseInt(priceCalc.innerText);
    val+=30;
    priceCalc.innerText=val;
})
smoothie.addEventListener('click',()=>{
    let val=parseInt(priceCalc.innerText);
    val+=20;
    priceCalc.innerText=val;
})

const count=()=>{
    priceCalc.innerText="00";
}