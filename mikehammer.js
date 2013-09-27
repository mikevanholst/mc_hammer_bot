

$(function() {

  // var ipAddress = "192.168.111.111";
  // var ipAddress = "localhost";
  var ipAddress = "#";

  var closeNotification = function(e) {
    $(".notifications").html("")
  }

  var displayNotification = function(text) {
    $(".notifications").text(text);
    $(".notifications").one("click", closeNotification);
  }

  // var initiateMovement = function(selector, data, successText, errorText) {
  //       $.ajax("http://" + ipAddress + ":8071/motion-control/update", {
  //       data: data,
  //       dataType: "jsonp",
  //       success: function() { displayNotification(successText) },
  //       error:   function() { displayNotification(errorText) }
  //       // console.log("initiated movement");
  //     });
  // }

  $('.forward').on("click", function(event){
    // forwardCommand
    console.log("Sent Forward Command.");
    return false;
  });

  // var forwardCommand = initiateMovement(
  //   ".forward",
  //   {forward: 1},
  //   "Your MC Hammer Bot is now moving forward.",
  //   "Foward command not received."
  // );

//   var reverseCommand = initiateMovement(
//     ".reverse",
//     {forward: -1},
//     "Your MC Hammer Bot is now in reverse.",
//     "Reverse command not received."
//   );

//   var stopCommand = initiateMovement(
//     ".stop",
//     {forward: 0},
//     "Your MC Hammer Bot is now stopped.",
//     "Stop command not received."
//   );

//   var leftTurnCommand = initiateMovement(
//     ".left",
//     {turn: -1},
//     "Your MC HammerBot is now spinning left",
//    "Left turn command not received."
//   );

//   var rightTurnCommand = initiateMovement(
//     ".right",
//     {turn: 1},
//     "Your MC HammerBot is now spinning",
//     "Right turn command not received."
//   );

//   var strafeRightCommand = initiateMovement(
//     ".straferight",
//     {turn: 1},
//     "Your MC HammerBot is now moving right",
//     "Strafe right command not received."
//   );

// var strafeLeftCommand = initiateMovement(
//     ".strafeleft",
//     {turn: -1},
//     "Your MC HammerBot is now moving left",
//     "Strafe left command not received."
//   );


});