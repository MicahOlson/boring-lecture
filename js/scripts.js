$(document).ready(function () {
  $("#paragraph-1").click(function() {
    $("p").removeClass();
    $("p#paragraph-1").addClass("highlight");
  });
  
  $("#paragraph-2").click(function() {
    $("p").removeClass();
    $("p#paragraph-2").addClass("highlight");
  });
  
  $("#paragraph-3").click(function() {
    $("p").removeClass();
    $("p#paragraph-3").addClass("highlight");
  });
  
  $("#paragraph-4").click(function() {
    $("p").removeClass();
    $("p#paragraph-4").addClass("highlight");
  });
  
  $(".clickable").click(function() {
    $("p").removeClass();
  })
});