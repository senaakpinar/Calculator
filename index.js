let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let btnDot = document.getElementById("btnDot");
let btnEquals = document.getElementById("btnEquals");
let result = document.getElementById("result");
let i = 1;
let value1 =0;
let value2 = 0;
let a = 0;
let b = 0;
let operation;
let total = 0;
let factorial=1;
let dot;



function calculate(a,b,operation)
{   
    switch(operation){
        case 'star':
            console.log(a,b,operation);
            calculateStar(a,b);
            break;
        case 'square':
            console.log(a,b,operation);
            calculateSquare(a,b);
            break;
        case 'triangle':
            console.log(a,b,operation);
            calculateTriangle(a,b);
            break;
        default:
            break;
            
    }

}

function numberBtnClick(value)
{


    if(value === 1)
    {
           result.value += btn1.value;
    }

    if(value === 2)
    {
        result.value += btn2.value;
    }

    if(value === 3)
    {
        result.value += btn3.value;
    }

    if(value === 4)
    {
        result.value += btn4.value;
    }
    
    if(value === 5)
    { 
        result.value += btn5.value;
    }
    
    if(value === 6)
    {
        result.value += btn6.value;
    }
    
    if(value === 7)
    {
        result.value += btn7.value;
    }
    
    if(value === 8)
    { 
        result.value += btn8.value;
    }

    if(value === 9)
    {  
        result.value += btn9.value;
    }

    if(value === 0)
    {
        result.value += btn0.value;
    }

    if(value === dot){
        result.value+=btnDot.value;
    }

}

function clearInput(){
    
    let btnClear = document.getElementById("btnClear").value;
    document.getElementById("result").value = btnClear;

}


function setValue1(oper){
    operation = oper;
    value1 = result.value;
    a = parseFloat(value1);
    if(a >= 999999999){
        alert("Maximum sayı basamağına ulaştınız");
    }
    clearInput();
    

}

function setValue2(){
    value2 = result.value;
    b = result.value;
    b = parseFloat(value2);
    if(b >= 999999999){
        alert("Maximum sayı basamağına ulaştınız");
    }
    calculate(a,b,operation);

   

}
function calculateStar(a,b){
    total = (2 * a) + (a * b);
    result.value = total
    console.log(total);
    
    
}

function calculateSquare(a,b){
    total = (2 * a) - (a * b);
    result.value = total;
    console.log(total);
    
}

function calculateTriangle(a,b){
    total = Math.pow(a,b) + Math.pow(b,a);
    
    for(let i = 1;i<total;i++){
        factorial = total*i;
    }
    
    result.value = factorial;

    
    console.log(factorial);
}




