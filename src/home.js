import {Constants} from './constants';
import {Utils} from './utils';

export var Home = {
  initialize() {
    var navIcons = document.getElementsByClassName("menu-icon"),
    pages = document.getElementsByClassName("page"),
    profile = document.getElementById("user-icon"),
    messagesThread = document.getElementById("thread1"),
    helpMenuItem = document.getElementById("help-link");

    [].forEach.call(navIcons, function(el) {
      el.addEventListener("click", function(event) {
        if (event.target.id === "user-icon") {
          return;
        }

        [].forEach.call(pages, function(page) {
          page.classList.add("hidden");
        });
        document.getElementById(this.id.split("-")[0]).classList.remove("hidden");

        document.getElementsByClassName("reds-clicked")[0].classList.remove("reds-clicked");
        this.classList.add("reds-clicked");

        if (this.id !== "user-menu") {
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

    messagesThread.addEventListener("click", function() {
      localStorage.setItem(Constants.storageKey, "messages");
      Utils.gotoPage(Constants.pages.chat);
    });

    helpMenuItem.addEventListener("click", function() {
      localStorage.setItem(Constants.storageKey, "user");
      Utils.gotoPage(Constants.pages.help);
    });

    if (localStorage.getItem(Constants.storageKey)) {
      var value = localStorage.getItem(Constants.storageKey);
      document.getElementById(value + "-icon").click();
    }
  }
};
