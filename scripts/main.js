let doc = document;

$('.header-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  lazyLoad: 'ondemand',
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

let outImage = '',
    imagesContainer = doc.querySelector('.site-main-images-container');

fetch('scripts/new_images.json').then(function(readJson) {

    return readJson.json();

  }).then(function(data){
    for (var key in data) {
      outImage += '<div class="image-block">';
        outImage += '<img src="'+data[key].image+'" alt="'+data[key].alt+'">';
        outImage += '<div class="autor">';
          outImage += '<span class="autor-name">Autor: </span>';
          outImage += '<a href="'+data[key].autor_link+'" class="autor-link">'+data[key].autor_name+'</a>';
        outImage += '</div>';
        outImage += '<a class="download-btn" href="'+data[key].download+'" download></a>';
      outImage += '</div>';
    }
    imagesContainer.innerHTML += outImage;


}).catch(function() {
    console.log('JSON не найден');
});


