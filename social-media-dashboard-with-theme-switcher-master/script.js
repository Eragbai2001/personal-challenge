/* const toggleElement = document.querySelector(".toggle");

toggleElement.addEventListener("click", () => {
  toggleElement.classList.toggle("active");
});
 */
const toggleElement = document.querySelector(".toggle");

// Select all elements with the .d-flex, .xl, and .p classes
const dFlexElements = document.querySelectorAll(".d-flex, .xl, .p");

toggleElement.addEventListener("click", () => {
  // Toggle the .active class on the .toggle element itself
  toggleElement.classList.toggle("active");

  // Loop through all selected elements and toggle the .active class on each
  dFlexElements.forEach((element) => {
    element.classList.toggle("active");
  });
});
