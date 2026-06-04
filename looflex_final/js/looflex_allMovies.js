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

// COMMON

const inventory = document.querySelector(".inventory");
        const div = document.querySelector(".detail");

        const paginations = (page) => {
            inventory.innerHTML = '';
            let inventoryInnerHTML = '';

            const buttons = document.querySelectorAll(".pagination button");

            buttons.forEach(btn => {
                if (parseInt(btn.innerText) === page) {
                    btn.style.backgroundColor = '#0088FD';
                    btn.style.fontWeight = '700';
                } else {
                    btn.style.backgroundColor = ''; 
                    btn.style.color = '';
                    btn.style.fontWeight = '400';
                }
            });

            fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=${page}&region=KR&sort_by=popularity.desc`, TMDB_CONFIG.options)
                .then(res => res.json())
                .then(res => res.results)
                .then(res => {
                    if(page === 1){
                        const top5movies = res.slice(0, 5);
                        const currentMovies = res.slice(5);
    
                        inventoryInnerHTML += `<div class="top5">지금 사람들이 가장 많이 보는 영화 5선!</div>`
    
                        top5movies.forEach((r, i) => {
                            inventoryInnerHTML += `
                                    <div class="inv-elements top5">
                                        <img src = '${TMDB_CONFIG.posterUrl}w500/${r.poster_path}' onclick="details(${r.id})">
                                        <div class="ranking">${i+1}</div>
                                    </div>
                            `
                        })
    
                        currentMovies.forEach((r) => {
                            inventoryInnerHTML += `
                                    <div class="inv-elements">
                                        <img src = '${TMDB_CONFIG.posterUrl}w500/${r.poster_path}' onclick="details(${r.id})">
                                    </div>
                            `
    
                            inventory.innerHTML = inventoryInnerHTML;
                        })
                    } else {
                        res.forEach((r) => {
                            inventoryInnerHTML += `
                                    <div class="inv-elements">
                                        <img src = '${TMDB_CONFIG.posterUrl}w500/${r.poster_path}' onclick="details(${r.id})">
                                    </div>
                            `
    
                            inventory.innerHTML = inventoryInnerHTML;
                        })
                    }

                })
                .catch(err => console.error(err));
            }

            paginations(1); // 기본 1페이지 로드