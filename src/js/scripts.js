/* eslint-disable no-undef */
;(function () {
  // Set local elements
  const doc = document.documentElement
  const body = document.querySelector('body')
  const button = document.querySelector('.Hero .Button')
  const buttonMore = document.querySelector('.Button--more')
  const videoPlayerBack = document.querySelector('.Video-backdrop')
  const hero = document.querySelector('.Hero')

  // Remove no-js class
  doc.classList.remove('no-js')
  doc.classList.add('js')

  // Detect when images have been loaded
  imagesLoaded('.Hero-bg', { background: true }, function () {
    body.classList.add('is-loaded')

    // Reveal animations
    setTimeout(function () {
      // eslint-disable-next-line no-undef
      const sr = (window.sr = ScrollReveal())
      const slide = {
        duration: 1000,
        distance: '30px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        origin: 'top',
        interval: 100,
        delay: 200
      }

      sr.reveal('.Hero', slide)
      sr.reveal('.Hero-image', { ...slide, delay: 800, scale: 1.2 })
      sr.reveal('.Hero-message', { ...slide, delay: 1000 })
      sr.reveal('.Hero-ticket', {
        ...slide,
        delay: 1200,
        duration: 2000
      })
      sr.reveal('.SocialMobile', { ...slide, delay: 1400 })
      sr.reveal('.Video', { ...slide, delay: 1500 })
      sr.reveal('.What', slide)
      sr.reveal('.Mail', slide)
      sr.reveal('.Support', slide)
      sr.reveal('.Footer', { ...slide, origin: 'bottom' })
      sr.reveal('.Follow', { ...slide, origin: 'bottom' })
      sr.reveal('.Socialbar', { ...slide, delay: 2000 })

      const gridNodeList = document.querySelectorAll('.flex .item')
      sr.reveal(gridNodeList, { ...slide, origin: 'bottom' })
    }, 200)
  })

  // Little mouseover effect
  button.addEventListener('mouseenter', () => {
    hero.classList.add('is-over')
  })
  button.addEventListener('mouseleave', () => {
    hero.classList.remove('is-over')
  })

  // Replace video player
  videoPlayerBack.addEventListener('click', () => {
    var options = {
      id: 63318482,
      width: 800,
      height: 458,
      title: false,
      byline: false,
      portrait: false
    }

    const player = new Vimeo.Player('video', options)
    setTimeout(() => player.play(), 100)
  })

  // Handle scroll position
  window.onscroll = function () {
    var d = document.documentElement
    var offset = d.scrollTop
    var targetHeight = hero.offsetHeight

    if (offset >= targetHeight) {
      body.classList.add('is-scrollHero')
    } else {
      body.classList.remove('is-scrollHero')
    }
  }

  // More description
  buttonMore.addEventListener('click', function () {
    body.classList.toggle('is-moreExpanded')
  })
})()
