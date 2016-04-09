(function() {
    var navIcons = document.getElementsByClassName("menu-icon");
    var profile = document.getElementById("user-icon");
    [].forEach.call(navIcons, function(el) {
        el.addEventListener("click", function(event) {
            if (event.target.id === "user-icon") {
                return;
            }
            document.getElementsByClassName("reds-clicked")[0].classList.remove("reds-clicked");
            this.classList.add("reds-clicked");

            if (!(this.id === "user-menu")) {
                document.getElementById("user-menu").classList.remove("animate-user");
            }
        });
    });

    profile.addEventListener("click", function() {
        document.getElementById("animate-child").classList.add("animate-user");
        document.getElementById("home-main").classList.add("blur-page");
        document.getElementById("user-menu").classList.add("bigger-index");

        setTimeout(function() {
            document.getElementById("home-main").addEventListener("click", blurListener);
        }, 0);
    });


    function blurListener(event) {
        document.getElementById("home-main").removeEventListener("click", blurListener);

        if (event.target.id !== "user-menu") {
            document.getElementById("animate-child").classList.remove("animate-user");
            document.getElementById("home-main").classList.remove("blur-page");
            document.getElementById("user-menu").classList.remove("bigger-index");
        } else {
            return;
        }
    }

})();
