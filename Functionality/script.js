// E-commerce Functionality

// Banner Owl Carousel
$(document).ready(() => {
$('#owl_carousel .owl-carousel').owlCarousel({
    items: 1,
    dots:true,
    loop: true,
    autoplay:true,
    autoplayTimeout:8000,
    stagePadding: 0
});
});



// scroll to to button
const btnScrollToTop = document.querySelector("#btnScrollToTop");
    btnScrollToTop.addEventListener("click", () => {
        window.scrollTo(0, 0);
});