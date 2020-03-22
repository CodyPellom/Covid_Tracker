const xlabels = [];
const confirmed_cases_data = [];
const confirmed_deaths_data = [];
const confirmed_recovered_data = [];
const confirmed_total_cases = [];

const confirmed_cases_global_total = [];
const xlabels2 = [];

// confirmedTotal = () => {
//     let sum = confirmed_cases_data.reduce(function(a, b){
//         return a + b;
//     }, 0);
//     document.getElementById('USTotalCases').textContent = sum;
// }
// setTimeout(confirmedTotal,2000);
// console.log('total calc: ' + setTimeout(confirmedTotal, 2000))
getData = async () => {
    // This is the CDC one const url = 'https://data.cdc.gov/resource/x8jf-txib';
    const endpoint = 'https://covid-193.p.rapidapi.com/statistics';
    const api_key = '670089e770msh0115a9ed4830df5p18ed36jsn7606ed08bd3e';
    let getData = await fetch(endpoint, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": api_key
        }
    });
    let json = await getData.json();
    console.log(json.response[0]);


    for (var c in json.response) {
        xlabels.push(json.response[c].country);
        confirmed_cases_data.push(json.response[c].cases.active);
        confirmed_recovered_data.push(json.response[c].cases.recovered);
        confirmed_deaths_data.push(json.response[c].deaths.total);
        confirmed_total_cases.push(json.response[c].cases.total);
    }
}
getData();
console.log(confirmed_cases_data);
console.log(confirmed_recovered_data);

getGraph = async () => {
const ctx = document.getElementById('chart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: xlabels,
        datasets: [{
            label: 'Worldwide Confirmed Cases', //Label of the graph itself
            data: confirmed_cases_data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
           
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
           
            ],
            borderWidth: 1
        },
        {
            
                label: 'Total Cases by Country', //Label of the graph itself
                data: confirmed_total_cases,
                backgroundColor: 
             
                    'rgb(181, 57, 248)',
                borderColor: 
                    'black',
                borderWidth: 2
            
        },
        {
            label: 'Worldwide Confirmed Recoveries', //Label of the graph itself
            data: confirmed_recovered_data,
            backgroundColor: 
         
                'rgb(0, 209, 31)',
            borderColor: 
                'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
        {
            label: 'Worldwide Confirmed Deaths', //Label of the graph itself
            data: confirmed_cases_data,
            backgroundColor: 
         
                'red',
            borderColor: 
                'black',
            borderWidth: 2
        }
    ]},
    
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}

/* Chart.js  Confirmed Cases Area ends */


setTimeout(getGraph, 2000);