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


// Add to Cart
$('.select-ui').change(function(){
    let value=parseInt($(this).parent('div').parent('div').parent('div').children('.col-md-2').children('h5').children('span').text());
    let total= parseInt($(this).val()) * value;
    console.log($(this).parent('div').parent('div').parent('div').children('.col-md-2').children('h5').children('span').text());
    $(this).parent('div').parent('div').parent('div').children('.col-md-2').children('h5').children('span').text(total.toString());
    let totalvalue=0;
    $('.select-ui').each(function(){
      totalvalue+=parseInt($(this).parent('div').parent('div').parent('div').children('.col-md-2').children('h5').children('span').text());
    });
    $('#total').text(totalvalue.toString());
    totalvalue+=100;
    $('#totaltopay').text(totalvalue.toString());
  });