getNews = async() => {
    const url = 'http://newsapi.org/v2/everything?' +
          'q=Coronavirus&' +
          'from=2020-03-22&' +
          'sortBy=popularity&' +
          'apiKey=91a92fa90ffc49d0a803daafb52aac91';
let getData = await fetch(url);
let json = await getData.json();
console.log(json);
for( let c in json.articles ){

    let img = document.createElement('img');
    let p = document.createElement('p');
    let a = document.createElement('a');
    let br = document.createElement('br');
    
    ul.appendChild(img);
    ul.appendChild(br);
    ul.appendChild(br);

    ul.appendChild(a);


    ul.appendChild(p);

    img.src = json.articles[c].urlToImage;
    a.href = json.articles[c].url;
    a.innerText = json.articles[c].title;
    p.innerText = json.articles[c].author;
     
    
    
}
}
getNews();

var ul = document.createElement('ul');
document.getElementById('news_area').appendChild(ul);