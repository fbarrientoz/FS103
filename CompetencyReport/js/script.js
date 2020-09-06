var num1, num2,result;

//Values
num1 = Number(prompt("Enter the first number"));
num2 = Number(prompt("Enter the second number"));
//Call Functions
sum(num1,num2);
substraction(num1,num2);
division(num1,num2);
multiplication(num1,num2);


//Function

function sum (num1,num2) {
    result = num2 + num1;
    console.log("\nSum: " + num1 +  "+" +  num2 + "=" + result);   
    document.getElementById("sum").innerHTML="<p>Sum " + num1 +  "+" +  num2 + "=" + result +"</p><br>"; 
}

function substraction (num1,num2) {
    result = num2 - num1;
    console.log("\nSubstraction: " + num1 +  "-" +  num2 + "=" + result); 
    document.getElementById("substraction").innerHTML="<p>Substraction " + num1 +  "-" +  num2 + "=" + result +"</p><br>";   
   
}

function division (num1,num2) {
    result = num2 / num1;
    console.log("\nDivision: " + num1 +  "/" +  num2 + "=" + result);     
    document.getElementById("division").innerHTML="<p>Division " + num1 +  "/" +  num2 + "=" + result +"</p><br>";   
}


function multiplication (num1,num2) {
    result = num2 * num1;
    console.log("\nMultiplication: " + num1 +  "*" +  num2 + "=" + result);    
    document.getElementById("multiplication").innerHTML="<p>Multiplication " + num1 +  "*" +  num2 + "=" + result +"</p><br>";   
}

//Print in html



