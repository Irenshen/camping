$(document).ready(function () {
  $(".burger").click(function () {
    $(".profile-wrap").addClass("active");
    $("body").addClass("modal-opened");
  });

  $(".header-close").click(function () {
    $(".profile-wrap").removeClass("active");
    $("body").removeClass("modal-opened");
  });
  
});
