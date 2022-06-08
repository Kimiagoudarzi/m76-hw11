function addFunc() {
    let number1 = parseInt(document.getElementById("val1").value);
    let number2 = parseInt(document.getElementById("val2").value);
    let result = document.getElementById("result");


    if (number1 && number2 !== NaN) {
        let sum = num1 + num2;
        result.innerHTML = `result: ${sum}`;
    } else {
        alert("valid number");
    }
}

//clear button
let clear = document.getElementById('delete');
clear.addEventListener('click', function handleClick(event) {
event.preventDefault();
let inputs = document.querySelectorAll('#val1, #val2');
document.getElementById("result").remove();
inputs.forEach(input => {
    input.value = '';
  });
});