const targetDate = new Date('10/14/2024 12:00 AM')

let SECOND = 1000
let MINUTE = SECOND * 60
let HOUR = MINUTE * 60
let DAY = HOUR * 24
let interval

const $ = (elem) => document.querySelector(elem)

function showRemaining() {
      const now = new Date()
      const distance = targetDate - now

      if (distance < 0) {
          clearInterval(interval);
          document.getElementById('countdown').innerHTML = 'EXPIRED!'
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
