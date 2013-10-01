

$(function() {

// var ipAddress = "10.0.0.74";
 var ipAddress = "localhost";
 var speed = 0.75;

  var closeNotification = function(e) {
    $(".notifications").html("");
  };

  var displayNotification = function(text) {
    $(".notifications").text(text);
    // $(".notifications").one("click", closeNotification);
  };

  var initiateMovement = function(selector, data, successText, errorText) {
        $.ajax("http://" + ipAddress + ":8071/motion-control/update", {
        data: data,
        dataType: "jsonp",
        success: function() { displayNotification(successText) },
        error:   function() { displayNotification(errorText) }
      });
         console.log("Command sent to server");
  };

//  $('#gear_1').on("click", function(event){
//   $('#gear_1 img').addClass('selected');
//   console.log("tried to change the class")
// });

    $('.gear').on("click", function(event){
      console.log( "new gear chosen");
      $('.gear img').removeClass('selected')
      speed = $(this).data('speed');
      $(this).children('img').addClass('selected');
      return false;
    });





    // stopped
    $('.button').on("click", function(event){
    console.log("Stop command has been heard.");
    initiateMovement(
      ".stop",
      {forward: 0},
      "Your MC Hammer Bot is now stopped.",
      "Stop command not received."
    );
    return false;
  });



  $('.forward_slow').on("mouseover", function(event){
    console.log(" Forward slow command has been heard.");
    initiateMovement(
      ".forward_slow",
      {forward: 0.5 * speed},
      "Your MC Hammer Bot is now moving forward.",
      "Foward slow command not received."
    );
    return false;
  });

  $('.forward').on("mouseover", function(event){
    console.log(" Forward command has been heard.");
    initiateMovement(
      ".forward",
      {forward: speed},
      "Your MC Hammer Bot is now moving forward a top speed.",
      "Foward command not received."
    );
    return false;
  });
 
  $('.bareRight').on("mouseover", function(event){
    console.log(" Bare right command has been heard.");
    initiateMovement(
      ".bareRight",
      {right: speed},
      "Your MC Hammer Bot is now bearing right.",
      "Bare right command not received."
    );
    return false;
  });

  $('.backRight').on("mouseover", function(event){
    console.log(" Back right command has been heard.");
    initiateMovement(
      ".backRight",
      {right: -1*speed},
      "Your MC Hammer Bot is now backing right.",
      "Back right command not received."
    );
    return false;
  });

$('.bareLeft').on("mouseover", function(event){
    console.log(" Bare left has been heard.");
    initiateMovement(
      ".bareLeft",
      {left: speed},
      "Your MC Hammer Bot is now bearing left.",
      "Bare left command not received."
    );
    return false;
  });

  $('.backLeft').on("mouseover", function(event){
    console.log(" Back left command has been heard.");
    initiateMovement(
      ".backLeft",
      {left: -1*speed},
      "Your MC Hammer Bot is now backing left.",
      "Back left command not received."
    );
    return false;
  });

  $('.reverse').on("mouseover", function(event){
    console.log("Reverse Command has been heard.");
    initiateMovement(
      ".reverse",
      {forward: -1*speed},
      "Your MC Hammer Bot is now in reverse.",
      "Reverse command not received."
    );
    return false;
  });
 
  $('.stop').on("mouseover", function(event){
    console.log("Stop command has been heard.");
    initiateMovement(
      ".stop",
      {forward: 0},
      "Your MC Hammer Bot is now stopped.",
      "Stop command not received."
    );
    return false;
  });

 
  $('.spinLeft').on("mouseover", function(event){
    console.log("Pivot left command has been heard.");
    initiateMovement(
      ".spinLeft",
      {turn: -1*speed},
      "Your MC HammerBot is now spinning left",
     "Pivot left command not received."
    );
    return false;
  });

$('.spinRight').on("mouseover", function(event){
    console.log("Pivot right command has been heard.");
    initiateMovement(
      ".spinRight",
      {turn: speed},
      "Your MC HammerBot is now pivoting right",
     "PIvot right command not received."
    );
    return false;
  });
 
  // $('.right').on("mouseover", function(event){
  //   console.log("Right turn command has been heard.");
  //   initiateMovement(
  //     ".right",
  //     {turn: 1},
  //     "Your MC HammerBot is now spinning right",
  //     "Right turn command not received."
  //   );
  //   return false;
  // });

 
  $('.strafeRight').on("mouseover", function(event){
    console.log("Strafe right command has been heard.");
    initiateMovement(
      ".strafeRight",
      {strafe: -1*speed},
      "Your MC HammerBot is now moving right",
      "Strafe right command not received."
     );
    return false;
  });

 
  $('.strafeLeft').on("mouseover", function(event){
    console.log("Strafe left command has been heard.");
  var strafeLeftCommand = initiateMovement(
    ".strafeLeft",
    {strafe: speed},
    "Your MC HammerBot is now moving left",
    "Strafe left command not received."
    );
    return false;
  });



});