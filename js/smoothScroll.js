// плавный скролл
const nav = document.querySelector(".header__nav");
const links = nav.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener;
  "click",
    (event) => {
      event.preventDefault();
      const section = document.querySelector(link.getAttribute("href"));
      if (section) {
        // section.scrollIntoView({
        //   block: "start",
        //   behavior: "smooth",
        // });

        /* https://www.npmjs.com/package/seamless-scroll-polyfill */
        seamless.scrollIntoView(section, {
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      }
    };
});
