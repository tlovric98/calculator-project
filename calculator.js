const result = document.getElementById('result');
const buttons = document.getElementsByTagName('button');

for (let button of buttons) {
  button.addEventListener('click', handleClick);
  button.addEventListener('touchstart', handleClick);
}

function handleClick() {
  const buttonText = this.innerHTML;

  if (buttonText === 'C') {
    result.value = '';
  } else if (buttonText === '=') {
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = 'Error';
    }
  } else {
    result.value += buttonText;
  }
}
