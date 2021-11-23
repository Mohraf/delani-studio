$("#design-description").hide();
$("#development-description").hide();
$("#product-management-description").hide();

$("#design").hover(() => {
  $("#design").replaceWith($("#design-description"));
  $("#design-description").show();
});

$("#development").hover(() => {
  $("#development").replaceWith($("#development-description"));
  $("#development-description").show();
});

$("#product-management").hover(() => {
  $("#product-management").replaceWith($("#product-management-description"));
  $("#product-management-description").show();
});