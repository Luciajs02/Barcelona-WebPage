window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  var navDropdowns = document.querySelectorAll('.header .navigation ul li ul');
  
  if (window.scrollY > 0) {
      header.classList.add('scrolled');
      navDropdowns.forEach(function(dropdown) {
          dropdown.classList.add('scrolled-background');
      });
  } else {
      header.classList.remove('scrolled');
      navDropdowns.forEach(function(dropdown) {
          dropdown.classList.remove('scrolled-background');
      });
  }
});

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var backgroundImage = document.querySelector('.background-image');
  backgroundImage.style.transform = 'translateY(-' + scrollPosition * 0.1 + 'px)';

  var footer = document.getElementById('footer');
  var windowHeight = window.innerHeight;
  var fullHeight = document.body.scrollHeight; 

  if (scrollPosition + windowHeight >= fullHeight) {
      footer.style.display = 'block';
  } else {
      footer.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const seeMoreBtn = document.getElementById('see-more-btn');
  const seeLessBtn = document.getElementById('see-less-btn');
  const additionalCards = document.getElementById('additional-cards');

  seeMoreBtn.addEventListener('click', function() {
      additionalCards.style.display = 'block';
      seeMoreBtn.style.display = 'none';
      seeLessBtn.style.display = 'block';
  });

  seeLessBtn.addEventListener('click', function() {
      additionalCards.style.display = 'none';
      seeMoreBtn.style.display = 'block';
      seeLessBtn.style.display = 'none';
  });
});

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August', 
  'September', 'October', 'November', 'December'
];

const calendarDays = document.getElementById('calendarDays');
const monthYear = document.getElementById('monthYear');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

prevBtn.addEventListener('click', () => {
  currentMonth -= 1;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear -= 1;
  }
  renderCalendar(currentYear, currentMonth);
});

nextBtn.addEventListener('click', () => {
  currentMonth += 1;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear += 1;
  }
  renderCalendar(currentYear, currentMonth);
});

function renderCalendar(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();

  monthYear.textContent = `${months[month]} ${year}`;

  let daysMarkup = '';

  for (let i = 0; i < weekdays.length; i++) {
    daysMarkup += `<span>${weekdays[i]}</span>`;
  }

  for (let i = 0; i < firstDay.getDay(); i++) {
    daysMarkup += `<div></div>`;
  }

  for (let i = 1; i <= daysInMonth; i++) {
    if (i === currentDate.getDate() && year === currentDate.getFullYear() && month === currentDate.getMonth()) {
      daysMarkup += `<div class="today">${i}</div>`;
    } else {
      daysMarkup += `<div>${i}</div>`;
    }
  }

  calendarDays.innerHTML = daysMarkup;
}

renderCalendar(currentYear, currentMonth);

