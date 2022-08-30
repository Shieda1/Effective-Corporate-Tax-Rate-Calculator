// https://www.omnicalculator.com/finance/effective-corporate-tax-rate#how-to-calculate-effective-corporate-tax-rate-the-effective-corporate-tax-rate-formula

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const effectivecorporatetaxrateRadio = document.getElementById('effectivecorporatetaxrateRadio');
const earningsbeforetaxRadio = document.getElementById('earningsbeforetaxRadio');
const incometaxpaidRadio = document.getElementById('incometaxpaidRadio');

let effectivecorporatetaxrate;
let earningsbeforetax = v1;
let incometaxpaid = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

effectivecorporatetaxrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Earnings before tax';
  variable2.textContent = 'Income tax paid';
  earningsbeforetax = v1;
  incometaxpaid = v2;
  result.textContent = '';
});

earningsbeforetaxRadio.addEventListener('click', function() {
  variable1.textContent = 'Effective corporate tax rate';
  variable2.textContent = 'Income tax paid';
  effectivecorporatetaxrate = v1;
  incometaxpaid = v2;
  result.textContent = '';
});

incometaxpaidRadio.addEventListener('click', function() {
  variable1.textContent = 'Effective corporate tax rate';
  variable2.textContent = 'Earnings before tax';
  effectivecorporatetaxrate = v1;
  earningsbeforetax = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(effectivecorporatetaxrateRadio.checked)
    result.textContent = `Effective corporate tax rate = ${computeeffectivecorporatetaxrate().toFixed(2)}`;

  else if(earningsbeforetaxRadio.checked)
    result.textContent = `Earnings before tax = ${computeearningsbeforetax().toFixed(2)}`;

  else if(incometaxpaidRadio.checked)
    result.textContent = `Income tax paid = ${computeincometaxpaid().toFixed(2)}`;
})

// calculation

function computeeffectivecorporatetaxrate() {
  return (Number(incometaxpaid.value) / Number(earningsbeforetax.value)) * 100;
}

function computeearningsbeforetax() {
  return Number(incometaxpaid.value) / (Number(effectivecorporatetaxrate.value) / 100);
}

function computeincometaxpaid() {
  return (Number(effectivecorporatetaxrate.value) / 100) * Number(earningsbeforetax.value);
}