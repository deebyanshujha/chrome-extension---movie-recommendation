async function getMovieData(title){
    const apiKey = "30026be1";
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        const matchesElem = document.querySelector("#movie");
        if (matchesElem) {
            if (data.Response === "True") {
                matchesElem.innerHTML = `
                    <li>
                        <strong>${data.Title}</strong> (${data.Year})<br>
                        <img src="${data.Poster}" alt="Poster" height="100"><br>
                        ${data.Plot}
                    </li>
                `;
            } else {
                matchesElem.innerHTML = `<li>Movie not found</li>`;
            }
        }
    } catch (e) {
        console.error(e);
    }
}

// ...existing code...

const movies = [
    "Inception",
    "The Matrix",
    "Interstellar",
    "The Godfather",
    "Pulp Fiction",
    "Forrest Gump",
    "The Dark Knight",
    "Fight Club",
    "The Shawshank Redemption",
    "Parasite",
    "Gladiator",
    "The Prestige",
    "Whiplash",
    "Spirited Away",
    "The Lion King",
    "Goodfellas",
    "The Departed",
    "The Silence of the Lambs",
    "Saving Private Ryan",
    "Schindler's List",
    "Se7en",
    "The Green Mile",
    "Avengers: Endgame",
    "Avengers: Infinity War",
    "Back to the Future",
    "Jurassic Park",
    "Titanic",
    "The Lord of the Rings: The Fellowship of the Ring",
    "The Lord of the Rings: The Two Towers",
    "The Lord of the Rings: The Return of the King",
    "Star Wars: Episode IV - A New Hope",
    "Star Wars: Episode V - The Empire Strikes Back",
    "Star Wars: Episode VI - Return of the Jedi",
    "The Social Network",
    "The Wolf of Wall Street",
    "Django Unchained",
    "The Truman Show",
    "Memento",
    "Oldboy",
    "The Pianist",
    "Amélie",
    "Coco",
    "Up",
    "WALL·E",
    "Toy Story",
    "Inside Out",
    "La La Land",
    "Her",
    "Blade Runner 2049",
    "Mad Max: Fury Road"
];

const randomMovie = movies[Math.floor(Math.random() * movies.length)];
getMovieData(randomMovie);

    