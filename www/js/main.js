(function() {
    var initialPageButtons = document.querySelectorAll("#initial-page .login-buttons"),
        initialPage = document.getElementById("initial-page"),
        initialHeader = document.getElementById("main-header"),
        loginPage = document.getElementById("reg-login-page");

    [].forEach.call(initialPageButtons, function(button) {
        button.addEventListener("click", function(event) {
            var buttonText = this.innerText,
                action = buttonText === "Create an account" ? "sign up" : "log in",
                nameInputs = document.querySelectorAll('#login-email input[type="text"]');

            //some more ternary operators special for Lyubo < 3

            action === "log in" ? [].forEach.call(nameInputs, function(input) { input.classList.add("hidden") }) :
             [].forEach.call(nameInputs, function(input) { input.classList.remove("hidden") });


            document.getElementById("action").innerText = "Quickly " + action + " with:";
            initialPage.classList.add("blur-page");
            [].forEach.call(initialPageButtons, function(oButton) { oButton.classList.add("hidden") });
            initialHeader.classList.add("hidden");
            loginPage.classList.remove("hidden");
        });
    });

    document.getElementsByClassName("exit-button")[0].addEventListener("click", function() {
        loginPage.classList.add("hidden");
        initialPage.classList.remove("blur-page");
        initialHeader.classList.remove("hidden");
        [].forEach.call(initialPageButtons, function(oButton) { oButton.classList.remove("hidden") });
    });
})();
