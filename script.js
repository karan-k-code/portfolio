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
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Mock form submission
    console.log("Form submitted:", { name, email, message });

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
