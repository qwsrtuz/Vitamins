
// Плавное движение по странице после нажатия ссылки
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


// слайдер в телефон версии
 let slideIndex = 0;
   shoSlide(slideIndex);

   function shoSlide(n) {
     const slides = document.querySelectorAll('.slide-media');
     if (n < 0) {
       slideIndex = slides.length - 1;
     } else if (n >= slides.length) {
       slideIndex = 0;
     } else {
      slideIndex = n;
     }
     for (let i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
     }
     slides[slideIndex].style.display = "block";
   }
   document.getElementById('prevBtn').addEventListener('click', () => shoSlide(slideIndex - 1));
   document.getElementById('nextBtn').addEventListener('click', () => shoSlide(slideIndex + 1));

  
// открытие модального(всплывающего) окна
  document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = "block";
    document.body.style.overflow = 'hidden';
  });
  document.getElementById('openModalTwo').addEventListener('click', function() {
    document.getElementById('modal').style.display = "block";
    document.body.style.overflow = 'hidden';
  });
  document.getElementById('openModalThree').addEventListener('click', function() {
    document.getElementById('modal').style.display = "block";
    document.body.style.overflow = 'hidden';
  });
  
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = "none";
    document.body.style.overflow = 'auto';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
       document.getElementById('modal').style.display = "none";
       document.body.style.overflow = 'auto';
    }
  });
  
// слайдер на основной версии сайта
  let slidess = document.querySelectorAll('.slide-content');
  let currentSlide = 0;

  function showSlide(n) {
    slidess[currentSlide].classList.remove('active');
    currentSlide = (n + slidess.length) % slidess.length;
    slidess[currentSlide].classList.add('active');
  }

  document.getElementById('nextBtnn').addEventListener('click', function() {
    showSlide(currentSlide + 1);
  });

  document.getElementById('prevBtnn').addEventListener('click', function() {
    showSlide(currentSlide - 1);
  });

  showSlide(currentSlide);