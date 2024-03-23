const ctx = document.querySelector('#myChart')

var typed = new Typed('#element', {
    strings: ['Bonjour ! ', 'Voici le cours du Bitcoin en euro entre le premier janvier 2023 et premier janvier 2024', 'A votre avis c\'est le bon moment d\'investir ?^1000'],
    typeSpeed: 50,
    backspeed: 50,
    loop: true
});

const api = "https://api.coindesk.com/v1/bpi/historical/close.json?currency=EUR&start=2023-01-01&end=2024-01-01"
const getbitcoin = async () => {
    try {
        const res = await axios.get(api)
        let price = Object.values(res.data.bpi)
        let date = Object.keys(res.data.bpi)

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: date,
                datasets: [{
                    label: 'Prix du Bitcoin',
                    data: price,
                    borderColor: 'blue',
                    fill: true,
                }]
            },

        })
    }
    catch(error) {
        console.log(error)
    }
}

getbitcoin()









// document.addEventListener('DOMContentLoaded', function() {
//     const ctx = document.getElementById('myChart').getContext('2d');

//     fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=2023-01-10&end=2024-01-10&currency=EUR')
//         .then(response => response.json())
//         .then(data => {
//             const labels = Object.keys(data.bpi);
//             const prices = Object.values(data.bpi);

//             console.log(labels);
//             console.log(prices);

//             const config = {
//                 type: 'line',
//                 data: {
//                     labels: labels,
//                     datasets: [{
//                         label: 'Bitcoin Price (EUR)',
//                         data: prices,
//                         fill: false,
//                         borderColor: 'rgb(75, 192, 192)',
//                         tension: 0.1
//                     }]
//                 },
//                 options: {
//                     scales: {
//                         x: {
//                             type: 'linear',
//                             position: 'bottom'
//                         }
//                     }
//                 }
//             };

//             new Chart(ctx, {
//                 type: 'line',
//                 data: {
//                     labels: labels,
//                     datasets: [{
//                         label: '',
//                         data: prices,
//                         fill: false,
//                         borderColor: 'rgb(75, 192, 192)',
//                         tension: 0.1
//                     }]
//             });
//         })
//         .catch(error => console.error('Error fetching data:', error));
// });
