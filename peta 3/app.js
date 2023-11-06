let tipResult = document.querySelector("#tip1");
let btnResult = document.querySelector(".div1");
let btnCon = document.querySelector (".btn")
let result = document.querySelector('#result');
let btnRes = document.querySelector ( "#reset")
let pay = document.querySelector(".input2")
let peso = document.querySelector("#input1"); 
btnCon.addEventListener('click', display);
let reset = document.querySelector (".reset");
let result2 = document.querySelector("#result2")


function display ( ) {
    let pesos = peso.value; 
    let tip;
    let sharingValue = 0;  
    let total; 
    let payBill = pay.value
    
    
    
    
 if  ( peso.value == "" || pay.value === "" || tipResult.value === "Select" ){
     alert ( "there are no input")  
    }
          
else if (tipResult.value === "Execellent" ) {
        tip = pesos * 0.25
        sharingValue = tip / payBill
        total =  Number(pesos) + tip
        result.textContent = "Ang kanilang paghahatian ay  " + sharingValue ;
        result.style.color = "white"
        result2.textContent = " total bill is " + total;
       
        
    }
else if (tipResult.value === "Very Good"){

   tip = pesos * 0.20;     
    sharingValue = tip / payBill  
    total =  Number(pesos) + tip   
    result.textContent = "Ang kanilang paghahatian ay  " + sharingValue;
    result.style.color = "white"
    result2.textContent = " total bill is " + total;
}

else if (tipResult.value === "Good") {
    tip = pesos * 0.15; 
     sharingValue = tip / payBill  
     total =  Number(pesos) + tip      
        result.textContent = "Ang kanilang paghahatian ay  " + sharingValue;
        result.style.color = "white"

        result2.textContent = " total bill is " + total;
 }

else if (tipResult.value === "Fair")
{  
    tip = pesos * 0.10
    sharingValue = tip / payBill
    total =  Number(pesos) + tip
    result.textContent = "Ang kanilang paghahatian ay   " + sharingValue;
    result.style.color = "white"
    result2.textContent = " total bill is " + total;
      
}  

else if (tipResult.value === "Bad")
{
    tip = pesos* 0.05
    sharingValue = tip / payBill    
    total =  Number(pesos) + tip
    result.textContent = "the total of percentage bill is " + sharingValue;
    result.style.color = "white"
    result2.textContent = " total bill is " + total;
}

else if (peso.value == 0 || pay.value === 0 ) {
    result.textContent = "there is no input so it's NaN"
}


}

reset.addEventListener ("click",function () {
   peso.value = ""
   pay.value = ""
   result.value = ""
   result.textContent = ""
   tipResult.value = "Select" 
   result2.textContent = ""
})
