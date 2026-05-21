// console.log("hello");
// var num1 = 65;
// var num2 = 34;
// console.log(num1+num2)
// if (num1 > num2) {
//     console.log("the number is"+num1+"this largest number");
// } else {
//     console.log ("the  number is"+num2+"this is smallest number")
// }
// if (num1%2==0) {
//     console.log("even number")
// } else {
//     console.log("odd number")
// }

// userinput=11
// fc=0
// for (var i=0; i<userinput;i++) {
//     if(userinput%i==0){
//         fc=fc+1
//     }
// }
// if (fc==1) {
//     console.log(userinput,"is prime")
// } else{
//     console.log("not a prime")
// }

userinput=131
rev=0
while(userinput>0) {
    r=userinput%10
    rev=rev+10*r
    userinput=userinput/10
}
if (userinput==rev) {
    console.log("given number is prime")
} else{
    console.log("not a given number")
}


