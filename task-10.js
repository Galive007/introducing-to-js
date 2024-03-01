let age=90;
const isStudent= false;
const ticketFare=800;
if (age<10) {
    console.log("Children ticket fare free");
} else if(isStudent) {
    let discount = ticketFare* 50/100 ;
    console.log(discount);
} else if(age >= 60){
    let discount = ticketFare* 15/100 ;
    console.log(discount);
}else{
    console.log(ticketFare);
}
