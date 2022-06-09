let num1 = parseInt(prompt("Enter number 1: "));

let num2 = parseInt(prompt("Enter number 2: "));

let operator = prompt("Enter any operator(ex: +, -, *, /)")


function result(x, y, op){
    if(op == "+"){
        console.log(x + y);
    }
    else if(op == "-"){
        console.log(x - y);
    }
    else if(op == "*"){
        console.log(x * y);
    }
    else if(op == "/"){
        console.log(x / y);
    }
    else{
        alert("Enter valid operator");
    }
}

result(num1, num2, operator)
