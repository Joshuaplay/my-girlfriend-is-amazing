function getDaysSince(dateString) {
  const lastSeen = new Date(dateString)
  const now = new Date()
  const msPerDay = 1000 * 60 * 60 * 24
  return Math.floor((now - lastSeen) / msPerDay)
}

function updateDisplay() {
  let lastSeenDate = localStorage.getItem('lastSeenDate')

  if (!lastSeenDate) {
    lastSeenDate = new Date().toISOString()
    localStorage.setItem('lastSeenDate', lastSeenDate)
  }

  const days = getDaysSince(lastSeenDate)
  document.getElementById('dayCount').textContent = days
  document.getElementById('dayLabel').textContent = days === 1 ? 'day' : 'days'
}

function resetLastSeen() {
  const confirmed = confirm('Mark today as the last time you hung out?')
  if (confirmed) {
    localStorage.setItem('lastSeenDate', new Date().toISOString())
    updateDisplay()
  }
}

updateDisplay()
