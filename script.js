document.addEventListener("DOMContentLoaded", () => {
  const yearButtons = document.querySelectorAll(".year-btn");
  const bioText = document.getElementById("bioText");

  const bios = {
    0: "Aspiring developer documenting Year 0: building, learning, and launching.",
    1: "Now in Year 1: shipping, interviewing, and building a real footprint in tech.",
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
