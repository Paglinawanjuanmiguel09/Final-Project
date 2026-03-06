window.addEventListener("load", function() { 
  const loader = document.getElementById("loader"); 
  if(loader){ 
    loader.style.display = "none"; 
  } 

  /* ===== darkmode ===== */ 
  const themeToggle = document.createElement("button"); 
  themeToggle.id = "themeToggle"; 
  themeToggle.textContent = "Dark Mode"; 
  document.body.appendChild(themeToggle); 

  themeToggle.addEventListener("click", () => { 
    document.body.classList.toggle("dark-mode"); 
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode"; 
  });
});

/* ===== backtotop ===== */ 
const backToTop = document.getElementById("backToTop"); 

window.addEventListener("scroll", () => { 
  if(window.scrollY > 300){ 
    backToTop.style.display = "block"; 
  } else { 
    backToTop.style.display = "none"; 
  } 
});

backToTop.addEventListener("click", () => { 
  window.scrollTo({top:0, behavior:"smooth"}); 
});

/* ===== navbar hlight===== */ 
const sections = document.querySelectorAll("section"); 
const navLinks = document.querySelectorAll("nav ul li a"); 

window.addEventListener("scroll", () => { 
  let current = ""; 
  sections.forEach(section => { 
    const sectionTop = section.offsetTop - 60; 
    if(scrollY >= sectionTop){ 
      current = section.getAttribute("id"); 
    } 
  }); 

  navLinks.forEach(link => { 
    link.classList.remove("active"); 
    if(link.getAttribute("href") === "#" + current){ 
      link.classList.add("active"); 
    } 
  }); 
});
