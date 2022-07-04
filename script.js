  const dropdownOpen = document.querySelector(".dropdown-open");

  Array.from(document.querySelectorAll(".nav-item")).forEach((item) => {
    item.onmouseover = () => {
      dropdownOpen.style.opacity = 1;
      dropdownOpen.style.visibility = "visible";
      dropdownOpen.style.width = getComputedStyle(item.lastElementChild).width;
      dropdownOpen.style.height = getComputedStyle(item.lastElementChild).height;

      dropdownOpen.style.top = `${item.lastElementChild.offsetTop}px`;
      dropdownOpen.style.left = `${item.lastElementChild.offsetLeft}px`;
    };

    item.onmouseleave = () => {
      dropdownOpen.style.opacity = 0;
      dropdownOpen.style.visibility = "hidden";
    };
  });


