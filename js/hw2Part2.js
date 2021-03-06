let num1, num2, num3;

function numberType() {
    num1 = parseInt(document.getElementById('num-one').value);
    num2 = parseInt(document.getElementById('num-two').value);
    num3 = parseInt(document.getElementById('num-three').value);

    threeNumbers()    
}

function threeNumbers() {
    let sum = num1 + num2 + num3;
    let myAverage = sum / 3;
    let average = myAverage.toFixed(2);
    let product = num1 * num2 * num3;

    if(isValidNumber(sum) && isValidNumber(average) && isValidNumber(product)) {
        document.getElementById('result').value = 
        ("The sum is " + sum + "\nThe average is " + average + "\nThe product is " + product);
    }
    else {
        document.getElementById('result').value = 
        "The first number is " + (isValidNumber(num1) ? "valid" : "invalid") 
        + "\nThe second number is " + (isValidNumber(num2) ? "valid" : "invalid") 
        + "\nThe third number is " + (isValidNumber(num3) ? "valid" : "invalid")
    }

   $("#fade").click(() => { $('textarea').fadeTo("slow", 0.2) })
  
}

function isValidNumber(number) {
    return number || number === 0;
}
