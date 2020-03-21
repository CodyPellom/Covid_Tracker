let docUl = document.getElementById('docUl');

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


    var ul = document.createElement('ul');
    document.getElementById('list').appendChild(ul);
    for (var c in json.data.covid19Stats) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = 
        "State: " + json.data.covid19Stats[c].province + 
        " " + "Confirmed Cases: " + json.data.covid19Stats[c].confirmed +
        " " + "Deaths: " + json.data.covid19Stats[c].deaths
        
    }



}
getData();