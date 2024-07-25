const darkModeToggle = document.getElementById("dark-mode-toggle-checkbox");

// !chackbox deta store hoclocal storege"
let hii = localStorage.getItem("darkModeToggle");

if (hii == "true") {
  darkModeToggle.checked = true;
}
// ! all class selecat function
let classal = (classas) => {
  return document.querySelectorAll(classas);
};
darkModeToggle.addEventListener("change", function () {
  let buttons = classal(".light"),
    nav_bar = classal(".dark_box"),
    opt_dark = classal(".option_b"),
    box_shadow = classal(".box_shadow"),
    shadow_darkmode = classal(".shadow_darkmode");
  // Iterate over each button and add the 'dark-mode' class

  buttons.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.add("dark-mode");
      btn.classList.remove("no_dark");
    } else {
      btn.classList.remove("dark-mode");
      btn.classList.add("no_dark");
    }
  });
  nav_bar.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.remove("nav_light");
      btn.classList.add("nav_dark");
    } else {
      btn.classList.remove("nav_dark");
      btn.classList.add("nav_light");
    }
  });
  opt_dark.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.remove("option_h");
      btn.classList.add("dark_option_h");
    } else {
      btn.classList.remove("dark_option_h");
      btn.classList.add("option_h");
    }
  });
  box_shadow.forEach(function (btn) {
    if (darkModeToggle.checked) {
      // btn.classList.remove("box_no_dark_shadow");
      btn.classList.add("box_dark_shadow");
    } else {
      btn.classList.add("box_no_dark_shadow");
      btn.classList.remove("box_dark_shadow");
    }
  });
  shadow_darkmode.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.add("darkmode_box_shadow");
    } else {
      btn.classList.remove("darkmode_box_shadow");
      btn.classList.add("box_shadow_light");
    }
  });
  fanc();
});

let fanc = () => {
  if (darkModeToggle.checked) {
    localStorage.setItem("darkModeToggle", "true");
  } else {
    localStorage.setItem("darkModeToggle", "false");
  }
};
{
  let buttons = classal(".light");
  let nav_bar = classal(".dark_box");
  let opt_dark = classal(".option_b");
  let box_shadow = classal(".box_shadow");
  let shadow_darkmode = classal(".shadow_darkmode");

  buttons.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.add("dark-mode");
      btn.classList.remove("no_dark");
    } else {
      btn.classList.remove("dark-mode");
      btn.classList.add("no_dark");
    }
  });
  nav_bar.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.remove("nav_light");
      btn.classList.add("nav_dark");
    } else {
      btn.classList.remove("nav_dark");
      btn.classList.add("nav_light");
    }
  });
  opt_dark.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.remove("option_h");
      btn.classList.add("dark_option_h");
    } else {
      btn.classList.remove("dark_option_h");
      btn.classList.add("option_h");
    }
  });
  box_shadow.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.remove("box_no_dark_shadow");
      btn.classList.add("box_dark_shadow");
    } else {
      btn.classList.add("box_no_dark_shadow");
      btn.classList.remove("box_dark_shadow");
    }
  });
  shadow_darkmode.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.add("darkmode_box_shadow");
    } else {
      btn.classList.remove("darkmode_box_shadow");
      btn.classList.add("box_shadow_light");
    }
  });
}
