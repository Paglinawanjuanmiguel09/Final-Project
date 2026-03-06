/* ===== Smooth Scroll ===== */
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute("href");

    if (targetId.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  });
});


/* ===== Character Counter (Application Page) ===== */
const textarea = document.querySelector("textarea");

if (textarea) {
  const counter = document.createElement("p");
  counter.style.fontSize = "14px";
  counter.style.color = "#666";
  counter.textContent = "0 characters";
  textarea.after(counter);

  textarea.addEventListener("input", () => {
    counter.textContent = textarea.value.length + " characters";
  });
}


/* ===== Form Confirmation ===== */
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function(e) {
    const confirmSubmit = confirm("Are you sure you want to submit your application?");
    
    if (!confirmSubmit) {
      e.preventDefault();
    }
  });
}
