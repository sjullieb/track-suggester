$(document).ready(function() {
  $("#mainForm").submit(function(event) {

//    alert("hi");
    var nameInput = $("input#name").val();
    var focusInput = $("input:radio[name=focus]:checked").val();
    var sizeInput = $("input:radio[name=size]:checked").val();
    var developInput = $("input:radio[name=develop]:checked").val();
    var specialistInput = $("input:radio[name=specialist]:checked").val();
    var frameworkInput = $("input:radio[name=framework]:checked").val();

    $(".name").text(nameInput);

    $(".track").hide();
    $("#results").show();
    $("#questions").hide();

    if (focusInput === "front") {
      $("#design").show();
    }else if (developInput === "mobile") {
      $("#java").show();
    }
    else if (sizeInput === "big" && developInput === "soft") {
      $("#c").show();
    }
    else if (specialistInput === "narrow" && (sizeInput !== "big")) {
      $("#ruby").show();
    }
    else {
      $("#java").show();
    }

    event.preventDefault();
  });

  $("#btnReset").click(function(){
    location.reload();
  });
});
