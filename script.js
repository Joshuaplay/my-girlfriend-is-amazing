jsconst correctPassword = "6thapril2025";

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const cleaned = input.trim().toLowerCase().replace(/\s+/g, "");

  if (cleaned === correctPassword) {
    document.getElementById("gate").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    document.getElementById("errorMsg").style.display = "block";
  }
}