var select = document.querySelectorAll('.currency');
var input_currency = document.getElementById('input_currency');
var output_currency = document.getElementById('output_currency');

//Old API ADDRESS 
const host = 'api.frankfurter.app';
// New API ADDRESS
//const host = 'api.frankfurter.dev/v1';


// --------------------------------
// GET CURRENCIES
// --------------------------------

fetch(`https://${host}/currencies`)

    .then((data) => data.json())

    .then((data) => {

        const entries = Object.entries(data);
        console.log("Currencies:", entries);

        for (let i = 0; i < entries.length; i++) {

            select[0].innerHTML +=
                `<option value="${entries[i][0]}">
                    ${entries[i][0]}
                </option>`;

            select[1].innerHTML +=
                `<option value="${entries[i][0]}">
                    ${entries[i][0]}
                </option>`;
        }

    })

    .catch((error) => {

        console.log(
            "Error loading currencies:",
            error
        );

    });


// --------------------------------
// CONVERT CURRENCIES
// --------------------------------

function convert() {

    var input_currency_val = input_currency.value;
    if (select[0].value != select[1].value) {

        fetch(
            `https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`
        )

            .then((val) => val.json())
            .then((val) => {
                console.log("API response:", val);
                output_currency.value =
                    Object.values(val.rates)[0];

            })

            .catch((error) => {
                console.log(
                    "Error converting currency:",
                    error
                );
            });

    } else {

        alert(
            "Please select two different currencies"
        );

    }
}