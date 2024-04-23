$(document).ready(function () {
  $(".burger").click(function () {
    $(".profile-wrap").addClass("active");
    $("body").addClass("modal-opened");
  });

  $(".header-close").click(function () {
    $(".profile-wrap").removeClass("active");
    $("body").removeClass("modal-opened");
  });

  $(".video-wrap").click(function (e) {
    $(this).addClass("active");
    var $video = $(this).find("iframe"),
      src = $video.attr("src");
    $video.attr("src", src + "&autoplay=1");
  });

});


document.addEventListener("DOMContentLoaded", function () {
  // конечная дата
  const deadline = new Date(2024, 05, 10, 10, 0, 0, 0);
  // const deadline = (function(y, m, d, h) { return new Date(y, m-1, d, h); })(2021, 08, 12, 12);
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? "0" + days : days;
    $hours.textContent = hours < 10 ? "0" + hours : hours;
    $minutes.textContent = minutes < 10 ? "0" + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $days.dataset.title = declensionNum(days, ["день", "дня", "дней"]);
    $hours.dataset.title = declensionNum(hours, ["час", "часа", "часов"]);
    $minutes.dataset.title = declensionNum(minutes, [
      "минута",
      "минуты",
      "минут",
    ]);
    $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector(".timer__days");
  const $hours = document.querySelector(".timer__hours");
  const $minutes = document.querySelector(".timer__minutes");
  const $seconds = document.querySelector('.timer__seconds');
  countdownTimer();
  timerId = setInterval(countdownTimer, 30000);
});

$(function () {
  "use strict";

  const $circle = $(".js-circle");
  const agle = 360 / $circle.length;
  let agleCounter = 1;

  $circle.each(function () {
    let $this = $(this);
    //т.к. jqurey не может возвращать ширину в процентах, делаем расчет.
    let percentWidth =
      (100 * parseFloat($this.css("width"))) /
      parseFloat($this.parent().css("width"));

    let curAgle = agleCounter * agle; // текущий угол
    let radAgle = (curAgle * Math.PI) / 180; // переводим в радианы

    /*
      расчет координат 
      1. Формула исходит из условия, что отсчет координаты начинается от левого нижнего угла
      2. Расчет ведется в %
      3. (<центр внеш. круга> + ((<радиус внеш. круга> - <радиус внут. круга>) * Math.cos(radAgle))) - (<т.к. координаты начинаются от нижнего левого угла, вычитаем радиус внут. круга, что бы позиционирование шло по центру внут. круга>)
      */
    let x =
      50 + (50 - percentWidth / 2) * Math.cos(radAgle) - percentWidth / 2;
    let y =
      54 + (54 - percentWidth / 2) * Math.sin(radAgle) - percentWidth / 2;

    $this.css({
      left: x + "%",
      bottom: y + "%",
    });

    agleCounter++;
  });
});
