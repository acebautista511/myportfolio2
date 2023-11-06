let btnCalc = document.querySelector('.btnCalc');
const resultsModal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnReset = document.querySelector('.btnReset')

btnCalc.addEventListener('click' , display);


function display(){
    let weight = document.querySelector('#myWeight').value;
    let height = document.querySelector('#myHeight').value;
    
    let BMI = weight / (height * 2);
       
    resultsModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    if (BMI <=18.4) {
        document.querySelector('.bmi-description').innerHTML = ('Your are UNDERWEIGHT and your BMI is ' + Math.round (BMI) )
        document.querySelector(' .br').style.backgroundColor= "red" 
        document.querySelector(' .br').style.color= "white"
     
    }
    
    else if ( BMI >= 18.5 && BMI <= 24.5) {
        document.querySelector('.bmi-description').innerHTML = ('Your are NORMAL and your BMI is ' + Math.round (BMI) )
        document.querySelector(' .br').style.backgroundColor= "green" 
        document.querySelector(' .br').style.color= "yellow" 
     
    } 
    
    else if  (BMI >=25 && BMI <= 39.9) {
        console.log ('Your are OVERWEIGHT and your BMI is' + Math.round (bmiValue));
        document.querySelector('.bmi-description').innerHTML = ('Your are OVERWEIGHT and your BMI is ' + Math.round (BMI) )
        document.querySelector(' .br').style.backgroundColor= "blue" 
        document.querySelector(' .br').style.color= "pink" 
    
    } 
    
    else {
        document.querySelector('.bmi-description').innerHTML = ('Your are OBESE and your BMI is ' + Math.round (BMI) )
        document.querySelector(' .br').style.backgroundColor= "black" 
        document.querySelector(' .br').style.color= "white"
    }
}
btnReset.addEventListener('click',function() {
let weight = document.querySelector(".weight")
let height = document.querySelector(".height")

height.value = ""
weight.value = ""
})

btnCloseModal.addEventListener('click', close);
function close(){
    resultsModal.classList.add ("hidden")
    overlay.classList.add ("hidden")
}
