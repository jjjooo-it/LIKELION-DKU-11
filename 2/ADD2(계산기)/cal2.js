const num = document.querySelectorAll(".num");
const display = document.getElementById("io");
const op = document.querySelectorAll(".op");
const clearBtn = document.getElementById(".op_clr");
let result = '';

num.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        result+=event.target.value;
        display.innerText = result;
    })
});
op.forEach((op)=>{
    op.addEventListener("click",(event)=>{
        result+=event.target.value;
        display.innerText = result;
    })
});

clearBtn.addEventListener("click",()=>{
    result="";
    display.innerText = 0;
});

const calc = document.getElementById()
calc.addEventListener("click",()=>{
    display.innerText = eval(result);
    result = eval(result);
});