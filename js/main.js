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

document.getElementById('read-more-btn').addEventListener('click', function() {
    document.querySelector('.additional-content').style.display = 'block';
    document.getElementById('close-btn').style.display = 'block';
    this.style.display = 'none';
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.querySelector('.additional-content').style.display = 'none';
    document.getElementById('read-more-btn').style.display = 'block';
    this.style.display = 'none';
});


document.addEventListener("DOMContentLoaded", function () {
    const botonLinks = document.getElementById("botonlinks");
    const linksList = document.getElementById("links-list");
  
    botonLinks.addEventListener("click", function () {
      linksList.classList.toggle("hidden");
    });
  });
  

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);

function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})

window.onresize = function(event) {
    reloadSlider();
};




