function spawnWarnings() {
  for (let i = 0; i < 30; i++) {
    const emoji = document.createElement('span')
    emoji.className = 'warning-emoji'
    emoji.textContent = '⚠️'
    emoji.style.left = Math.random() * 100 + '%'
    emoji.style.animationDuration = 2 + Math.random() * 3 + 's'
    emoji.style.animationDelay = Math.random() * 2 + 's'
    document.body.appendChild(emoji)
    setTimeout(() => emoji.remove(), 10000)
  }
}

function togglePeriod() {
  const isOn = localStorage.getItem('onPeriod') === 'true'
  const newState = !isOn
  localStorage.setItem('onPeriod', newState)
  updatePeriodStatus()

  if (newState) {
    spawnWarnings()
  }
}

function updatePeriodStatus() {
  const isOn = localStorage.getItem('onPeriod') === 'true'
  const statusEl = document.getElementById('periodStatus')
  const buttonEl = document.getElementById('periodButton')

  if (isOn) {
    statusEl.textContent = 'Logged — take it easy 💕'
    buttonEl.textContent = '✅ Marked — Click To Undo'
    document.body.classList.add('period-mode')
  } else {
    statusEl.textContent = ''
    buttonEl.textContent = "⚠️ I'm On My Period ⚠️"
    document.body.classList.remove('period-mode')
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

updatePeriodStatus()
updateBudgetDisplay()
