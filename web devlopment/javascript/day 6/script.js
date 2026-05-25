// try {
//     console.log(y);
// } catch (err) {
//     console.log(err);
// }
// console.log("hello");


// function myfun() {
//     console.log(-1);
// }
// setTimeout(myfun,3000)
// setinterval(myfun,3000)
// // clearinterval

let display = document.getElementById("display")
const changeImage = async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json()
        display.style.backgroundImage = `url(${data.message})`
    } catch (err) {
        console.log(err);
    }
}