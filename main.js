function myFunction(form){
    let number1=parseInt(form.num1.value);
    let number2=parseInt(form.num2.value);
    let op=form.oprator.value;
    if(op== "select"){
        document.getElementById("res").innerHTML = "Please select Operator...!";
    }
    if(op == "add"){
        document.getElementById("res").innerHTML = (number1)+(number2);   
    }
    else if(op == "sub"){
        document.getElementById("res").innerHTML = number1-number2;
    }
    else if(op == "mul"){
        document.getElementById("res").innerHTML = number1*number2;
    }
    else if(op == "div"){
        document.getElementById("res").innerHTML = number1/number2;
    }
    else if(op == "mod"){
        document.getElementById("res").innerHTML = number1%number2;
    }
}

function erase(){
    document.getElementById("res").innerHTML = "";
}
