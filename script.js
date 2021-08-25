let coin = document.getElementById('coin')
let coinConverted = document.getElementById('coinConverted')
let converter = document.getElementById('converter')

async function conversion() {
    let url = `https://economia.awesomeapi.com.br/last/${coin.value}-${coinConverted.value}`
    let takeCoins = await fetch(url)
    let getValues = await takeCoins.json()
    let coinValues = coin.value + coinConverted.value
    let numberCoins = document.getElementById('numberCoins').value
    let getCoinValues = parseFloat(getValues[coinValues].ask) * numberCoins

    writeValues(numberCoins, getCoinValues)
}

function writeValues(numberCoins, getCoinValues) {

    let coinName = ""
    let coinConvertedName = ""
    
    switch (coin.value) {
        case 'BRL':
            coinName = 'Real Brasileiro'
            break;
        case 'USD':
            coinName = 'Dólar Americano';
            break;
        case 'EUR':
            coinName = 'Euro'
            break;
        case 'GBP':
            coinName = 'Libra Esterlina'
            break;
        case 'JPY':
            coinName = 'Iene Japônes';
            break;
    }

    switch (coinConverted.value) {
        case 'BRL':
            coinConvertedName = 'Real Brasileiro'
            break;
        case 'USD':
            coinConvertedName = 'Dólar Americano';
            break;
        case 'EUR':
            coinConvertedName = 'Euro'
            break;
        case 'GBP':
            coinConvertedName = 'Libra Esterlina'
            break;
        case 'JPY':
            coinConvertedName = 'Iene Japônes';
            break;
    }

    if (numberCoins == '') {
        converter.innerHTML = 'Insira um valor'
    } else {
        converter.innerHTML = `${numberCoins} ${coinName} equivale à ${getCoinValues.toFixed(2)} ${coinConvertedName} `
    }
}

function currencyConversion() {
    conversion().catch((response) => {
        if (response = 404) {
            converter.innerHTML = 'Não é possível converter a mesma moeda'
        }
    })
}