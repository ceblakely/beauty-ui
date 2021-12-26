const reviews = {
  0: (vogue = {
    imagePath: "/images/HomeImages/vogue.png",
    quote:
      "In an age of online access and unending choice, customer engagement is something that Fenty has gotten right.",
  }),
  1: (elle = {
    imagePath: "/images/HomeImages/elle.png",
    quote:
      "Revolutionary for its time, harnessing a certain come-as-you-are acceptance.",
  }),
  2: (vanityFair = {
    imagePath: "/images/HomeImages/vanityfair1.png",
    quote:
      "Allows all people to look like the best version of themselves, not an aspirational version of someone else.",
  }),
};
let reviewImg = document.getElementById("reviewImg");
let currentIndex = 0;

document.querySelectorAll(".arrow").forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (arrow.id == "forwardArrow") {
      currentIndex++;
      if (currentIndex > 2) {
        currentIndex = 0;
      }
    } else if (arrow.id == "backArrow") {
      if (currentIndex == 0) {
        currentIndex = 2;
      } else {
        currentIndex--;
      }
    }
    reviewImg.src = reviews[currentIndex].imagePath;
    document.getElementById("quoteP").innerHTML = reviews[currentIndex].quote;
    e.preventDefault();
  });
});

document.getElementById("menuIcon").addEventListener("click", (e) => {
  const desktopNav = document.getElementById("desktopNav");
  const mobileNav = document.getElementById("mobileNav");
  desktopNav.classList.add("hide");
  mobileNav.classList.remove("hide");
  mobileNav.classList.add("mobileNavActive");
  e.preventDefault();
});
window.addEventListener("load", () => {
  reviewImg.src = reviews[0].imagePath;
  reviewImg.classList.add("activeImg");
  document.getElementById("quoteP").innerHTML = reviews[0].quote;
});
