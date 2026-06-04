const favoriteMovies = new Map();

// GENRES

const genres = document.querySelector(".genres");
const genresModal = document.querySelector(".genres-drop");
let isLoaded = false;

genres.addEventListener("mouseenter", () => {
    let ModalHTML = '';

    if (!isLoaded) { fetch('https://api.themoviedb.org/3/genre/movie/list?language=ko', TMDB_CONFIG.options)
        .then(res => res.json())
        .then(res => res.genres)
        .then(re => {
                const filteredGenres = re.filter(genre => genre.id !== 36 && genre.id !== 99);

                filteredGenres.forEach((r) => {
                ModalHTML += `
                <div onclick="location.href='../html/looflex_genres.html?genres=${r.id}'">
                    ${r.name}
                </div>
                `
            })

            genresModal.innerHTML = ModalHTML;
            isLoaded = true;
        })
        .catch(err => console.error(err));
}})
// POPULARITY MOVIES => slide img

        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&region=KR&sort_by=popularity.desc', TMDB_CONFIG.options)
    .then(res => res.json())
    .then(res => res.results)
    .then(async (movies) => { // async 추가
        const slideBoxes = document.querySelectorAll('.slide-img');
        
        for (let index = 0; index < slideBoxes.length; index++) {
            const box = slideBoxes[index];
            const movie = movies[index + 1]; 

            if (movie) {
                try {
                    const detailRes = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?append_to_response=images&language=ko-KR&include_image_language=ko,en,null`, TMDB_CONFIG.options);
                    const movieData = await detailRes.json();

                    const logos = movieData.images?.logos || [];
                    const logoPath = logos.length > 0 ? logos[0].file_path : null;

                    const backdropPath = movie.backdrop_path;

                    box.style.backgroundImage = `url(${TMDB_CONFIG.posterUrl}original${backdropPath})`;
                    box.style.backgroundSize = 'cover';
                    box.style.backgroundRepeat = 'no-repeat';
                    box.style.backgroundPosition = 'center';
                    box.style.backgroundColor = '#1c1d24';
                    
                    box.onclick = () => {
                        details(movie.id);
                    };

                    let titleHTML = `<div class="slide-title">${movie.title}</div>`;
                    if (logoPath) {
                        titleHTML = `<img src="${TMDB_CONFIG.posterUrl}original${logoPath}" alt="${movie.title} 로고" class="slide-logo" style="max-width: 200px; height: auto; display: block; margin-bottom: 10px;">`;
                    }

                    box.innerHTML = `
                        <div class="slide-inner-text">
                            ${titleHTML}
                            <div class="slide-original-title">${movie.original_title}</div>
                        </div>
                    `;
                } catch (error) {
                    console.error("영화 상세 데이터를 가져오는 중 오류 발생:", error);
                }
            }
        }
    });
    

// 구매 / 대여 / 찜 => map에 추가하기

const plusfavorite = (movieId, title) => {
    favoriteMovies.set(movieId, title);
    console.log(favoriteMovies);
}



// NOW PLAYING => movies

const movies = document.querySelector(".movies");

const nowPlaying = async () => {

    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1&region=KR', TMDB_CONFIG.options);
        const res = await response.json();
        const topFiveMovies = res.results.slice(1, 6);
    
        let moviesHTML = '';
    
        topFiveMovies.forEach((movie) => {
            moviesHTML += `
                <div class="movie">
                    <div class = "movie-poster"
                    style = "background-image: url(${TMDB_CONFIG.posterUrl}w500${movie.poster_path})"
                    onclick = "details(${movie.id})"
                    ></div>
                </div>
            `
        });
    
        movies.innerHTML = moviesHTML;

    } catch (error) {
        console.error(error);
    }
}

nowPlaying();

// SLIDE

window.onload = function() {
    const slideWrapper = document.querySelector(".slide-wrapper");
    const slideImg = document.querySelectorAll(".slide-img");
    const btnLeft = document.querySelector(".button.left");
    const btnRight = document.querySelector(".button.right");

    let currentIndex = 0;
    const slideCount = slideImg.length;

    function goToSlide(index) {
        currentIndex = index;

        if (currentIndex >= slideCount) currentIndex = 0;
        if (currentIndex < 0) currentIndex = slideCount - 1;

        const slideWidth = slideImg[0].clientWidth;
        slideWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        slideWrapper.style.transition = "0.5s";
    }


    btnRight.addEventListener("click", () => {
        goToSlide(currentIndex + 1);
    });

    btnLeft.addEventListener("click", () => {
        goToSlide(currentIndex - 1);
    });

    setInterval(() => {
        goToSlide(currentIndex + 1);
    }, 4000);
}

const filmography = async() => {
    const filmoMovies = document.querySelector(".filmo-movies");
    let filmoHTML = '';

    const TOM_HOLLAND_ID = 1136406;
    const MARVEL_STUDIOS_ID = 420;

    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_cast=${TOM_HOLLAND_ID}&without_companies=${MARVEL_STUDIOS_ID}&language=ko-KR&sort_by=popularity.desc`, TMDB_CONFIG.options)
    const datas = await response.json();
    const data = datas.results;

    data.forEach((movie) => {
        filmoHTML += `
            <div class="movie">
                    <div class = "movie-poster"
                    style = "background-image: url(${TMDB_CONFIG.posterUrl}w500${movie.poster_path})"
                    onclick = "details(${movie.id})"
                    ></div>
            </div>
        `
    })

    filmoMovies.innerHTML = filmoHTML;

    const filmoContainer = document.querySelector('.filmo-container');

    document.querySelector('.left-button').addEventListener('click', () => {
        filmoContainer.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });

    document.querySelector('.right-button').addEventListener('click', () => {
        filmoContainer.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });


    console.log(data);
}

filmography();