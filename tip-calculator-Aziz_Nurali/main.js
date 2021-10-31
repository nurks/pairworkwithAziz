
var totalBill = 0;
var totalPeople = 0; 
var tipSelected = 0;


function isNumeric(num){
    return (!isNaN(num) && isFinite(num))
  }


const tipPerPerson = () => {
    const totalTip = totalBill * (tipSelected/100);
    const tipPerPersonNode = document.getElementById("total-tip-per-person");  
    
    if(isNumeric((totalTip / totalPeople).toFixed(2)) ){
        totalBillPerPerson(totalTip);
        return tipPerPersonNode.innerText=`$${(totalTip / totalPeople).toFixed(2)}`;
    };
}


const totalBillPerPerson = (totalTip) => {
    const totalPerPerson = ((totalBill + totalTip) / totalPeople).toFixed(2);
    const amountPerPerson = document.getElementById("total-amount-per-person");

    if(isNumeric(totalPerPerson)){
        return amountPerPerson.innerHTML = `$${totalPerPerson}`;
    }
}


const billInput = () => {
    totalBill = Number(document.getElementById("bill-charge").value);
   
    if(totalBill <= 0){
        document.getElementById("bill-error-message").style.display = "block";
    }else{
        document.getElementById("bill-error-message").style.display = "none";
        tipPerPerson();
    }
    
}


const tipInput = (event) => {

    var tipNode = document.getElementsByClassName("tip-value-active")[0];
    if(tipNode !== undefined){
        tipNode.classList.remove("tip-value-active");
    }
    event.target.className += " tip-value-active";
    
    tipSelected = Number(event.target.value);

    if(tipSelected < 0){
        document.getElementById("tip-error-message").style.display = "block"; 
    }else{
        document.getElementById("tip-error-message").style.display = "none";
        tipPerPerson();
    }
}


const peopleInput = (event) => {
    totalPeople = Number(event.target.value);
  
    if(totalPeople <= 0){
        document.getElementById("people-error-message").style.display = "block";
    }else{
        document.getElementById("people-error-message").style.display = "none";
        tipPerPerson();
    }
    
}


const resetEverthing = () => {

    const inputNodeList = document.getElementsByTagName("INPUT");
    for (const node of inputNodeList) {
        node.value =''     
    }

  
    totalBill = 0;
    totalPeople = 0; 
    tipSelected = 0;

 
    const node = document.getElementsByClassName("tip-value-active")[0];
    if(node !== undefined){
        node.classList.remove("tip-value-active");
    }

 
    const errorNodeList = document.getElementsByClassName("error-message");
    for (const node of errorNodeList) {
        node.style.display = "none";
    }
    

    document.getElementById("total-tip-per-person").innerText = "$0.00";
    document.getElementById("total-amount-per-person").innerText = "$0.00";


}