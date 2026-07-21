function completeGoal(card) {
  const confirmed = confirm('Complete goal?')
  if (confirmed) {
    card.classList.add('completed')
    const goalName = card.querySelector('.goal-text').textContent
    const completed = JSON.parse(localStorage.getItem('completedGoals')) || []
    if (!completed.includes(goalName)) {
      completed.push(goalName)
      localStorage.setItem('completedGoals', JSON.stringify(completed))
    }
  }
}

function restoreCompletedGoals() {
  const completed = JSON.parse(localStorage.getItem('completedGoals')) || []
  const cards = document.querySelectorAll('.goal-card')
  cards.forEach((card) => {
    const goalName = card.querySelector('.goal-text').textContent
    if (completed.includes(goalName)) {
      card.classList.add('completed')
    }
  })
}

restoreCompletedGoals()
