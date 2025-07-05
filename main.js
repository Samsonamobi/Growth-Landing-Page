// FAQ ACCORDION
document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");

  faqContainer.addEventListener("click", (e) => {
    const wrapperHeader = e.target.closest(".faq-wrapper-header");

    if (!wrapperHeader) return;

    const wrapper = wrapperHeader.parentElement;
    const wrapperBody = wrapper.querySelector(".faq-wrapper-body");
    const icon = wrapperHeader.querySelector("i");

    // TOGGLE ICON
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // toggle visibility of body
    wrapperBody.classList.toggle("open");

    // close other faq opened bodies
    const otherWrappers = faqContainer.querySelectorAll(".faq-wrapper");

    otherWrappers.forEach((otherWrapper) => {
      if (otherWrapper !== wrapper) {
        const otherWrapperBody =
          otherWrapper.querySelector(".faq-wrapper-body");
        const otherIcon = otherWrapper.querySelector(".faq-wrapper-header i");

        otherWrapperBody.classList.remove("open");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});

// mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});
