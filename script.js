const PASSWORD = "nirvana2";
const ACCESS_MS = 60 * 1000; // 1 dakika

function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

function checkPassword() {
  const input = document.getElementById("passwordInput").value.trim();

  if (input === PASSWORD) {
    const expireTime = Date.now() + ACCESS_MS;
    localStorage.setItem("expireTime", expireTime);
    grantAccess();
  } else {
    document.getElementById("error").innerText = "Yanlış şifre";
  }
}

function grantAccess() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("protectedContent").style.display = "block";
}

/* SAYFA AÇILINCA KONTROL */
function checkAccess() {
  const expireTime = localStorage.getItem("expireTime");
  if (!expireTime) return;

  if (Date.now() < expireTime) {
    grantAccess();

    // ⏳ süre dolunca OTOMATİK AT
    setTimeout(() => {
      localStorage.removeItem("expireTime");
      location.reload();
    }, expireTime - Date.now());

  } else {
    localStorage.removeItem("expireTime");
  }
}

checkAccess();
