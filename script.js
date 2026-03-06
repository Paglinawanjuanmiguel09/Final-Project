/* ===== loadingscreen ===== */
window.addEventListener("load", function() {
  const loader = document.getElementById("loader");
  if(loader){
    loader.style.opacity = 1;
    const fadeOut = setInterval(() => {
      loader.style.opacity -= 0.05;
      if(loader.style.opacity <= 0){
        clearInterval(fadeOut);
        loader.style.display = "none";
      }
    }, 20);
  }
});

/* ===== backtotop bttn ===== */
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if(window.scrollY > 300){
    backToTop.style.display = "block";
  }else{
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({top:0, behavior:"smooth"});
});

/* ===== navhighlight ===== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");


function updateNavHighlight() {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if(window.scrollY >= sectionTop){
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if(link.getAttribute("href") === "#" + current || link.href === window.location.href){
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateNavHighlight);
window.addEventListener("load", updateNavHighlight); // Also run on page load

/* ===== darkmode bttn ===== */
const themeToggle = document.createElement("button");
themeToggle.id = "themeToggle";
themeToggle.textContent = "Dark Mode";
document.body.appendChild(themeToggle);

if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "Light Mode";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if(document.body.classList.contains("dark-mode")){
    themeToggle.textContent = "Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "Dark Mode";
    localStorage.setItem("theme", "light");
  }
});
