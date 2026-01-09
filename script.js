const ACCESS_DAYS = 1 / 1440; // 1 dakika
const PASSWORD = "nirvana";

function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

function checkPassword() {
  const input = document.getElementById("passwordInput").value.trim();

  if (input === PASSWORD) {
    const now = Date.now();
    localStorage.setItem("accessTime", now);
    grantAccess();
  } else {
    document.getElementById("error").innerText = "Yanlış şifre";
  }
}

function grantAccess() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("protectedContent").style.display = "block";
}

function checkAccess() {
  const savedTime = localStorage.getItem("accessTime");
  if (!savedTime) return;

  const now = Date.now();
  const diffDays = (now - savedTime) / (1000 * 60 * 60 * 24);

  if (diffDays < ACCESS_DAYS) {
    grantAccess();
  } else {
    localStorage.removeItem("accessTime"); // süresi doldu
  }
}

checkAccess();
