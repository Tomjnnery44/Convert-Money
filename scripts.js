
const convertButton = document.querySelector(".convertButton")
const currencySelect = document.querySelector(".currencySelect")
function convertvalues() {
    const inputCurrency = document.querySelector(".inputCurrency").value
    const CurrencyValueToConvert = document.querySelector(".CurrencyValueToConvert") //Valor do real
    const currencyValue = document.querySelector(".currencyValue") //Valor dolar
    console.log(currencySelect.value);
    const dolarToday = 5.2
    const euroToday = 6.2
    if (currencySelect.value === "Dolar") {
        //SE o select tiver selecionado o valor do dolar entre aqui
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency / dolarToday)

    }
    if (currencySelect.value === "Euro") {
        //SE o select tiver selecionado o valor do euro entre aqui
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / euroToday)
    }
    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputCurrency)

}

function changeCurrency() {
    const currencyName = document.getElementById("currencyName")
    const currencyImage = document.querySelector(".currencyImg")
    if (currencySelect.value === "Dolar") {
        currencyImage.src = './img/estados-unidos (1) 1.png'
    }
    if (currencySelect.value === "Euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = './img/euro.png'
    }
    convertvalues()
}
currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertvalues)



