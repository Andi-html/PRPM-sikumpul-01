window.onscroll = function () {
  stickyHeader();
};

var header = document.getElementById("main-navbar");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const dropdownNav = document.querySelector(".dropdown-nav");
const hamburger = document.querySelector("#hamburger-menu");
document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    dropdownNav.classList.toggle("active");
  });
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !dropdownNav.contains(e.target)) {
    dropdownNav.classList.remove("active");
  }
});

// rekomendasi pencarian
const searchIcon = document.getElementById("search");
const searchInput = document.getElementById("search-input");
const searchSuggestions = document.getElementById("search-suggestions");
searchIcon.addEventListener("click", () => {
  // Toggle input field and suggestions display
  if (searchInput.style.display === "none") {
    searchInput.style.display = "block";
    searchIcon.style.display = "none"; //sembunyikan search icon
    searchInput.focus();
    searchSuggestions.style.display = "block";
  } else {
    searchInput.style.display = "none";
    searchIcon.style.display = "block"; // munculkan search icon again
    searchSuggestions.style.display = "none";
  }
});
searchInput.addEventListener("input", () => {
  const filter = searchInput.value.toLowerCase();
  const suggestions = searchSuggestions.querySelectorAll("li");
  suggestions.forEach((suggestion) => {
    if (suggestion.textContent.toLowerCase().includes(filter)) {
      suggestion.style.display = "";
    } else {
      suggestion.style.display = "none";
    }
  });
});
// Close suggestions if user clicks outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar-logo")) {
    searchInput.style.display = "none";
    searchIcon.style.display = "block"; // Show the search icon when clicking outside
    searchSuggestions.style.display = "none";
  }
});

document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", () => {
    // Toggle class active untuk item yang diklik
    const faqItem = item.parentElement;
    faqItem.classList.toggle("active");
  });
});

// js video

const video = document.querySelector(".video-hover");

video.addEventListener("mouseenter", () => {
  video.play();
});

video.addEventListener("mouseleave", () => {
  video.pause();
  video.currentTime = 0; // Mengatur ulang ke awal saat berhenti
});
