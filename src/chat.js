export var Chat = {
  initialize() {
    var backButton = document.getElementById("back-icon");

    backButton.addEventListener("click", function() {
      window.location.href = 'home.html';
    });
  }
};
