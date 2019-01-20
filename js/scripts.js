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
      //$("#results").show();
      //$("#questions").hide();

      if (focusInput === "front") {
        $("#design").fadeIn(fadeInTime);
      }else if (developInput === "mobile") {
        $("#java").fadeIn(fadeInTime);
        $(".j-mobile").show();
        $(".j-soft").hide();
      }
      else if (specialistInput === "narrow") {
        $("#ruby").fadeIn(fadeInTime);
      }
      else if ((sizeInput === "big" && developInput === "soft") || (frameworkInput === "no")) {
        $("#c").fadeIn(fadeInTime);
      }
      else {
        $("#java").fadeIn(fadeInTime);
        $(".j-mobile").hide();
        $(".j-soft").show();
      }
      $("#result-modal").modal("show");
    }
    else {
      //alert("Please fill in your name!");
      //$("input#name").focus();

      $("#fill-name-modal").modal("show");
    }

    event.preventDefault();
  });

  $("#btnReset").click(function(){
    //$("#results").hide();
    $(".track").hide();
    //$("#questions").show();

  });

  $("#fill-name-modal").on("hidden.bs.modal", function (){
     $("input#name").focus();
   });

});
