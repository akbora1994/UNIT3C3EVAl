// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
function myfunc(){

    var getamnt=JSON.parse(localStorage.getItem("amount"))
    getamnt.map(function(e,i){
     
     let d1=document.createElement("div")
     d1.innerText=e.enteramnt
     
     document.querySelector("#clist").append(d1)
    });
    }