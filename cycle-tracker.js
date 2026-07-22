function saveCycleInfo() {
  const date = document.getElementById('lastPeriodDate').value
  const cycleLength = document.getElementById('cycleLength').value

  if (!date) {
    alert('Please pick a date first.')
    return
  }

  localStorage.setItem('lastPeriodDate', date)
  localStorage.setItem('cycleLength', cycleLength)
  updateCycleEstimate()
}

function updateCycleEstimate() {
  const date = localStorage.getItem('lastPeriodDate')
  const cycleLength = parseInt(localStorage.getItem('cycleLength')) || 28

  if (!date) return

  document.getElementById('lastPeriodDate').value = date
  document.getElementById('cycleLength').value = cycleLength

  const lastPeriod = new Date(date)
  const nextPeriod = new Date(lastPeriod)
  nextPeriod.setDate(nextPeriod.getDate() + cycleLength)

  const now = new Date()
  const msPerDay = 1000 * 60 * 60 * 24
  const daysUntil = Math.ceil((nextPeriod - now) / msPerDay)

  if (daysUntil >= 0) {
    document.getElementById('cycleEstimate').textContent =
      'Estimated next period in ' +
      daysUntil +
      ' days (around ' +
      nextPeriod.toDateString() +
      ')'
  } else {
    document.getElementById('cycleEstimate').textContent =
      'Estimated period date has passed — update the date above when it starts again.'
  }
}

let budget = parseFloat(localStorage.getItem('monthlyBudget')) || 0

function updateBudgetDisplay() {
  document.getElementById('budgetTotal').textContent = budget.toFixed(2)
  document.getElementById('budgetInput').value = budget || ''
  const spent = parseFloat(localStorage.getItem('snackSpent')) || 0
  document.getElementById('budgetRemaining').textContent = (
    budget - spent
  ).toFixed(2)
}

function saveBudget() {
  const input = document.getElementById('budgetInput').value
  budget = parseFloat(input) || 0
  localStorage.setItem('monthlyBudget', budget)
  localStorage.setItem('snackSpent', 0)

  const checkboxes = document.querySelectorAll(
    ".snack-item input[type='checkbox']",
  )
  checkboxes.forEach((cb) => (cb.checked = false))

  updateBudgetDisplay()
}

function toggleSnack(checkbox, price) {
  let spent = parseFloat(localStorage.getItem('snackSpent')) || 0

  if (checkbox.checked) {
    spent += price
  } else {
    spent -= price
  }

  localStorage.setItem('snackSpent', spent)
  updateBudgetDisplay()
}

function saveSuggestion() {
  const input = document.getElementById('suggestionInput')
  const suggestion = input.value.trim()

  if (suggestion === '') return

  const suggestions = JSON.parse(localStorage.getItem('snackSuggestions')) || []
  suggestions.push(suggestion)
  localStorage.setItem('snackSuggestions', JSON.stringify(suggestions))

  alert('Suggestion saved: ' + suggestion)
  input.value = ''
}

updateCycleEstimate()
updateBudgetDisplay()
