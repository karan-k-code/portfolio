// const urls = "https://kitmo.onrender.com/api/v1";

const urls = "http://127.0.0.1:4000/api/v1";

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
  moreInfo.classList.toggle("show_more_animation");
  if (moreInfo.style.right == "0px") {
    moreInfo.style.right = "-220px";
    line_a.classList.remove("line_a");
    line_b.classList.remove("line_b");
    line_c.classList.remove("line_c");
    // moreInfo.style.display = "none";
  } else {
    moreInfo.style.right = "0px";
    line_a.classList.add("line_a");
    line_b.classList.add("line_b");
    line_c.classList.add("line_c");
  }
};

// ! contact us

document
  .getElementById("contactForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // const fordat = document.getElementById("contactForm");
    const fordat = document.forms["contactus"];

    const data = new FormData(fordat);
    console.log(data);

    const url = urls + "/feedback/contactus";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
      redirect: "follow",
      credentials: "include",
    });

    console.log(response);

    // Show response message
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent =
      "Thank you for your message! We will get back to you shortly.";

    // Clear form fields
    document.getElementById("contactForm").reset();
  });

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
      x.target.innerText = "..Show less";
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
    show_more_text.innerText = "..Show less";
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
  if (rating_box.style.display == "none") {
    rating_box.style.display = "flex";
  } else {
    rating_box.style.display = "none";
  }
};

let ratingData = JSON.parse(localStorage.getItem("ratingData"));

if (ratingData) {
  closeButton();
}

// scroll

let lastScrollTop = 0;

const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll down
    navbar.style.position = "unset";
    navbar.classList.remove("andown");
    navbar.classList.add("anup");
  } else if (lastScrollTop <= 100) {
    //top
    navbar.style.position = "unset";
  } else {
    // Scroll up
    navbar.style.position = "fixed";
    navbar.classList.add("andown");
    navbar.classList.remove("anup");
  }

  lastScrollTop = scrollTop; // Update last scroll position
});
