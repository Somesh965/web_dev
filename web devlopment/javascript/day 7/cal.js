function add(num1,num2) {
    return num1+num2
}
function sub(num1,num2) {
    return num1-num2
}

const mul=(num1,num2) => num1*num2


//default
export default add
//named
export { sub,mul }