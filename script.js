function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-220px";
  } else {
    sidebar.style.left = "0px";
  }
}
const password = "inutero";
window.onload = function () {
  const input = prompt("Giriş kelimesi:");

  if (input === password) {
    document.getElementById("protectedContent").style.display = "block";
  }} else {
  alert("Yanlış kelime");
  location.reload();
}

};
