const targetDate = new Date('10/14/2024 6:00 PM')
const SHOP_URL = 'https://elsantogato.shop/products'

let SECOND = 1000
let MINUTE = SECOND * 60
let HOUR = MINUTE * 60
let DAY = HOUR * 24
let interval

const $ = (elem) => document.querySelector(elem)

showRemaining()

function showRemaining() {
  const now = new Date()
  const distance = targetDate - now

  if (distance < 0) {
    clearInterval(interval);
    window.location.href = SHOP_URL
    return
  }

  const days = formatTime(distance / DAY)
  const hours = formatTime((distance % DAY) / HOUR)
  const minutes = formatTime((distance % HOUR) / MINUTE)
  const seconds = formatTime((distance % MINUTE) / SECOND)

  $('#days').innerText = days
  $('#hours').innerText = hours
  $('#minutes').innerText = minutes
  $('#seconds').innerText = seconds
}

interval = setInterval(showRemaining, 1000)

function formatTime(time) {
  return Math.floor(time).toString().padStart(2, "0")
}
