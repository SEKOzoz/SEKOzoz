function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}
function checkPassword() {
  const correctPassword = "nirvana"; // şifre BURASI
  const input = document.getElementById("passwordInput").value;

  if (input === correctPassword) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("protectedContent").style.display = "block";
  } else {
    document.getElementById("error").innerText = "Yanlış şifre";
  }
}
