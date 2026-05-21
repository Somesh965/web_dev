// const change=() => {
//     let display =document.getElementById("display")
//     display.innerHTML="Bye"
//     display.style.color="red"
//     display.style.backgroundColor="green"
// }

let display=document.getElementById("display")
let count=0
const incriment=() => {
    count++
    display.innerHTML=count
}
// incriment()