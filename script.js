const row = document.querySelector('.row');
const region = document.querySelector('.location-sel')
const input = document.querySelector('.inpt')
const title = document.querySelector('.title')
const subTitle = document.querySelector('.subtitle')
const button = document.querySelector('.btn')
const base = document.querySelector('.base')

button.addEventListener('click',() => {
    let amount = input.value || 0
    let chant = base.value
    fetch(`https://api.exchangerate.host/latest?base=${chant}&symbols=USD,RUB,EUR,KGS,&amount=${amount}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            title.innerHTML = `Base currency: ${data.base}`
            switch (data.base){
                case 'USD':
                    return subTitle.innerHTML = `<span>EUR: ${data.rates.EUR.toFixed(2)}</span>
                                                 <span>RUB: ${data.rates.RUB.toFixed(2)}</span>
                                                 <span>KGS: ${data.rates.KGS.toFixed(2)}</span>`
                case 'EUR':
                    return subTitle.innerHTML = `<span>USD: ${data.rates.USD.toFixed(2)}</span>
                                                 <span>RUB: ${data.rates.RUB.toFixed(2)}</span>
                                                 <span>KGS: ${data.rates.KGS.toFixed(2)}</span>`
                case 'KGS':
                    return subTitle.innerHTML = `<span>EUR: ${data.rates.EUR.toFixed(2)}</span>
                                                 <span>RUB: ${data.rates.RUB.toFixed(2)}</span>
                                                 <span>USD: ${data.rates.USD.toFixed(2)}</span>`
                case 'RUB':
                    return subTitle.innerHTML = `<span>EUR: ${data.rates.EUR.toFixed(2)}</span>
                                                 <span>USD: ${data.rates.USD.toFixed(2)}</span>
                                                 <span>KGS: ${data.rates.KGS.toFixed(2)}</span>`
            }
        })
})


fetch('https://restcountries.com/v3.1/region/europe')
    .then(response => response.json())
    .then(data => {
        data.map(country => {
            row.innerHTML += `<div class ="col-4">
                                <div class="box">
                                    <div class="flag">
                                        <img src="${country.flags.png}" alt="flag">
                                    </div>
                                    <h3>${country.name.common}</h3>
                                    <div>Capital: <h4>${country.capital[0]}</h4></div>
                                    <div>
                                       Languages: <h4>${Object.values(country.languages)}</h4>
                                    </div>
                                    <div>
                                    Population: <h4>${country.population}</h4>
                                    </div>
                                    <div>
                                    Location: <a href="${country.maps.googleMaps}" target="_blank">Let's go!</a>
                                    </div>
                                    <div class="div">
                                    Area: <h4>${country.area}</h4>
                                    </div>
                                </div>
                               </div>`
        })
    })
region.addEventListener('change', () => {
    let con = region.value

    fetch(`https://restcountries.com/v3.1/region/${con}`)
        .then(response => response.json())
        .then(data => {
            row.innerHTML = ''
            data.map(country => {
                row.innerHTML += `<div class ="col-4">
                                <div class="box">
                                    <div class="flag">
                                        <img src="${country.flags.png}" alt="flag">
                                    </div>
                                    <h3>${country.name.common}</h3>
                                    <div>Capital: <h4>${country.capital}</h4></div>
                                    <div>
                                       Languages: <h4>${Object.values(country.languages)}</h4>
                                    </div>
                                    <div>
                                    Population: <h4>${country.population}</h4>
                                    </div>
                                    <div>
                                    Location: <a href="${country.maps.googleMaps}" target="_blank">Let's go!</a>
                                    </div>
                                    <div class="div">
                                    Area: <h4>${country.area}</h4>
                                    </div>
                                </div>
                               </div>`
            })
        })
})
