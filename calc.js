// function add(){
//     let num1=document.getElementById("first").value;
//     let num2=document.getElementById("second").value;
//     let out=Number(num1)+Number(num2);
//     document.getElementById("output").innerText=`Sum of number is ${out}`;
// }
// function sub(){
//     let num1=document.getElementById("first").value;
//     let num2=document.getElementById("second").value;
//     let out=Number(num1)-Number(num2);
//     document.getElementById("output").innerText=`Sub of number is ${out}`;
// }
// function multi(){
//     let num1=document.getElementById("first").value;
//     let num2=document.getElementById("second").value;
//     let out=Number(num1)*Number(num2);
//     document.getElementById("output").innerText=`Multi of number is ${out}`;
// }
// function divide(){
//     let num1=document.getElementById("first").value;
//     let num2=document.getElementById("second").value;
//     let out=Number(num1)/Number(num2);
//     document.getElementById("output").innerText=`Divide of number is ${out}`;
// }

function calc(opt) {
    let num1 = document.getElementById("first").value;
    let num2 = document.getElementById("second").value;
    let out;
    if (opt == "add") {
        out = `Sum of number is : ${Number(num1) + Number(num2)}`
    }
    if (opt == "sub") {
        out = `Sub of number is : ${Number(num1) - Number(num2)}`
    }
    if (opt == "multi") {
        out = `Multi of number is : ${Number(num1) * Number(num2)}`
    }
    if (opt == "divide") {
        out = `Divide of number is : ${Number(num1) / Number(num2)}`
    }

    document.getElementById("output").innerText = out;
}