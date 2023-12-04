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

document.addEventListener('DOMContentLoaded', function() {
    const seeMoreBtn = document.getElementById('see-more-btn-nature');
    const seeLessBtn = document.getElementById('see-less-btn-nature');
    const additionalCards = document.getElementById('additional-cards-nature');

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

document.addEventListener('DOMContentLoaded', function() {
    const seeMoreBtn = document.getElementById('see-more-btn-atr');
    const seeLessBtn = document.getElementById('see-less-btn-atr');
    const additionalCards = document.getElementById('additional-cards-atr');

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

function showCardsOnScroll() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.popular-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = 1; 
            }, index * 300); 
          });
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.6 }); 
  
    const sections = document.querySelectorAll('.popular'); 
    sections.forEach((section) => {
      observer.observe(section);
    });
  }
  
window.addEventListener('load', showCardsOnScroll);
  


