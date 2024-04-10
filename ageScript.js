let NumOne =document.querySelector("[name='num1']");
document.getElementById("cluc").onclick = function (){
    let age = NumOne.value ;
if (age>0 ||age<100){
alert(`Your Age By Years : ${age}

Your Age By Months : ${age*12}

Your Age By Weeks : ${age*12*4}

Your Age By Days : ${age*12*4*7}

Your Age By Hours : ${age*12*4*7*60}

Your Age By Second : ${age*12*4*7*60*60}
`);
}
//Ahmed Wageh 
else {
alert("The age is out of range ");
}
}