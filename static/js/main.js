$("#design-description").hide();
$("#development-description").hide();
$("#product-management-description").hide();

$("#design").hover(() => {
  // $("#design-description").hide();
  $("#design-description").toggle();
  // $("#design").hide();
  // $("#design-description").show();
});

$("#development").hover(() => {
  $("#development-description").toggle();
});

$("#product-management").hover(() => {
  $("#product-management-description").toggle();
});