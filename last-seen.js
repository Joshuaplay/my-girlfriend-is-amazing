function updateDisplay() {
  let lastSeenDate = localStorage.getItem('lastSeenDate')

  if (!lastSeenDate) {
    lastSeenDate = new Date().toISOString()
    localStorage.setItem('lastSeenDate', lastSeenDate)
  }

  const lastSeen = new Date(lastSeenDate)
  const now = new Date()
  let totalSeconds = Math.floor((now - lastSeen) / 1000)

  const days = Math.floor(totalSeconds / 86400)
  totalSeconds -= days * 86400

  const hours = Math.floor(totalSeconds / 3600)
  totalSeconds -= hours * 3600

  const minutes = Math.floor(totalSeconds / 60)
  totalSeconds -= minutes * 60

  const seconds = totalSeconds

  document.getElementById('days').textContent = String(days).padStart(2, '0')
  document.getElementById('hours').textContent = String(hours).padStart(2, '0')
  document.getElementById('minutes').textContent = String(minutes).padStart(
    2,
    '0',
  )
  document.getElementById('seconds').textContent = String(seconds).padStart(
    2,
    '0',
  )
}

function resetLastSeen() {
  const confirmed = confirm('Mark today as the last time you hung out?')
  if (confirmed) {
    localStorage.setItem('lastSeenDate', new Date().toISOString())
    updateDisplay()
  }
}

updateDisplay()
setInterval(updateDisplay, 1000)
