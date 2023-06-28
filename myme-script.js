const headBtn = document.querySelector(".headBtn");

window.addEventListener("scroll", () => {
    window.scrollY > 120 ? headBtn.classList.add("active") : headBtn.classList.remove("active");
    window.scrollY > 150 ? headBtn.style.top = "20px" : headBtn.style.top = "-50px";
})