$(document).ready(function() {

  $("input#name").focus();

  $("#mainForm").submit(function(event) {

//    alert("hi");
    var nameInput = $("input#name").val();
    var focusInput = $("input:radio[name=focus]:checked").val();
    var sizeInput = $("input:radio[name=size]:checked").val();
    var developInput = $("input:radio[name=develop]:checked").val();
    var specialistInput = $("input:radio[name=specialist]:checked").val();
    var frameworkInput = $("input:radio[name=framework]:checked").val();

    var fadeInTime = 2000;

    if (nameInput) {
      $(".name").text(nameInput);

      $(".track").hide();
      $("#results").show();
      $("#questions").hide();

      if (focusInput === "front") {
        $("#design").fadeIn(fadeInTime);
      }else if (developInput === "mobile") {
        $("#java").fadeIn(fadeInTime);
        $(".j-mobile").show();
        $(".j-soft").hide();
      }
      else if (sizeInput === "big" && developInput === "soft") {
        $("#c").fadeIn(fadeInTime);
      }
      else if (specialistInput === "narrow" && (sizeInput !== "big")) {
        $("#ruby").fadeIn(fadeInTime);
      }
      else {
        $("#java").fadeIn(fadeInTime);
        $(".j-mobile").hide();
        $(".j-soft").show();
      }
    }
    else {
      alert("Please fill in your name!");
      $("input#name").focus();
    }

    event.preventDefault();
  });

  $("#btnReset").click(function(){
    location.reload();
  });
});
