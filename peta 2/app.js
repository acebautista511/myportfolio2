let currencyResult = document.querySelector("#currency");
let btnResult = document.querySelector(".div1");
let btn1 = document.querySelector("#btn1");
let result = document.querySelector("#result");
let reset = document.querySelector("#reset")
btn1.addEventListener('click', display);

function display ( ) {
    let peso = document.querySelector("#inp1").value;
    let bill = 0;

    console.log (peso)
    console.log (typeof(peso))

    if (peso === "") {
        return alert("INVALID INPUT")
    }else if (currencyResult.value === "YEN") {
        bill = peso * 2.60;
        console.log(bill)
        result.textContent = "the equivalent of peso in YEN is " + bill;
        peso.value = bill
    } else if (currencyResult.value === "USD") {
        bill = peso * 0.018;
        result.textContent = "the equivalent of peso in USD is " + bill;
    } else if (currencyResult.value === "BHD") {
        bill = peso * 0.0066;
        result.textContent = "the Equivalent of PESO in BHD is " + bill;
    } else {
        result.textContent = "INVALID"
    }
    
}

reset.addEventListener("click", function(){
    let input = document.querySelector("#inp1")
    let result = document.querySelector("#result")

    input.value = ""
    result.value = ""
})
