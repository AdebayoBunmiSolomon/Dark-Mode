var toggleIcon = document.querySelector("#toggle-icon");
var btnToggle = document.querySelector("#btn-toggle");
var txtDarkMode = document.querySelector("#txt-dark-mode");
var divMain = document.querySelector("#div-main");

var isToggle = true;
var length;
var element = document.body;

btnToggle.addEventListener("click", function () {
  var isToggleText = isToggle;

  //Changes it to dark mode
  if (isToggleText === true) {
    element.classList.remove("purple-mode");
    element.classList.add("dark-mode");
    txtDarkMode.classList.remove("txt-dark-mode");
    txtDarkMode.classList.add("not-txt-dark-mode");
    txtDarkMode.textContent = "Dark Mode";
    isToggle = false;
  }
  //Changes it to purple mode
  else if (isToggle === false) {
    element.classList.remove("dark-mode");
    element.classList.add("purple-mode");
    txtDarkMode.classList.remove("not-txt-dark-mode");
    txtDarkMode.classList.add("txt-dark-mode");
    txtDarkMode.textContent = "Default Mode";
    isToggle = true;
  }
});
