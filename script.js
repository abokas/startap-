const flashlight = document.getElementById("flashlight");
const mainButton = document.getElementById("mainButton");

const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const subscribeBtn = document.getElementById("subscribeBtn");
const success = document.getElementById("success");

let isOn = false;


// ==============================
// ВКЛЮЧЕНИЕ ФОНАРИКА
// ==============================

function turnOnFlashlight() {

  if (isOn) return;

  isOn = true;

  flashlight.classList.add("on");
  flashlight.textContent = "💡";

  mainButton.style.display = "inline-block";

}


// Клик мышкой / пальцем
flashlight.addEventListener("click", turnOnFlashlight);


// Для клавиатуры
flashlight.addEventListener("keydown", function(event) {

  if (event.key === "Enter" || event.key === " ") {

    event.preventDefault();

    turnOnFlashlight();

  }

});


// ==============================
// КНОПКА "ОТКЛЮЧИТЬ"
// ==============================

mainButton.addEventListener("click", function() {

  overlay.classList.add("show");

  overlay.setAttribute("aria-hidden", "false");

});


// ==============================
// ЗАКРЫТЬ ОКНО
// ==============================

closeBtn.addEventListener("click", function() {

  overlay.classList.remove("show");

  overlay.setAttribute("aria-hidden", "true");

});


// ==============================
// PREMIUM
// ==============================

subscribeBtn.addEventListener("click", function() {

  subscribeBtn.style.display = "none";

  success.style.display = "block";


  setTimeout(function() {

    overlay.classList.remove("show");

    overlay.setAttribute("aria-hidden", "true");

    flashlight.classList.remove("on");

    flashlight.textContent = "🔦";

    mainButton.style.display = "none";

    subscribeBtn.style.display = "block";

    success.style.display = "none";

    isOn = false;

  }, 1800);

});


// ==============================
// ЗАКРЫТИЕ ПО ФОНУ
// ==============================

overlay.addEventListener("click", function(event) {

  if (event.target === overlay) {

    overlay.classList.remove("show");

    overlay.setAttribute("aria-hidden", "true");

  }

});
