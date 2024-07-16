// In this application we’re going receive data from two asynchronous sources.

// You will use :

//     This documentation
//     Create your own API key by signing up - you will be able to make more requests :)

const url = "https://v6.exchangerate-api.com/v6/0a432287b6de3f5adc5ebe1c/codes"
const currency1 = document.getElementById("curancy1")
const currency2 = document.getElementById("curancy2")
const convert = document.getElementById("convert")
const num = document.getElementById("number")
const conversionResult = document.getElementById("conversionResult")

// Note

//     The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.

//     First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter. Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.

async function addCurrencies() {
    try {
        let response = await fetch(url);
        if (!response.ok) { 
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        let codes = data.supported_codes
        for (let i = 0; i < codes.length; i++) {
            const option = document.createElement("option");
            option.text = `${codes[i][1]} : ${codes[i][0]}`
            option.id = codes[i][0]
            const option2 = document.createElement("option");
            option2.text = `${codes[i][1]} : ${codes[i][0]}`
            option2.id = codes[i][0]
            currency1.add(option)
            currency2.add(option2)
        }
    } catch (error) {
        console.log(error);
    }
};

async function getId(e) {
    e.preventDefault();
    let id1 = currency1.options[currency1.selectedIndex]
    let id2 = currency2.options[currency2.selectedIndex]
    try {
        let finalResponse = await fetch(`https://v6.exchangerate-api.com/v6/0a432287b6de3f5adc5ebe1c/pair/${id1.id}/${id2.id}/${num.value}`);
        if (!finalResponse.ok) { 
            throw new Error('Network response was not ok');
        }
        let result = await finalResponse.json();
        conversionResult.innerText = result.conversion_result
        }
    catch (error) {
        console.log(error)
    }
}

addCurrencies()
convert.addEventListener("submit", function (e) {
    getId(e)
})

//     To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint. Check out this page on Pair conversion requests from the ExchangeRate API documentation.
//     Hint: You could also supply an optional AMOUNT variable in the query of the request.
