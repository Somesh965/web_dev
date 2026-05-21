let colorcode=[0,1,2,3,4,5,6,8,9,'a','b','c','d','e','f']
const changeColor=() => {
    let display=document.getElementById("display")
    randColor="#";
    for (let i=0; i<6; i++) {
        let randNumber=Math.floor(Math.random()*16)
        randColor+=colorcode[randNumber]
    }
    display.style.backgroundColor=randColor
    console.log(randColor);
}