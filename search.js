document.addEventListener('DOMContentLoaded', function() {
    const headerSearchBox = document.getElementById('headerSearchBox');
    const headerSearchInput = document.getElementById('headerSearchInput');
    const filterButton = document.getElementById('filterButton');
    const filterOptions = document.getElementById('filterOptions');

    let isFilterActive = false;

    headerSearchBox.addEventListener('click', () => {
        headerSearchBox.classList.toggle('active');
        headerSearchInput.focus();
    });

    filterButton.addEventListener('click', (event) => {
        event.stopPropagation();

        isFilterActive = !isFilterActive;
        filterOptions.classList.toggle('active', isFilterActive);

        if (isFilterActive) {
            filterButton.style.backgroundColor = '#fff';
            filterButton.innerHTML = '<i class="fas fa-filter" style="color: #00c8b3;"></i>';
        } else {
            filterButton.style.backgroundColor = '#333';
            filterButton.innerHTML = '<i class="fas fa-filter" style="color: #999;"></i>';
        }
    });

    document.addEventListener('click', (event) => {
        if (!headerSearchBox.contains(event.target) && event.target !== headerSearchBox) {
            headerSearchBox.classList.remove('active');
        }
    });

    const movieListContainer = document.querySelector('.movie-list-container');
    const pageRangeDisplay = document.querySelector('.page-range');
    const prevPageButton = document.querySelector('.pagination-button.prev-page');
    const nextPageButton = document.querySelector('.pagination-button.next-page');

    const moviesPerPage = 100;
    let currentPageNumber = 1;

    const TMDB_API_KEY = '197ee8a497663d5deccdac7f2df9d852';
    const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

    function fetchMoviesAndDisplay() {
        const apiUrl = `https://vidsrc.xyz/movies/latest/page-${currentPageNumber}.json`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                fetchMoviePostersFromTMDB(data.result)
                    .then(moviesWithPosters => {
                        displayMovies(moviesWithPosters);
                        updatePaginationDisplay();
                    });
            })
            .catch(error => {
                console.error('Error fetching movies from vidsrc:', error);
                movieListContainer.innerHTML = '<p>Failed to load movies.</p>';
            });
    }

    async function fetchMoviePostersFromTMDB(movies) {
        const moviesWithPosters = [];

        for (const movie of movies) {
            if (movie.tmdb_id) {
                const tmdbApiUrl = `https://api.themoviedb.org/3/movie/${movie.tmdb_id}?api_key=${TMDB_API_KEY}`;

                try {
                    const response = await fetch(tmdbApiUrl);
                    const tmdbData = await response.json();

                    if (tmdbData.poster_path) {
                        movie.poster = TMDB_IMAGE_BASE_URL + tmdbData.poster_path;
                    } else {
                        movie.poster = null;
                        console.warn(`No poster found for TMDB ID: ${movie.tmdb_id}`);
                    }
                } catch (error) {
                    console.error(`Error fetching poster for TMDB ID ${movie.tmdb_id}:`, error);
                    movie.poster = null;
                }
            } else {
                movie.poster = null;
                console.warn(`No TMDB ID available for movie: ${movie.title}`);
            }
            moviesWithPosters.push(movie);
        }
        return moviesWithPosters;
    }

    function displayMovies(movies) {
        movieListContainer.innerHTML = '';
    
        if (!movies || movies.length === 0) {
            movieListContainer.innerHTML = '<p>No movies found.</p>';
            return;
        }
    
        movies.forEach(movie => {
            const movieLink = document.createElement('a');
            movieLink.href = `https://vidsrc.xyz/embed/movie?imdb=tt${movie.imdb_id}`;
            movieLink.target = '_blank';
            movieLink.classList.add('movie-item-link'); 
            movieLink.style.textDecoration = 'none'; 
    
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');
    
            const posterImg = document.createElement('img');
            posterImg.src = movie.poster || 'placeholder_image_url.jpg';
            posterImg.alt = movie.title;
            posterImg.classList.add('movie-poster');
    
            const movieInfo = document.createElement('div');
            movieInfo.classList.add('movie-info');
    
            const titleElem = document.createElement('h3');
            titleElem.classList.add('movie-title');
            titleElem.textContent = movie.title;
    
            const detailsElem = document.createElement('div');
            detailsElem.classList.add('movie-details');
            const yearElem = document.createElement('span');
            yearElem.classList.add('movie-year');
            yearElem.textContent = movie.year;
    
            detailsElem.appendChild(yearElem);
            movieInfo.appendChild(titleElem);
            movieInfo.appendChild(detailsElem);
    
            movieItem.appendChild(posterImg);
            movieItem.appendChild(movieInfo);
    
            if (movie.rating) {
                const ratingBadge = document.createElement('div');
                ratingBadge.classList.add('movie-rating-badge');
                const starIcon = document.createElement('i');
                starIcon.classList.add('fas', 'fa-star');
                const ratingValue = document.createElement('span');
                ratingValue.textContent = movie.rating;
                ratingBadge.appendChild(starIcon);
                ratingBadge.appendChild(ratingValue);
                movieItem.appendChild(ratingBadge);
            }
    
            movieLink.appendChild(movieItem);
            movieListContainer.appendChild(movieLink);
        });
    }

    function updatePaginationDisplay() {
        pageRangeDisplay.textContent = `Page ${currentPageNumber}`;
        prevPageButton.disabled = currentPageNumber <= 1;
        nextPageButton.disabled = false;
    }

    nextPageButton.addEventListener('click', () => {
        currentPageNumber++;
        fetchMoviesAndDisplay();
    });

    prevPageButton.addEventListener('click', () => {
        currentPageNumber = Math.max(1, currentPageNumber - 1);
        fetchMoviesAndDisplay();
    });

    fetchMoviesAndDisplay();
});