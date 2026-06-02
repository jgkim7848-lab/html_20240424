import { getWatchRecords } from './looflex_myPage_history_localStorage.js';

// DOM
const daysEl = document.getElementById('days');
const titleEl = document.getElementById('monthTitle');
const recordListEl = document.querySelector('.record-list');
const totalPriceEl = document.querySelector('.total-price');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// State
let current = new Date();

function formatDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function renderCalendar() {
  const year = current.getFullYear();
  const month = current.getMonth();

  titleEl.textContent = `${year}.${month + 1}`;
  daysEl.innerHTML = '';

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const records = getWatchRecords();

  for (let i = 0; i < firstDay; i++) {
    daysEl.appendChild(document.createElement('span'));
  }

  for (let day = 1; day <= lastDate; day++) {
    const cell = document.createElement('span');
    const dateStr = formatDate(new Date(year, month, day));
    cell.textContent = day;

    if (records[dateStr]) {
      cell.classList.add('has-movie');

      const currentDay = records[dateStr];
      const posterPath = currentDay[0].poster;

      if (posterPath) {
        const img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/w200${posterPath}`;
        img.classList.add('calendar-poster');
        cell.appendChild(img);
      }
    }

    daysEl.appendChild(cell);
  }

  renderSidePanel();
}

function renderSidePanel() {
  const records = getWatchRecords();
  const year = current.getFullYear();
  const month = current.getMonth() + 1;

  recordListEl.innerHTML = '';
  let total = 0;

  Object.keys(records).forEach(date => {
    const [y, m] = date.split('-').map(Number);
    if (y === year && m === month) {
      records[date].forEach(movie => {
        total += movie.price;
        const li = document.createElement('li');
        li.innerHTML = `${movie.title} (${movie.price}₩)`;
        recordListEl.appendChild(li);
      });
    }
  });

  totalPriceEl.textContent = `₩ ${total.toLocaleString()}`;
}

prevBtn.onclick = () => {
  current.setMonth(current.getMonth() - 1);
  renderCalendar();
};

nextBtn.onclick = () => {
  current.setMonth(current.getMonth() + 1);
  renderCalendar();
};

renderCalendar();