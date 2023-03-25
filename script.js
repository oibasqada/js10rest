fetch('https://restcountries.com/v3.1/region/europe')
    .then(response => response.json())
    .then(data => {
        data.map(country => {
            row.innerHTML += <div class="row-4">
                                <div class="box">

                                </div>
                            </div>
        })
    })