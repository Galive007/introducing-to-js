const bodyWeight=80;
const bodyHeight= 1.74;
let BMI= (bodyWeight / bodyHeight **2).toFixed(1) ;
console.log(parseFloat(BMI));
if (BMI < 18.5) {
    console.log("you are underweight.");
}
else if(BMI >= 18.5 && BMI <=24.9){
 console.log("you are normal.");
}
else if(BMI >=25 && BMI <= 29.9){
 console.log("you are overweight.");
}else{
    console.log("you are obese.");
}
