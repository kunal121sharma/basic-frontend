const BASE_URL = 'https://api.tvmaze.com/search/shows?q=';
const form = document.querySelector('form');
const resultSection = document.querySelector('#result');


// http://api.openweathermap.org/data/2.5/forecast/daily?q=delhi&appid=dasvhgjhmsdj67823

const removeImage = (parent) => {
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}

const getMovies = (searchText) => {
    fetch(`${BASE_URL}${searchText}`)
        .then((res)=>
        {
          return res.json();

        })
        .then((data) => {
            
            const movies = data;
            console.log(data);
            for (let movie of movies) {
                if (movie.show.url != null) {
                    const image = document.createElement('img');
                    image.setAttribute('src', movie.show.image.medium);
                    resultSection.append(image);
                }  
            }
        })
        .catch((err) => {
            console.log(err);
        })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchText = form.children[0].value;
    console.log("hiii");
    // removeImage(resultSection);
    getMovies(searchText);
    form.children[0].value = "";
});







