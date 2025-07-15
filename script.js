document.addEventListener("DOMContentLoaded", () => {
  const yearButtons = document.querySelectorAll(".year-btn");
  const bioText = document.getElementById("bioText");

  const bios = {
    0: "",
    1: "",
  };

  const updateBio = (year) => {
    bioText.textContent = bios[year] || bios[0];
    yearButtons.forEach((btn) => {
      btn.classList.remove("selected");
      if (btn.getAttribute("data-year") === year) {
        btn.classList.add("selected");
      }
    });
  };

  yearButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedYear = btn.getAttribute("data-year");
      updateBio(selectedYear);
    });
  });

  updateBio("0");
});
