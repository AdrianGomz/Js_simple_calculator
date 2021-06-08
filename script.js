let calcBut=document.querySelector(".buttons");
let scr=document.querySelector(".screen");
let lastAnswer=0;
let screenVal='0';
let delActive=0;
let lastOperator;
let n=0;

function show(screenVal){
    console.log(screenVal)
}

function calculate(n1, operator, n2){
    if (operator === '+') {
      return n1 + n2
    } else if (operator === '-') {
      return n1 - n2
    } else if (operator === '×') {
      return n1 * n2
    } else if (operator === '÷') {
      return n1 / n2
    }
    else{
        return n2
    }
  }

function operator(buttoncontent){
    
    
    switch(buttoncontent){
        case 'c':
            lastAnswer=0
            screenVal='0'
            delActive=1
            lastOperator=NaN
            n=0
            break;
        case '←':
            if (delActive===1){
            if ((screenVal.length)===1){
                screenVal='0'
            }
            else{
            screenVal=screenVal.slice(0,-1)
            }
        }
            break;
        case '=':
            if(lastOperator!="="){
            
            result=calculate(lastAnswer,lastOperator,n)
            screenVal=result
            n=result
            lastOperator=buttoncontent

        }
            break;
        default:
            
            lastAnswer = calculate(lastAnswer,lastOperator,n)
            
            screenVal='0'
            lastOperator=buttoncontent
            break;



    }
    
}

function defineType(buttonContent,event){
    if (isNaN(parseInt(buttonContent))){
        operator(buttonContent)
        
    }
    else{
        if(screenVal==="0"){
            screenVal=buttonContent
            
        }
        else{
            screenVal+=event.target.innerText;
        }
        delActive=1
        
    }
    if (buttonContent!="="){
    n=parseInt(screenVal)}
    scr.innerText=screenVal
    console.log('la',lastAnswer,'lo',lastOperator,'ln',n)
}

calcBut.addEventListener('click',function(event) {
        defineType(event.target.innerText,event)
    
})
