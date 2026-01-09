function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-220px";
  } else {
    sidebar.style.left = "0px";
  }
}
const password = "inutero"; // BURAYI DEĞİŞTİR

window.onload = function () {
  const input = prompt("Giriş kelimesi:");

  if (input === password) {
    document.getElementById("protectedContent").style.display = "block";
  } else {
    document.body.innerHTML = "<h2 style='color:white;text-align:center;margin-top:40vh;'>Erişim reddedildi</h2>";
  }
};
