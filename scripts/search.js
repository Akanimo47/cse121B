baseURL = 'https://api.genius.com/search'
client_access_token= "AE9bFgpJMbTf8Ds6OSoXAJ75hvPelgVCvXVUU2NjiJGwn2kkQFlb2btGSWH0KjLN"

const search_term = document.querySelector('#keyword');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    query = search_term.value;
    let url = `${baseURL}?q=${query}&access_token=${client_access_token}`;
    findSong(url);
});

async function findSong(URL) {
    let response = await fetch(URL)
    if (response.ok) {
        let data = await response.json();
      console.log(data);
        displayResults(data);
    }
}

const displayResults = (data) => {
    let main = document.querySelector('main');
    main.innerHTML = '';
    let aside = document.createElement('aside');
    aside.textContent = `Songs by ${query}:`;
    main.append(aside);
    
    data.response.hits.forEach(hit => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');

        let fullTitle = hit.result.title_with_featured;
        h3.textContent = fullTitle;
        article.appendChild(h3);
        main.append(article);
    });

}