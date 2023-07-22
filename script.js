// Simulate a loading delay (remove this in a real application)
setTimeout(() => {
  document.getElementById('loadingScreen').style.display = 'none'; // Hide loading screen
  document.getElementById('calculatorContainer').classList.add('show'); // Show calculator
}, 2000);
function appendToDisplay(value) {
  const display = document.getElementById('display');
  const currentValue = display.textContent;

  // Avoid leading zeros (except for 0 itself)
  if ((currentValue === '0' && value !== '0') || currentValue === 'Error') {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.textContent = '0';
}

function calculateResult() {
  const display = document.getElementById('display');
  const expression = display.textContent;

  try {
    const result = eval(expression);
    display.textContent = result;
  } catch (error) {
    display.textContent = 'Error';
  }
}
