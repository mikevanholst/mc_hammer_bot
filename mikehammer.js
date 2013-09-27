

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

  var initiateMovement = function(selector, data, successText, errorText) {
    $(selector).on("click", function() {
      $.ajax("http://" + ipAddress + ":8071/motion-control/update", {
        data: data,
        dataType: "jsonp",
        success: function() { displayNotification(successText) },
        error:   function() { displayNotification(errorText) }
      });
    });
  }

  var forwardCommand = initiateMovement(
    ".forward",
    {forward: 1},
    "Your MC Hammer Bot is now moving forward.",
    "Foward command not received."
  )

  var stopCommand = initiateMovement(
    ".stop",
    {forward: 0},
    "Your MC Hammer Bot is now stopped.",
    "Stop command not received."
  )

  var leftTurnCommand = initiateMovement(
    ".left",
    {turn: -1},
    "Your MC HammerBot is now spinning",
    "Your MC Hammer Bot is probably spinning on fire."
  )

  var rightTurnCommand = initiateMovement(
    ".left",
    {turn: 1},
    "Your MC HammerBot is now spinning",
    "Your MC Hammer Bot is probably spinning on fire."
  )

  var strifeRightCommand = initiateMovement(
    ".left",
    {turn: -1},
    "Your MC HammerBot is now spinning",
    "Your MC Hammer Bot is probably spinning on fire."
  )

var strifeLeftCommand = initiateMovement(
    ".left",
    {turn: -1},
    "Your MC HammerBot is now spinning",
    "Your MC Hammer Bot is probably spinning on fire."
  )





})