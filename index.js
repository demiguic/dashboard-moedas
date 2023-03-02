fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,ARS-BRL,GBP-BRL,JPY-BRL,BTC-BRL')
    .then(res => res.json()).then
    (json => {
        const container = document.querySelector(".container");

        for (let key in json) {
            const name = json[key].code;
            const price = json[key].bid;
            const change = json[key].pctChange;
            console.log(`${name}.png`);

            container.innerHTML += `
                <div class="coin ${change < 0 ? 'falling' : 'rising'}">
                    <div class="coin-logo">
                        <img src="images/${name}.png">
                    </div>
                    <div class="coin-name">
                        <h3>${name}</h3>
                        <span>/BRL</span>
                    </div>
                    <div class="coin-price">
                        <span class="price">R$${price}</span>
                        <span class="change">${change}%</span>
                        </div>
                </div>
                `
        }
    })