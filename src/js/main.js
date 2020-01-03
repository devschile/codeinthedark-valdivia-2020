/* eslint-disable no-undef */
;(function () {
  // Set local elements
  const doc = document.documentElement
  const button = document.querySelector('.Hero .Button')
  const hero = document.querySelector('.Hero')

  // Remove no-js class
  doc.classList.remove('no-js')
  doc.classList.add('js')

  // Little mouseover effect
  button.addEventListener('mouseenter', () => {
    hero.classList.add('is-over')
  })
  button.addEventListener('mouseleave', () => {
    hero.classList.remove('is-over')
  })

  // Reveal animations
  if (document.body.classList.contains('has-animations')) {
    // eslint-disable-next-line no-undef
    const sr = (window.sr = ScrollReveal())
    const slide = {
      duration: 1000,
      distance: '30px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'top',
      interval: 100,
      delay: 100
    }

    sr.reveal('.Hero', slide)
    sr.reveal('.Hero-image', { ...slide, delay: 500, scale: 1.1 })
    sr.reveal('.Hero-message', { ...slide, delay: 600 })
    sr.reveal('.Hero-ticket', {
      ...slide,
      delay: 1000,
      duration: 2000
    })
    sr.reveal('.Video Label', slide)
    sr.reveal('.Video iframe', slide)
    sr.reveal('.Footer', { ...slide, origin: 'bottom' })
    sr.reveal('.Socialbar', { ...slide, origin: 'bottom', delay: 2000 })

    const gridNodeList = document.querySelectorAll('.flex .item')
    sr.reveal(gridNodeList, { ...slide, origin: 'bottom' })
  }
})()
