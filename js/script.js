/*open and close header on smaller screens*/
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
  menuOpenButton.click();
});

document.addEventListener("click", (event) => {
  const navMenu = document.querySelector(".nav-menu");
  const isClickInsideMenu = navMenu.contains(event.target);
  const isClickOnMenuButton =
    event.target === menuOpenButton || menuOpenButton.contains(event.target);

  if (
    document.body.classList.contains("show-mobile-menu") &&
    !isClickInsideMenu &&
    !isClickOnMenuButton
  ) {
    menuOpenButton.click();
  }
});

/*automatically updates the copyright year*/
document.getElementById("currentYear").textContent = new Date().getFullYear();

/*reloads to top of page*/
window.onload = function () {
  window.scrollTo(0, 0);
};

/*typewriter effect*/
document.addEventListener("DOMContentLoaded", () => {
  if (
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("index.html")
  ) {
    const typeText = (element, text, delay = 250) => {
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

window.addEventListener("hashchange", () => {
  history.replaceState(
    null,
    "",
    window.location.pathname + window.location.search
  );
});
