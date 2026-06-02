const storedUser = localStorage.getItem('test123456');
const userObj = JSON.parse(storedUser);
const userId = userObj.id;

const profileName = document.querySelector(".profile-name");

profileName.innerText = `${userId}님, 안녕하세요! 😉`


const datas = async (movieId) => {
    const storedMovies = document.querySelector(".stored-movies");

    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?append_to_response=credits,videos,images,watch/providers&language=ko-KR`, TMDB_CONFIG.options);
        const res = await response.json();

        const backdropPath = res.images?.backdrops?.[0]?.file_path;

        const imageUrl = backdropPath 
            ? `${TMDB_CONFIG.posterUrl}w500${backdropPath}`
            : `${TMDB_CONFIG.posterUrl}w500${res.backdrop_path}`;

        const movieTemplate = `
        <div class="movies">
            <img src="${imageUrl}" alt="${res.title || '영화 이미지'}" onclick="details(${res.id})">
            <span>${res.title}</span>
        </div>
        `;

        storedMovies.insertAdjacentHTML('beforeend', movieTemplate);

    } catch (error) {
        console.error("데이터를 불러오는 중 에러 발생:", error);
    }
}

const storedMovies = localStorage.getItem('watchRecords');
const moviesObj = JSON.parse(storedMovies);
const allIds = Object.values(moviesObj)
  .flat()
  .map(movie => datas(movie.id)); 


document.querySelector(".buy-movies").addEventListener('click', () => {
    const storedMovies = document.querySelector(".stored-movies");

    storedMovies.classList.toggle("show");
})