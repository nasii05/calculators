const inputs = document.querySelector('#inputs');
const result = document.querySelector('#result');

function display(val) {
  inputs.innerText += val;
}

function calculate() {
  let expression = inputs.innerText;
  expression = expression.replaceAll('x', '*');
  expression = expression.replaceAll('÷', '/');
  const re = eval(expression);
  result.innerText = parseFloat(re.toFixed(2));
}

function calculatePercentage() {
  let expression = inputs.innerText;
  // 100x50 -> 100*(50/100)

  expression = expression.split('x'); // [100, 5]

  const num = expression[0];
  const percentage = expression[1] / 100;

  result.innerText = num * percentage;

  display('%'); //  inputs.innerText += val;
}

function undo() {
  const expression = inputs.innerText;
  // inputs.innerText = expression.slice(0, expression.length - 1);
  inputs.innerText = expression.slice(0, -1);
}

function reset() {
  inputs.innerText = '';
  result.innerText = '';
}
