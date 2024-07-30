var budgetInp=document.getElementById("budget")
var amountInp=document.getElementById("amount")
var pusposeInp=document.getElementById("puspose")
var amounts = [];
document.getElementById("d1").style.display="none"
document.getElementById("done").addEventListener("click",()=>{
    document.getElementById("totalbudget").innerHTML=budgetInp.value;
    document.getElementById("d1").style.display="block";
})
document.getElementById("done1").addEventListener("click",()=>{
// console.log(parseInt( amountInp.value),parseInt( budgetInp.value));
var main=document.getElementById("main")
if(parseInt( amountInp.value)> parseInt(budgetInp.value)){
amountInp.value=""
pusposeInp.value=""
    // return
}
else{
    amounts.push(parseInt(amountInp.value));
    var div=document.createElement("div")
div.innerHTML=`
 <div class="col-12 justify-content-center d-flex flex-row col-12 my-2 bg" >
    <div class="col-6 d-flex justify-content-center flex-column align-items-start">
        <h5>${pusposeInp.value}</h5>

    </div>
    <div class="col-5 d-flex justify-content-center flex-column align-items-start">
        <h5>${amountInp.value}</h5>

    </div>  
      <div class="col-1 d-flex justify-content-center flex-column align-items-center">
     <div class="d-flex flex-row">
        <i class="fa fa-trash del" aria-hidden="true"></i>
        <i class="fas fa-pen ed"></i>
    </div>
    </div>
</div>
`
main.appendChild(div)
}
var add=0
for(let i=0;i<amounts.length;i++){
    add+=amounts[i]
    console.log(amounts[i]);
}
document.getElementById("expento").innerHTML=add
var divall=document.querySelectorAll(".del")
var edall=document.querySelectorAll(".ed")
var v;
// console.log(amounts.length);
for(let i=0;i<amounts.length;i++){
    v=divall[i]
    v.addEventListener("click",(e)=>{

        // var sd=e.parentNode 
        document.getElementById("totalexpence").innerHTML=0
        document.getElementById("expento").innerHTML=0;
        var dclo=e.target.parentNode.parentNode.parentNode
        dclo.remove()
        // console.log(e.target.parentNode.parentNode.parentNode );
      })
      
// console.log(add);
}

})

