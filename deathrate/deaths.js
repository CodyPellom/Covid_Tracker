
getData = async () => {
    // This is the CDC one const url = 'https://data.cdc.gov/resource/x8jf-txib';
    const endpoint = 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=US';
    const api_key = '6884fe95b0mshf46323a4f9b57dfp19d8d9jsn94a323334b50';
    let getData = await fetch(endpoint, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": api_key
        }
    });
    let json = await getData.json();
    console.log(json);
    let last_updated = json.data.lastChecked;
    console.log(last_updated);
    let georgia_data = json.data.covid19Stats[8];
    let ga_confirmed = georgia_data.confirmed;
    let ga_deaths = georgia_data.deaths;
    console.log("Overall GA Confirmed Cases: " + ga_confirmed);


    for (var c in json.data.covid19Stats) {
        xlabels2.push(json.data.covid19Stats[c].province);
        confirmed_deaths_data.push(json.data.covid19Stats[c].deaths)
    }



}
getData();


/* Chart.js  Confirmed Cases Area starts */


/* Chart.js  Confirmed Deaths Area starts */
const ctxTwo = document.getElementById('chartTwo').getContext('2d');
const xlabels2 = [];
const confirmed_deaths_data = [];
const chartTwo = new Chart(ctxTwo, {
    type: 'bar',
    data: {
        labels: xlabels2,
        datasets: [{
            label: 'Covid-19 Deaths in United States', //Label of the graph itself
            data: confirmed_deaths_data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
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
/* Chart.js  Confirmed Cases Area ends */