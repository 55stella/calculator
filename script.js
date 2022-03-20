// function  Calculator(previousOperand, currentOperand){
//     this.previousOperand = previousOperand
//     this.currentOperand =currentOperand
 
 
// }
class Calculator{
    constructor(previousOperand, currentOperand){
        this.previousOperand = previousOperand
        this.currentOperand =currentOperand// we already set the current operand to be equal to current operand
        this.clear() 
    }

    clear(){
     this.current =''
     this.previous =''
    //  this.operation ='undefined'

    }
    delete(){
        this.current= this.current.toString().slice(0,-1)

    }
    appendNumber(number1){
        if(number1=='.' && this.current.includes('.'))return
        this.current = this.current.toString() + number1.toString()

    }
    chooseOperation(operation){
        if(this.current ==='') return
        if(this.previous !==''){
            this.compute()
        }
        this.operation =operation
        this.previous =this.current
        this.current =''

    }

    compute(){
        let computation 
        const prev =Number(this.previous)
        const cur = Number(this.current)
        if(isNaN(prev) || isNaN(cur))return
        switch(this.operation){
            case '+':
                computation = prev + cur
                break
            case '-':
                computation = prev -cur 
                break
            case '/':
                computation =prev / cur 
                break
            case 'x':
                computation = prev * cur  
                break  
            case '%':
                computation = prev % cur  
                break
                default:
                    return
        }
        this.current =computation
        this.previous = ''
        this.operation =undefined

    }
    updateDisplay(){
        this.currentOperand.innerHTML =this.current
        if(this.operation != null){
         this.previousOperand.innerHTML =
         `${this.previous} ${this.operation}`
        }
        

    }
}

// let  result = document.querySelector('.inner-text')
let operators = document.querySelectorAll('.operators')
let numbers = document.querySelectorAll('.numbers')
let equals = document.querySelector('.equals')
let clear = document.querySelector('.Ac')
let Del = document.querySelector('.del')
let previousOperand = document.querySelector('.previous-operand')
let currentOperand =document.querySelector('.current-operand')

const calculator = new Calculator(previousOperand, currentOperand)
numbers.forEach(number =>{
    number.addEventListener('click', ()=> {
        calculator.appendNumber(number.innerHTML)
        calculator.updateDisplay()
        
    })
})

operators.forEach(operator =>{
    operator.addEventListener('click', ()=> {
        calculator.chooseOperation(operator.innerHTML)
        calculator.updateDisplay()
        
    })
})

equals.addEventListener('click', button =>{
    calculator.compute()
    calculator.updateDisplay()

})
clear.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()

})
Del.addEventListener('click', button =>{
    calculator.delete()
    calculator.updateDisplay()

})









// numbers.forEach(number =>{
//     number.onclick = function(){
//         result.innerHTML += number.innerHTML
//         number1.push(result.innerHTML)
        
//     }
// })

// operators.forEach(operator =>{
//     operator.addEventListener('click',(value)=>{
        
        // result.innerHTML+=operator.innerHTML
//         if(operator.innerHTML ==='+'){             
//                  b = result.innerHTML + operator.innerHTML
                 
//                 result.innerHTML =b
                

                    
                
//             }


        
//     })
// })




