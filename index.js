let from = document.getElementById('from');

let to  = document.getElementById('to');

let convert = document.getElementById('convert');

let result = document.getElementById('result');

let amount = document.getElementById('amount');

convert.addEventListener('click', function(){
    let fromCurrency = from.value;
    let toCurrency = to.value;
    let amt = amount.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let rate = data.rates[toCurrency];
        let total = rate * amt;
        result.innerHTML = `${amt} ${fromCurrency} = ${total}
${toCurrency}`;
    });
});