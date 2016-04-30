import {Constants} from './constants';
import {Utils} from './utils';

export var Home = {
  initialize() {
    let navIcons = document.getElementsByClassName("menu-icon"),
    pages = document.getElementsByClassName("page"),
    profile = document.getElementById("user-icon"),
    messagesThread = document.getElementById("thread1"),
    profileMenuItem = document.getElementById("profile-link"),
    listingMenuItem = document.getElementById("listing-link"),
    helpMenuItem = document.getElementById("help-link"),
    inviteMenuItem = document.getElementById("invite-link"),
    placeDetailsIcons = document.querySelectorAll(".place-preview > i"),
    detailsBack = document.getElementById("details-back"),
    swipeBackPages = document.getElementsByClassName("swipe-back"),
    searchIcon = document.getElementById("search-icon");

    [].forEach.call(navIcons, function(el) {
      el.addEventListener("touchstart", function(event) {
        if (event.target.id === "user-icon") {
          return;
        }

        [].forEach.call(pages, function(page) {
          page.classList.add("hidden");
        });
        document.getElementById(this.id.split("-")[0]).classList.remove("hidden");
        document.getElementById("place-details").classList.remove("bigger-index");
        document.getElementById("animate-details").classList.remove("details-animation");
        document.getElementsByClassName("reds-clicked")[0].classList.remove("reds-clicked");
        this.classList.add("reds-clicked");

        if (this.id !== "user-menu") {
          document.getElementById("user-menu").classList.remove("animate-user");
        }
      });
    });

    [].forEach.call(placeDetailsIcons, function(el) {
      el.addEventListener("touchstart", function(event) {
        var element = this.parentElement.parentElement.getElementsByClassName("place-location")[0],
            heading = document.getElementsByClassName("details-h1")[0];

        heading.innerText = element.innerText;

        document.getElementById("place-details").classList.add("bigger-index");
        document.getElementById("animate-details").classList.add("details-animation");
      });
    });

    detailsBack.addEventListener("touchstart", function() {
      document.getElementById("animate-details").classList.remove("details-animation");
      // hacking the DOM is good skill to have
      setTimeout(function() {
        document.getElementById("place-details").classList.remove("bigger-index");
      }, 500);
    });

    profile.addEventListener("touchstart", function() {
      document.getElementById("animate-child").classList.add("animate-user");
      document.getElementById("home-main").classList.add("blur-page");
      document.getElementById("user-menu").classList.add("bigger-index");

      setTimeout(function() {
        document.getElementById("home-main").addEventListener("touchstart", blurListener);
      }, 0);
    });

    function blurListener(event) {
      document.getElementById("home-main").removeEventListener("touchstart", blurListener);

      if (event.target.id !== "user-menu") {
        document.getElementById("animate-child").classList.remove("animate-user");
        document.getElementById("home-main").classList.remove("blur-page");
        document.getElementById("user-menu").classList.remove("bigger-index");
      } else {
        return;
      }
    }

    messagesThread.addEventListener("touchstart", function() {
      localStorage.setItem(Constants.storageKey, "messages");
      Utils.gotoPage(Constants.pages.chat);
    });

    profileMenuItem.addEventListener("touchstart", function() {
      localStorage.setItem(Constants.storageKey, "user");
      Utils.gotoPage(Constants.pages.profile);
    });

    listingMenuItem.addEventListener("touchstart", function() {
      localStorage.setItem(Constants.storageKey, "user");
      Utils.gotoPage(Constants.pages.listing);
    });

    helpMenuItem.addEventListener("touchstart", function() {
      localStorage.setItem(Constants.storageKey, "user");
      Utils.gotoPage(Constants.pages.help);
    });

    inviteMenuItem.addEventListener("touchstart", function() {
      localStorage.setItem(Constants.storageKey, "user");
      Utils.gotoPage(Constants.pages.invite);
    });

    searchIcon.addEventListener("click", function() {
      Utils.gotoPage(Constants.pages.search);
      localStorage.setItem(Constants.storageKey, "home");
    });

    if (localStorage.getItem(Constants.storageKey)) {
      var value = localStorage.getItem(Constants.storageKey);
      document.getElementById(value + "-icon").click();
    }
  }
};
