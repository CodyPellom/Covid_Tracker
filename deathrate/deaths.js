const xlabels2 = [];
const confirmed_deaths_data = [];
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
getGraph = () => {
const ctxTwo = document.getElementById('chartTwo').getContext('2d');

const chartTwo = new Chart(ctxTwo, {
    type: 'bar',
    data: {
        labels: xlabels2,
        datasets: [{
            label: 'Covid-19 Deaths in United States', //Label of the graph itself
            data: confirmed_deaths_data,
            backgroundColor: 
                'rgba(230, 0, 0, 1)'
            ,
            borderColor: 
                'rgba(0, 0, 0, 1)'                
            ,
            borderWidth: 1.5
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
}
setTimeout(getGraph, 2000);