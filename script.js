const correctPassword = "06042025"

if (sessionStorage.getItem("unlocked") === "true") {
  document.getElementById("gate").style.display = "none"
  document.getElementById("mainContent").style.display = "block"
}

function checkPassword() {
  const input = document.getElementById("passwordInput").value
  const cleaned = input.trim().toLowerCase().replace(/[^a-z0-9]/g, "")

  if (cleaned === correctPassword) {
    sessionStorage.setItem("unlocked", "true")
    document.getElementById("gate").style.display = "none"
    document.getElementById("mainContent").style.display = "block"
  } else {
    document.getElementById("errorMsg").style.display = "block"
  }
}
