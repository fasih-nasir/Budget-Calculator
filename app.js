var arr=[]
var burget=document.getElementById("budget")
var amount=document.getElementById("amount")
var purpose=document.getElementById("puspose")
var arram=[]


var main=document.getElementById("main")
document.getElementById("d1").style.display="none"
document.getElementById("done").addEventListener("click",()=>{
    
    
    document.getElementById("d1").style.display="block";
    document.getElementById("totalbudget").innerHTML=burget.value;
})

document.getElementById("done1").addEventListener("click",()=>{

// amount.value=""
 
    
    var all=[{
        budget:burget.value,
        amount:amount.value,
        purpose:purpose.value,
    }]
    
    var b;
    var c=0;
    arr.push(all)
    // var add;
    for(var i=0;i<arr.length;i++){
        // add=add+arram[i].amount;
        b=i
    }
    // console.log(arr[b][0]);
    arram.push(arr[b][0].amount)
    for(let i=0;i<arram.length;i++){
        c=c+parseInt( arram[i])
    }
    document.getElementById("totalexpence").innerHTML=burget.value-c;
    document.getElementById("expento").innerHTML=c;
    // if(burget.value-c <0){
    //     // console.log(true)
    //     document.getElementById("totalexpence").innerHTML="Out of Budget"
    //     //    location.reload()
        

    // }
    // else{
    // }

    // console.log(add);

    // document.getElementById("totalexpence").innerHTML=burget.value-amount.value;
  main.innerHTML+=
 `    <div class="col-12 justify-content-center d-flex flex-row col-12 my-2 bg" >
    <div class="col-6 d-flex justify-content-center flex-column align-items-start">
        <h4>${arr[b][0].purpose}</h4>

    </div>
    <div class="col-5 d-flex justify-content-center flex-column align-items-start">
        <h4>${arr[b][0].amount}</h4>

    </div>  
      <div class="col-1 d-flex justify-content-center flex-column align-items-center">
     <div class="d-flex flex-row">
        <i class="fa fa-trash del"  aria-hidden="true"></i>

    </div>
    </div>
</div>

  `

var divall=document.querySelectorAll(".del")
var v;
for(let i=0;i<arr.length;i++){
    v=divall[i]
    v.addEventListener("click",(e)=>{
        location.reload()
        // var sd=e.parentNode 
        document.getElementById("totalexpence").innerHTML=0
        document.getElementById("expento").innerHTML=0;
        var dclo=e.target.parentNode.parentNode.parentNode
        dclo.remove()
        // console.log(e.target.parentNode.parentNode.parentNode );
      })
}
//  amount.value=""
//     purpose.value=""
// consol
// e.log(divall[c]);
})
