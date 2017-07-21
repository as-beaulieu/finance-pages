$(function() {
  var button = $("#check"),
  submitButt = $("#submit");
  button.on("click",function(e) {
     	submitButt.removeAttr("disabled");
  });
});