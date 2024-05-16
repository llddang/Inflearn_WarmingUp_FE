const passwordResult = document.querySelector('.passwordResult');
const copyBtn = document.querySelector('#copyBtn');

const numberSet = "0123456789";
const smallLetterSet = "abcdefghijklmnopqrstuvwxyz";
const capitalLetterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbolSet = "@!#$&%";

let numberChecked = false;
let smallChecked = false;
let capitalChecked = false;
let symbolChecked = false;

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(passwordResult.textContent);

  const alertCopy = document.createElement('div');
  alertCopy.className = "alertCopy";
  alertCopy.textContent = "Copied the text";
  
  copyBtn.appendChild(alertCopy);

  setTimeout(() => alertCopy.remove(), 1000);

});

const submit = () => {
  numberChecked = this.numbers.checked;
  smallChecked = this.small.checked;
  capitalChecked = this.capital.checked;
  symbolChecked = this.symbols.checked;

  const password = generatePassword(this.passwordLength.value);
  console.log(password);

  if (password !== "") 
    passwordResult.textContent = password;
}

const generatePassword = (length) => {
  let password = "";
  let charSet = "";

  if (numberChecked) charSet += numberSet;
  if (smallChecked)   charSet += smallLetterSet;
  if (capitalChecked) charSet += capitalLetterSet;
  if (symbolChecked) charSet += symbolSet; 
  
  const size = charSet.length;
  for (let i=0; i<length; i++) {
    password += charSet.charAt(Math.floor(Math.random() * size));
  }

  return password;
}