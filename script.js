// Global variables for the menu
let trued1 = 0;
let trued2 = 0;
let trued3 = 0;

// Activating the menu
function burger() {
  const container = document.querySelector(".coverContainer");
  const content = document.querySelector(".coverContent");
  const burgerIcon = document.querySelector(".burgerIcon");
  container.classList.toggle("activeContainer");
  content.classList.toggle("activeContent");
  burgerIcon.classList.toggle("activeIcon");
}

// Making menu items roll out
function menuChangeHandler(name) {
  classRemove();
  document.querySelector(name).classList.add("activeDet");
}

// Making radio checkboxes uncheckable
function clickHandler(name) {
  if (document.getElementById(name).checked === true) {
    if (name === "menu1") {
      trued2 = 0;
      trued3 = 0;
      if (trued1 === 1) {
        trued1 = 0;
        classRemove();
        document.getElementById(name).checked = false;
      } else {
        trued1++;
      }
    } else if (name === "menu2") {
      trued1 = 0;
      trued3 = 0;
      if (trued2 === 1) {
        trued2 = 0;
        classRemove();
        document.getElementById(name).checked = false;
      } else {
        trued2++;
      }
    } else if (name === "menu3") {
      trued1 = 0;
      trued2 = 0;
      if (trued3 === 1) {
        trued3 = 0;
        classRemove();
        document.getElementById(name).checked = false;
      } else {
        trued3++;
      }
    }
  }
}

function classRemove() {
  document.querySelector(".socialDet").classList.remove("activeDet");
  document.querySelector(".storeDet").classList.remove("activeDet");
  document.querySelector(".homeDet").classList.remove("activeDet");
}
