const toggleElement = document.querySelector(".toggle");

// Updated to select all elements with the specified classes, adding .card-body
const dFlexElements = document.querySelectorAll(
  ".d-flex, .xl, .p, .card, .card-title, .card-body"
);

toggleElement.addEventListener("click", () => {
  // Toggle the .active class on the .toggle element itself
  toggleElement.classList.toggle("active");

  // Loop through all selected elements and toggle the .active class on each
  dFlexElements.forEach((element) => {
    element.classList.toggle("active");
  });
});
