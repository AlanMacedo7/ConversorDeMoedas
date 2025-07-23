const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select-value")

function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value)
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueToConverted = document.querySelector(".currency-value")

    const dolarToday = 5.48
    const euroToday = 6.42
    const libraToday = 7.51
    const bitcoinToday = 584754.25

    if (currencySelect.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE",
            {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == "libra") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB",
            {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libraToday)

    }

    if (currencySelect.value == "bitcoin") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue / bitcoinToday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br",
        {
            style: "currency",
            currency: "BRL"

        }).format(inputCurrencyValue)

}

function changeCurrency(){
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img-converted')
    
    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./assets/Dollar.png"
    }
    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = './assets/Libra.png'
    }
    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = './assets/Euro.png'
    }
    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = './assets/Bitcoin.png'
    }
    if (currencySelect.value == "real"){
        currencyName.innerHTML = "Real"
        currencyImage.src = './assets/Real.png'
    }

    convertValues()
}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)