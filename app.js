const toggleBtn = document.querySelector(".toggle-btn");
const navbarLinks = document.querySelector(".navbar-links");
const cta = document.querySelector(".cta");
const arrow1 = document.querySelector(".up-down1");
const arrow2 = document.querySelector(".up-down2");
const arrow3 = document.querySelector(".up-down3");
const dropLink1 = document.querySelector(".drop-link1");
const dropLink2 = document.querySelector(".drop-link2");
const dropLink3 = document.querySelector(".drop-link3");

toggleBtn.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    cta.classList.toggle("active");
})

dropLink1.addEventListener("mouseenter", () => {
    arrow1.innerHTML = "<i class='fas fa-chevron-up'></i>";
})

dropLink1.addEventListener("mouseleave", () => {
    arrow1.innerHTML = "<i class='fas fa-chevron-down'></i>";
})

dropLink2.addEventListener("mouseenter", () => {
    arrow2.innerHTML = "<i class='fas fa-chevron-up'></i>";
})

dropLink2.addEventListener("mouseleave", () => {
    arrow2.innerHTML = "<i class='fas fa-chevron-down'></i>";
})

dropLink3.addEventListener("mouseenter", () => {
    arrow3.innerHTML = "<i class='fas fa-chevron-up'></i>";
})

dropLink3.addEventListener("mouseleave", () => {
    arrow3.innerHTML = "<i class='fas fa-chevron-down'></i>";
})
