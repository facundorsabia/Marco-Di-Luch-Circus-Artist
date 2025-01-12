(function ($) {
    "use strict";

    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    /*MODAL*/
  // Selecciona el modal y la "X" para cerrarlo
  const modal = document.getElementById("videoModal");
  const closeBtn = document.getElementsByClassName("close")[0];

  /* Muestra el modal cuando la página carga*/
    if (!modal) return;
    modal.style.display = "block";

    //Stop Video reproduction
    const stopVideoModal = () => {
      const videoContainer = document.getElementById('videoModal');
      const iframe = videoContainer.querySelector('iframe');
      iframe.remove();
    }


  // Cierra el modal cuando se hace clic en la "X"
  if (closeBtn){
    closeBtn.onclick = function() {
      stopVideoModal();
      if (!modal) return;
      modal.style.display = "none";
    }
  }

  // Cierra el modal si el usuario hace clic fuera de él
  window.onclick = function(event) {
    stopVideoModal();
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }

  /*DaylyMotion Handler*/
// Seleccionar todos los iframes que tienen el atributo data-src
const iframes = document.querySelectorAll('iframe[data-src]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const iframe = entry.target;

    if (entry.isIntersecting) {
      // Asignar el valor de data-src a src para cargar el video
      if (!iframe.src) {
        iframe.src = iframe.getAttribute('data-src');
      }
    } else {
      // Eliminar el src para detener la reproducción cuando salga de la vista
      iframe.removeAttribute('src');
    }
  });
}, { threshold: 0.5 });

// Observar cada iframe
iframes.forEach(iframe => observer.observe(iframe));

    // Initiate the wowjs
    new WOW().init();

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

  //

//Close nav menu on mobile when clicking items:
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarCollapse = document.getElementById('navbarCollapse');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Añadir evento de clic a cada enlace de navegación
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Verificar si el menú está abierto y cerrarlo
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

// Si el menú está abierto, al hacer clic fuera también se cierra
navbarToggle.addEventListener('click', function() {
    if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
    }
});

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }

    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Youtube carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: false,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });

    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
})(jQuery);

//gallery
var quadimages = document.querySelectorAll("#quad figure");
for(i=0; i<quadimages.length; i++) {
  quadimages[i].addEventListener('click', function(){ this.classList.toggle("expanded"); quad.classList.toggle("full") }); 
}

//Working experience mostrar al hacer click en boton

function mostrar(){
    document.getElementById('experience').style.display = 'block';
    }

let displayCV = document.getElementById("displayCV");

displayCV.addEventListener("click", mostrar);
