let navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-link");

function removeSelectedClass() {
  navLinks.forEach((link) => {
    link.classList.remove("nav-link--selected");
  });
}

navList.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-link")) {
    removeSelectedClass();
    e.target.classList.toggle("nav-link--selected");
  }
});