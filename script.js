
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
// setTimeout(() => {
//     document.getElementById("hero").style.opacity = "1";
// }, 500);
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    // If the click is outside the dropdown button and the dropdown itself
    if (
      !event.target.matches(".dropbtn") &&
      !event.target.closest(".dropdown")
    ) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }

    // If a link inside the dropdown is clicked, close the dropdown
    if (event.target.matches(".dropdown-content a")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        openDropdown.classList.remove("show");
      }
    }
  };
  let sections = document.querySelectorAll("section");
window.onscroll = () => {
  sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 500;
      let height = sec.offsetHeight;
      if (top >= offset && top < offset + height) {
          sec.classList.add("show-animate");
      }
      
  })
};
