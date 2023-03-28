const row = document.querySelector('.row');
const select = document.querySelector('.location-sel')
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
            subTitle.innerHTML = `<span>USD: ${data.rates.USD}</span>
                                  <span>EUR: ${data.rates.EUR}</span>
                                  <span>RUB: ${data.rates.RUB}</span>
                                  <span>KGS: ${data.rates.KGS}</span>`
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