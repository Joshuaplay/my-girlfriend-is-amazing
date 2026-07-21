function completeGoal(card) {
  const goalName = card.querySelector(".goal-text").textContent
  let completed = JSON.parse(localStorage.getItem("completedGoals")) || []

  if (card.classList.contains("completed")) {
    const confirmed = confirm("Mark this goal as not done?")
    if (confirmed) {
      card.classList.remove("completed")
      completed = completed.filter(name => name !== goalName)
      localStorage.setItem("completedGoals", JSON.stringify(completed))
    }
  } else {
    const confirmed = confirm("Complete goal?")
    if (confirmed) {
      card.classList.add("completed")
      if (!completed.includes(goalName)) {
        completed.push(goalName)
        localStorage.setItem("completedGoals", JSON.stringify(completed))
      }
    }
  }
}

function restoreCompletedGoals() {
  const completed = JSON.parse(localStorage.getItem("completedGoals")) || []
  const cards = document.querySelectorAll(".goal-card")
  cards.forEach(card => {
    const goalName = card.querySelector(".goal-text").textContent
    if (completed.includes(goalName)) {
      card.classList.add("completed")
    }
  })
}

restoreCompletedGoals()
