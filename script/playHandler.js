const back = document.querySelector("#episodes ul li #textWrapper #customPlayer p:nth-of-type(1)")
const pause = document.querySelector("#episodes ul li #textWrapper #customPlayer p:nth-of-type(2)")
const forward = document.querySelector("#episodes ul li #textWrapper #customPlayer p:nth-of-type(3)")
const bar = document.querySelector("#episodes ul li #textWrapper #customPlayer div")
const time = document.querySelector("#episodes ul li #textWrapper #customPlayer p:nth-of-type(4)")

console.log(bar.children[0].style.flex = 9);
console.log(bar.children[1].style.flex = 1);

time.innerHTML = "12:34"