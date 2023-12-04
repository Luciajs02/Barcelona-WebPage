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



const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('hovered');
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('hovered');
  });
});
