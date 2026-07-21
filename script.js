const heartsContainer = document.getElementById("hearts")
const heartEmojis = ["💜", "💕", "❤️", "💖", "💗"]

for (let i = 0; i < 25; i++) {
  const heart = document.createElement("span")
  heart.className = "heart"
  heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)]
  heart.style.left = Math.random() * 100 + "%"
  heart.style.fontSize = (16 + Math.random() * 20) + "px"
  heart.style.animationDuration = (6 + Math.random() * 8) + "s"
  heart.style.animationDelay = Math.random() * 8 + "s"
  heartsContainer.appendChild(heart)
}

const correctPassword = "06042025"

function showMenu() {
  document.getElementById("gate").style.display = "none"
  document.getElementById("mainContent").style.display = "block"
  document.body.classList.remove("centered")
}

if (sessionStorage.getItem("unlocked") === "true") {
  showMenu()
}

function checkPassword() {
  const input = document.getElementById("passwordInput").value
  const cleaned = input.trim().toLowerCase().replace(/[^a-z0-9]/g, "")

  if (cleaned === correctPassword) {
    sessionStorage.setItem("unlocked", "true")
    showMenu()
  } else {
    document.getElementById("errorMsg").style.display = "block"
  }
}
