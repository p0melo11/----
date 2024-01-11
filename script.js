let theme = document.getElementById('theme');
let body = document.body;
let form = document.getElementById('feedback-form');

theme.addEventListener('click', function() {
    body.classList.toggle('theme-light');
    body.classList.toggle('theme-dark');
    form.classList.toggle('theme-light');
    form.classList.toggle('theme-dark');
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function () {
    var scrollButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

var splide = new Splide( '.splide', {
    perPage: 3,
    focus  : 0,
    omitEnd: true,
  } );
  
  splide.mount();