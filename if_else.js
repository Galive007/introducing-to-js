var age = 8;
var human;
// human = age > 18 ? "He is adult" : "he is child";
// console.log(human);
// console.log(typeof human);

if(age <18){
    if(age > 0 || age < 10){
        console.log("He/She is child");
    }else{
        console.log("He/She is not child");
    }
}else{
    if(age>18 || age< 25){
        console.log("He/She is semi elder");
    }else{
        console.log("He/She is Elder");
    }
}