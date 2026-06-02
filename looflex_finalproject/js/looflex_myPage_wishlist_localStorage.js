// wishlist.js
const STORAGE_KEY = 'wishlist';

// 찜 목록 가져오기
export function getWishlist() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// 찜 목록 저장
function setWishlist(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

// 찜 추가
export function addToWishlist(movie) {
  const wishlist = getWishlist();

  // 중복 방지
  if (wishlist.some(item => item.id === movie.id)) return;

  wishlist.push({
    id: movie.id,
    title: movie.title,
    poster: movie.poster
  });

  setWishlist(wishlist);
}

// 찜 삭제
export function removeFromWishlist(id) {
  const wishlist = getWishlist().filter(item => item.id !== id);
  setWishlist(wishlist);
}

// 찜 여부 확인
export function isWishlisted(id) {
  return getWishlist().some(item => item.id === id);
}