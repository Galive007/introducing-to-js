let examGrade= 60 ;
if (examGrade <= 100 && examGrade >=0) {
    if (examGrade>=90 && examGrade<=100) {
        console.log("Your Result is : A");
    }
    if (examGrade>=80 && examGrade<=89.9) {
        console.log("Your Result is : B");
    }
    if (examGrade>=70 && examGrade<=79.9) {
        console.log("Your Result is : C");
    }
    if (examGrade>=60 && examGrade<=69.9) {
        console.log("Your Result is : D");
    }if (examGrade>=0 && examGrade<=59.9) {
        console.log("Your Result is : F");
    }   
}else{
    console.log("Your number isn't marking scale.");
}