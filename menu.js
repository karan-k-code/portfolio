document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menuList = document.getElementById("menu-list");
    const fLine = document.querySelector("#first_line")
    const mLine = document.querySelector("#midel_line")
    const eLine = document.querySelector("#end_line")
    const menuBox = document.querySelector(".menu_box")
    
  
    menuButton.addEventListener("click", function () {
      menuBox.style.left = menuBox.style.left === "-200px" ? "0" : "-200px";
        if (menuBox.style.left === "-200px") {
            fLine.classList.remove("first_line")
            mLine.classList.remove("midel_line")
            eLine.classList.remove("end_line")
            menuBox.classList.remove("slide")
            menuBox.classList.add("slide_e")
            menuButton.classList.remove("menu_t")
            
        }else{
            menuBox.classList.add("slide")
            menuButton.classList.add("menu_t")
            menuBox.classList.remove("slide_e")
            fLine.classList.add("first_line")
            mLine.classList.add("midel_line")
            eLine.classList.add("end_line")
        }
    });
  
    document.addEventListener("click", function (event) {
      if (
        !menuButton.contains(event.target) &&
        !menuList.contains(event.target)
      ) {
        menuBox.style.left = "-200px";
        fLine.classList.remove("first_line")
            mLine.classList.remove("midel_line")
            eLine.classList.remove("end_line")
            menuBox.classList.remove("slide")
            menuBox.classList.add("slide_e")
            menuButton.classList.remove("menu_t")
      }
    });

  });