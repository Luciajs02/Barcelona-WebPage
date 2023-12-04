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

function checkSections() {
    const sections = document.querySelectorAll('.popular');

    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight * 0.75) {
            section.classList.add('visible');
        }
    });
}


function animateSections() {
    const visibleSections = document.querySelectorAll('.visible');

    visibleSections.forEach(section => {
        section.classList.add('animate');
    });
}


window.addEventListener('scroll', function() {
    checkSections();
    animateSections();
});


window.addEventListener('DOMContentLoaded', function() {
    checkSections();
    animateSections();
});
