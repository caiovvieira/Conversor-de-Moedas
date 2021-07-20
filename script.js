function currencyConversion() {
    let coin = document.getElementById('coin')
    let coinCoverted = document.getElementById('coinCoverted')
    let count = document.getElementById('numberCoins').value

    let url = `https://economia.awesomeapi.com.br/last/${coin.value}-${coinCoverted.value}`


    if (coin.value == 'BRL') {
        coin.dataset.nome = 'Real Brasileiro'
    }
    if (coin.value == 'USD') {
        coin.dataset.nome = 'Dólar Americano'
    }
    if (coin.value == 'EUR') {
        coin.dataset.nome = 'Euro'
    }
    if (coin.value == 'GBP') {
        coin.dataset.nome = 'Libra Esterlina'
    }
    if (coin.value == 'JPY') {
        coin.dataset.nome = 'Iene Japônes'
    }

    let getCoin = coin.getAttribute('data-nome')


    if (coinCoverted.value == 'BRL') {
        coinCoverted.dataset.nome = 'Real Brasileiro'
    }
    if (coinCoverted.value == 'USD') {
        coinCoverted.dataset.nome = 'Dólar Americano'
    }
    if (coinCoverted.value == 'EUR') {
        coinCoverted.dataset.nome = 'Euro'
    }
    if (coinCoverted.value == 'GBP') {
        coinCoverted.dataset.nome = 'Libra Esterlina'
    }
    if (coinCoverted.value == 'JPY') {
        coinCoverted.dataset.nome = 'Iene Japônes'
    }

    let getCoinConverted = coinCoverted.getAttribute('data-nome')


    let coinValues = coin.value + coinCoverted.value

    fetch(url)
        .then((response) => {
            return response.json()

        })
        .then((response) => {
            let getValues = response[coinValues].ask

            let getCountValues = parseFloat(getValues) * count

            let converter = document.getElementById('converter').innerHTML = `${count} ${getCoin} equivale à ${getCountValues.toFixed(2)} ${getCoinConverted}`

            if(count == ''){
                converter = document.getElementById('converter').innerHTML = 'Insira um valor'
            }
        })
        .catch((response) => {
            if (response = 404) {
                converter = document.getElementById('converter').innerHTML = 'Não é possível converter a mesma moeda'
            }
        })
}