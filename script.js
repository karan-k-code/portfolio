const urls = "https://kitmo.onrender.com/api/v1";

// const urls = "http://127.0.0.1:4000/api/v1";

const showMore = () => {
  const moreBtn = document.querySelector("#more-info");
  //   moreBtn.style.display = moreBtn.style.display == "flex" ? "none" : "flex";

  if (moreBtn.style.display == "none") {
    moreBtn.classList.add("show_more_animation");
  } else {
    moreBtn.classList.remove("show_more_animation");
  }
};

// ! togle button
const menu_click = () => {
  const toggleBtn = document.querySelector("#togle_button");
  const moreInfo = document.querySelector("#menu_togale");

  const line_a = document.querySelector("#line_a");
  const line_b = document.querySelector("#line_b");
  const line_c = document.querySelector("#line_c");
  const line_a_2 = document.querySelector("#line_a_2");
  const line_b_2 = document.querySelector("#line_b_2");
  const line_c_2 = document.querySelector("#line_c_2");
  moreInfo.classList.toggle("show_more_animation");
  if (moreInfo.style.right == "0px") {
    moreInfo.style.right = "-220px";
    line_a.classList.remove("line_a");
    line_b.classList.remove("line_b");
    line_c.classList.remove("line_c");
    line_a_2.classList.remove("line_a");
    line_b_2.classList.remove("line_b");
    line_c_2.classList.remove("line_c");
    // moreInfo.style.display = "none";
  } else {
    moreInfo.style.right = "0px";
    line_a.classList.add("line_a");
    line_b.classList.add("line_b");
    line_c.classList.add("line_c");
    line_a_2.classList.add("line_a");
    line_b_2.classList.add("line_b");
    line_c_2.classList.add("line_c");
  }
};

// ! show more funcation p

const show_more_buttons = document.querySelectorAll(".show_more_button");

show_more_buttons.forEach((button) => {
  button.addEventListener("click", (x) => {
    const prevSibling = x.target.previousElementSibling;

    if (prevSibling.style.maxHeight == "100vh") {
      prevSibling.style.maxHeight = "300px";
      x.target.innerText = "..Show more";
    } else {
      prevSibling.style.maxHeight = "100vh";
      x.target.innerText = "Show less";
    }
  });
});

const des_show_more = () => {
  const des = document.querySelectorAll(".description_p");
  const dec = document.getElementById("dec");
  const show_more_text = document.getElementById("show_more_text");

  if (dec.style.maxHeight == "100vh") {
    dec.style.maxHeight = "300px";
    show_more_text.innerText = "..Show more";
  } else {
    dec.style.maxHeight = "100vh";
    show_more_text.innerText = "Show less";
  }
};

// ! smoth animation a tag
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ! rating
try {
  const stars = document.querySelectorAll(".stars button");
  const ratingValue = document.getElementById("rating");
  const ratingSubnit = document.getElementById("rating_subnit");

  let selectedRating = 0;

  stars.forEach((star) => {
    star.addEventListener("mouseover", () => {
      resetStars();
      // highlightStars(star.dataset.value);
    });

    star.addEventListener("click", () => {
      selectedRating = star.dataset.value;
      ratingValue.textContent = selectedRating;
      highlightStars(star.dataset.value);
    });

    star.addEventListener("mouseout", () => {
      // resetStars();
      if (selectedRating) highlightStars(selectedRating);
    });
  });

  function resetStars() {
    stars.forEach((button) => {
      button.classList.remove("active");
    });
  }

  function highlightStars(value) {
    stars.forEach((star) => {
      if (star.dataset.value == value) {
        star.classList.add("active");
      }
    });
  }
  ratingSubnit.addEventListener("click", () => {
    closeButton();
    localStorage.setItem("ratingData", "true");
  });
} catch (error) {}

const closeButton = () => {
  const rating_box = document.getElementById("rating_box");
  rating_box.style.display = "none";
};

let ratingData = JSON.parse(localStorage.getItem("ratingData"));

if (!ratingData) {
  rattimeou();
}

const rattimeou = () => {
  setTimeout(() => {
    const rating_box = document.getElementById("rating_box");
    rating_box.style.display = "flex";
  }, 5000);
};

// ! close button
const closeButton_img = () => {
  const x_img_box = document.getElementById("show_image_box");
  x_img_box.style.display = "none";
};

const image_click_show_img = (url) => {
  const x_img_box = document.getElementById("show_image_box");
  x_img_box.childNodes["1"].setAttribute("src", url);
  x_img_box.style.display = "flex";
};

const image_fs = document.querySelectorAll(".t_img");

image_fs.forEach((image) => {
  image.addEventListener("click", (e) => {
    const url = e.target.getAttribute("src");
    image_click_show_img(url);
  });
});

// scroll

let lastScrollTop = 0;

const navbar = document.querySelector(".nav2");

window.addEventListener("scroll", function (x) {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll down
    navbar.classList.remove("andown");
    navbar.classList.add("anup");
  } else if (lastScrollTop <= 100) {
    //top
    navbar.classList.add("anup");
    navbar.classList.remove("andown");
  } else {
    // Scroll up
    navbar.classList.remove("anup");
    navbar.classList.add("andown");
  }

  lastScrollTop = scrollTop; // Update last scroll position
});

// ! contactus

document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent page refresh

    const url = `${urls}/feedback/contactus`;

    let formData = new FormData(this);
    // Fetch request
    let response = await fetch(url, {
      method: "POST",
      body: formData, // Pass the FormData directly
      redirect: "follow",
      credentials: "include",
    }).catch((error) => {
      console.log(error);
    });

    if (response.ok) {
      const responseMessage = document.getElementById("responseMessage");
      responseMessage.textContent =
        "Thank you for your message! We will get back to you shortly.";
      this.reset();
    }
  });

// ! dark mode seting

let darkseting = localStorage.getItem("dark_seting");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");
let dark;

// dark, light, system default
if (darkseting == "dark") {
  dark = true;
} else if (darkseting == "system") {
  if (systemPrefersDark.matches == true) {
    dark = true;
  } else {
    dark = false;
  }
} else if (darkseting == "light") {
  dark = false;
} else {
  if (systemPrefersDark.matches == true) {
    dark = true;
  } else {
    dark = false;
  }
}

const root = document.documentElement;
if (dark) {
  root.style.setProperty("--card-bgc", "rgb(26, 26, 26)");
  root.style.setProperty("--lite-text", "#d8d8d8");
  root.style.setProperty("--bgc-color", "black");
  root.style.setProperty("--color-text", "#ddd");
} else {
  root.style.setProperty("--card-bgc", "rgb(226, 226, 226)");
  root.style.setProperty("--lite-text", "#333");
  root.style.setProperty("--bgc-color", "#ffffff");
  root.style.setProperty("--color-text", "black");
}
