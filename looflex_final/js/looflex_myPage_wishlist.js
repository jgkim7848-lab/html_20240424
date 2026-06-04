import { getWishlist, removeFromWishlist } from './looflex_myPage_wishlist_localStorage.js';

const pageEl = document.querySelector('.wishlist-page');
const gridEl = document.querySelector('.wishlist-grid');

function renderWishlist() {
  const wishlist = getWishlist();
  gridEl.innerHTML = '';

  if (wishlist.length === 0) {
    // wishlist가 없을때 '찜한 영화가 없습니다. 담고 돌아와 😑' 라는 문구 띄우기 위해 추가
    pageEl.classList.add('empty');
    return;
  }

  pageEl.classList.remove('empty');

  wishlist.forEach(movie => {
    const li = document.createElement('li');
    li.className = 'wishlist-item';

    li.innerHTML = `
      <div class="poster-wrap">
        <img src="${movie.poster}" alt="${movie.title}" onclick="details(${movie.id})"/>
        <button class="remove-btn" data-id="${movie.id}">✕</button>
      </div>
      <div class="info">
        <div class="title">${movie.title}</div>
      </div>
    `;

    gridEl.appendChild(li);
  });
}

// 삭제 버튼 이벤트
gridEl.addEventListener('click', e => {
  if (e.target.classList.contains('remove-btn')) {
    const id = Number(e.target.dataset.id);
    removeFromWishlist(id);
    renderWishlist();
  }
});

renderWishlist();