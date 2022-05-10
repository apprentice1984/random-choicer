const words = document.getElementById('words')
const badges = document.getElementById('badges')

let spans = []

words.addEventListener('input', (e) => {
  spans = e.target.value
    .split(',')
    .map((s) => s.trim())
    .filter((i) => i !== '')
    .map(
      (i) => `<span class="badge rounded-pill text-white p-3 item">${i}</span>`
    )

  badges.innerHTML = spans.join('')
})

words.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const allBadges = document.querySelectorAll('.badge')
    let id = setInterval(() => {
      allBadges[getRandomInt(0, allBadges.length - 1)].classList.add('clicked')
      setTimeout(() => {
        allBadges[getRandomInt(0, allBadges.length - 1)].classList.remove(
          'clicked'
        )
      }, 50)
    }, 100)
    setTimeout(() => {
      clearInterval(id)
      allBadges[getRandomInt(0, allBadges.length - 1)].style.cssText =
        'animation: spanAnim forwards;'
    }, 3000)
    event.target.value = ''
    event.target.focus()
  }
})

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
