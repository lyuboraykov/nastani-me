import { Constants } from './constants';
import { Utils } from './utils';

export var Search = {
    initialize() {
        var backButton = document.getElementById("back-icon"),
            searchfield = document.getElementById("searchfield"),
            searchButton = document.getElementById("search-nearby"),
            detailsPage = document.getElementById("search-details"),
            houseDetails = document.getElementById("house-details"),
            image = document.getElementsByClassName("post-image")[0],
            bookBtn = document.getElementsByClassName("book-btn")[0],
            bigButtons = document.getElementsByClassName("big-button"),
            houseDetailsBack = document.querySelectorAll("#house-details .fa-arrow-left")[0],
            detailsBack = document.querySelectorAll("#search-details .fa-arrow-left")[0];

        backButton.addEventListener("touchstart", function(event) {
            Utils.gotoPage(Constants.pages.home);
        });

        searchButton.addEventListener("touchstart", function(event) {
            detailsPage.classList.add("z-index");
            detailsPage.children[0].classList.add("animate-transform");
        });

        detailsBack.addEventListener("touchstart", function(event) {
            detailsPage.children[0].classList.remove("animate-transform");
            setTimeout(function() {
                detailsPage.classList.remove("z-index");
            }, 300);
        });

        image.addEventListener("touchstart", function(event) {
            houseDetails.classList.add("z-index");
            houseDetails.children[0].classList.add("animate-transform");
            houseDetails.children[0].style.backgroundColor = "#f0f0f0";
            setTimeout(function() {
                houseDetails.style.backgroundColor = "#f0f0f0";
            }, 300);
        });

        houseDetailsBack.addEventListener("touchstart", function(event) {
            houseDetails.style.backgroundColor = "transparent";
            houseDetails.children[0].classList.remove("animate-transform");
            setTimeout(function() {
                houseDetails.classList.remove("z-index");
            }, 300);
        });

        bookBtn.addEventListener("touchstart", function() {
            Utils.gotoPage(Constants.pages.reservation);
        });

        Array.prototype.slice.call(bigButtons).forEach(function(button) {
            button.addEventListener("touchstart", function() {
                Utils.gotoPage(Constants.pages.filter);

            });
        });

    }
};
