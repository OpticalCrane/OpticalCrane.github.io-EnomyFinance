var select = document.querySelectorAll('.currency'),
input_currency = document.getElementById('input_currency'),
output_currency = document.getElementById('output_currency');

//new api address const host = 'api.frankfurter.app';
const host = 'api.frankfurter.dev/v1';
fetch(`https://${host}/currencies`)
  .then((data) => data.json())
 .then((data) => {
    const entries = Object.entries(data);
   console.log(entries)
   alert(`10 GBP = ${data.rates.USD} USD`);
   for(i =0; i < entries.length; i++){
       select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
	    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
	  }
  });

  function convert(){
    input_currency_val = input_currency.value;
    if(select[0].value != select[1].value ){
        alert("yes")
      const host = 'api.frankfurter.app';
   fetch(`https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`)
        .then((val) => val.json())
       .then((val) => {
           alert(`10 GBP = ${data.rates.USD} USD`);
           output_currency.value = Object.values(val.rates)[0]
          console.log(Object.values(val.rates)[0])
       });
    }else{
       alert("Please select two different currencies")
   }
}

//var select = document.querySelectorAll('.currency');
//var input_currency = document.getElementById('input_currency');
//var output_currency = document.getElementById('output_currency');

//const API = 'https://api.frankfurter.dev/v2';

//console.log("script.js has loaded");
// -----------------------------
// GET THE LIST OF CURRENCIES
// -----------------------------

//fetch(`${API}/currencies`)
//    .then(response => response.json())
//    .then(data => {
//        console.log("Currencies received:", data);

//        data.forEach(currency => {

//            select[0].innerHTML +=
//                `<option value="${currency.iso_code}">
//                    ${currency.iso_code} - ${currency.name}
//                </option>`;

//            select[1].innerHTML +=
//                `<option value="${currency.iso_code}">
//                    ${currency.iso_code} - ${currency.name}
//                </option>`;
//        });

//    })
//    .catch(error => {
//       console.log("Error loading currencies:", error);
//    });


// -----------------------------
// CONVERT THE CURRENCY
// -----------------------------

//function convert() {

//    var amount = input_currency.value;
//    var from = select[0].value;
//    var to = select[1].value;

//    // Check that the currencies are different
//    if (from === to) {
//        alert("Please select two different currencies");
//        return;
//    }

    // Check that an amount has been entered
 //   if (amount === "" || amount <= 0) {
 //       alert("Please enter an amount");
//      return;
//    }

    // Get the current exchange rate
//    fetch(`${API}/rate/${from}/${to}`)
//        .then(response => response.json())
//        .then(data => {

            // Calculate converted amount
 //           var convertedAmount = amount * data.rate;

            // Display answer to 2 decimal places
  //          output_currency.value = convertedAmount.toFixed(2);

 //           console.log(
 //               `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`
  //          );
//
 //       })
//            console.log("Error converting currency:", error);
//            alert("Unable to retrieve the exchange rate.");
//        });
//}