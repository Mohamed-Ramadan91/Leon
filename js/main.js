const menuBtn = document.querySelector(".material-symbols-outlined.menu");
const navUl = document.querySelector("header nav ul");
const navLi = document.querySelectorAll("header nav ul li");
const closeBtn = document.querySelector(".material-symbols-outlined.close");
menuBtn.onclick = (event) => {
  navUl.classList.toggle("active");
  closeBtn.classList.toggle("active");
};
closeBtn.addEventListener("click", (event) => {
  navUl.classList.toggle("active");
  closeBtn.classList.toggle("active");
});
navLi.forEach((li) => {
  li.onclick = function (event) {
    navUl.classList.toggle("active");
    closeBtn.classList.toggle("active");
  };
});
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const developer = document.querySelector("footer .developer");
const portfolioCard = document.querySelector(".portfolio-card");
const closeeBtn = document.querySelector(".portfolio-card .fa-xmark");
closeeBtn.onclick = (event) => {
  portfolioCard.classList.toggle("active");
};
developer.onclick = (event) => {
  portfolioCard.classList.toggle("active");
};
