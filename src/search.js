import { Constants } from './constants';
import { Utils } from './utils';

export var Search = {
    initialize() {
        var backButton = document.getElementById("back-icon"),
            searchfield = document.getElementById("searchfield"),
            searchButton = document.getElementById("search-nearby"),
            detailsPage = document.getElementById("search-details"),
            detailsBack = document.querySelectorAll("#search-details .fa-arrow-left")[0];

        backButton.addEventListener("touchstart", function(event) {
            Utils.gotoPage(Constants.pages.home);
        });

        searchfield.addEventListener("input", function(event) {
            var value = event.target.value;

            if (value.toUpperCase() === "LONDON") {
                alert("hello");
            }
        });

        searchButton.addEventListener("touchstart", function(event) {
            detailsPage.classList.add("z-index");
            detailsPage.children[0].classList.add("animate-transform");
        });

        detailsBack.addEventListener("touchstart", function(event) {
            detailsPage.children[0].classList.remove("animate-transform");
            setTimeout(function() {
                detailsPage.classList.remove("z-index");
            }, 300)
        });

    }
};
