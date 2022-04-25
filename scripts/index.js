// Store the wallet amount to your local storage with key "amount"
let arr=JSON.parse(localStorage.getItem("amount")) || []
function addamount()
{
   // console.log("inside function")
   var enteramnt=document.getElementById("amount").value

   var obj={
    enteramnt:enteramnt,
   }
   arr.push(obj)
   localStorage.setItem("amount",JSON.stringify(arr))

  var getamnt=JSON.parse(localStorage.getItem("amount"))
  
   getamnt.map(function(e,i){
    let d1=document.createElement("div")
    d1.innerText=e.enteramnt
    document.querySelector("#h1").append(d1)
   });
}

function moviepage()
{
    window.location.href="movies.html"
}

