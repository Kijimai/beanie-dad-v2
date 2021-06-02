const logoContainer = document.getElementById('logo-container')
const logoImg = document.querySelector('.logo-reserve')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const carouselContainer = document.getElementById('carousel-container')
const carouselBoxes = document.querySelectorAll('.carousel-box')

// brand logo animator
const imgStaticUrl = 'resources/images/logostatic.png'
const imgGifUrl = 'resources/images/Logogif.gif'
logoContainer.addEventListener('mouseenter', function() {
  logoImg.src = imgGifUrl
})

logoContainer.addEventListener('mouseleave', function() {
  logoImg.src = imgStaticUrl
})
