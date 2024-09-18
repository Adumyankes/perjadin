
      const navbar = document.getElementById("navbar");
      const menuToggle = document.getElementById("menu-toggle");
      const mobileMenu = document.getElementById("mobile-menu");
      const themeToggle = document.getElementById("theme-toggle");
      const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
      const body = document.body;

      window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          navbar.classList.add("bg-opacity-50");
        } else {
          navbar.classList.remove("bg-opacity-50");
        }
      });

      menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });

      themeToggle.addEventListener("click", () => {
        body.classList.toggle("bg-gray-800");
        body.classList.toggle("text-white");
      });

      mobileThemeToggle.addEventListener("click", () => {
        body.classList.toggle("bg-gray-800");
        body.classList.toggle("text-white");
      });

      var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
