function changeQuote(id) {
  let quoteP = document.getElementById("quoteP");
  if (id == "vogueImg") {
    quoteP.innerHTML =
      "In an age of online access and unending choice, customer engagement is something that Fenty has gotten right.";
  } else if (id == "elleImg") {
    quoteP.innerHTML =
      "Revolutionary for its time, harnessing a certain come-as-you-are acceptance.";
  } else {
    quoteP.innerHTML =
      "Allows all people to look like the best version of<br>themselves, not an aspirational version of someone else.";
  }
}
document.getElementById("x-out").addEventListener("click", (e) => {
  document.getElementById("banner").remove();
  e.preventDefault();
});
window.addEventListener("load", () => {
  document.getElementById("quoteP").innerHTML =
    "In an age of online access and unending choice, customer engagement is something that Fenty has gotten right.";
});
