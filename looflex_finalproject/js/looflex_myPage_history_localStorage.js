const KEY = 'watchRecords';

// 문자열 반환
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

// LocalStorage에서 watchRecords 가져옴
export function getWatchRecords() {
  return JSON.parse(localStorage.getItem(KEY)) || {};
}

// LocalStorage에 기록 저장
function saveWatchRecords(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function addWatchRecordToday(movie, type) {
  const records = getWatchRecords();
  const today = formatDate(new Date());

  if (!records[today]) records[today] = [];

  // 같은 날 같은 영화 중복 방지
  const exists = records[today].some(
    m => m.id === movie.id && m.type === type
  );
  if (exists) return;

  const price = type === 'rent' ? 3000 : 5500;

  records[today].push({
    id: movie.id,
    title: movie.title,
    poster: movie.poster_path,
    type,
    price,
    watchedAt: today
  });
  saveWatchRecords(records);
}