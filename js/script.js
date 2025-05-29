const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
  menuOpenButton.click();
});

document.getElementById("currentYear").textContent = new Date().getFullYear();

window.onload = function () {
  window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", () => {
  if (
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("index.html")
  ) {
    const typeText = (element, text, delay = 200) => {
      let i = 0;
      const interval = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i === text.length) clearInterval(interval);
      }, delay);
    };

    const title = document.querySelector(".title");
    const titleText = "JESSICA";

    title.textContent = "";
    typeText(title, titleText);
  }
});

window.onload = function () {
  setTimeout(function () {
    document.getElementById("body").style.display = "";
  }, 200);
};
