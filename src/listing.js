import {Constants} from './constants';
import {Utils} from './utils';

export var Listing = {
  initialize() {
    var backButton = document.getElementById("back-icon"),
        step1Opts = document.getElementsByClassName("step1opt"),
        step2Opts = document.getElementsByClassName("step2opt"),
        next = document.getElementById("listing-next"),
        publish = document.getElementById("listing-publish"),
        currentStep = 1;

    function gotoStep(n) {
        var header = document.getElementById("listing-h1"),
            title = header.children[header.children.length - 1];
        if(n === 1) {
            title.innerHTML = "List your space";
        } else if(n === 2) {
            title.innerHTML = "Property type";
        } else if(n === 3) {
            title.innerHTML = "Location";
        } else if(n === 4) {
            title.innerHTML = "Rooms & beds";
        }


        for(var i = 1; i < 5; i++) {
          var step = document.getElementById("listing-step-" + i.toString());
          if(i === n) {
            step.classList.remove("no-display");
          } else {
            step.classList.add("no-display");
          }
        }
        currentStep = n;
    }

    backButton.addEventListener("click", function() {
      if(currentStep === 1) {
        Utils.gotoPage(Constants.pages.home);
      } else {
        gotoStep(currentStep - 1);
      }
    });

    [].forEach.call(step1Opts, function(el) {
      el.addEventListener("click", function(event) {
          var name = this.children[this.children.length - 1].innerHTML.toLowerCase(),
              question2 = document.getElementById("q2");
          question2.innerHTML = "<h1>What type of place is your " + name + " in?</h1>";
          gotoStep(2);
      });
    });

    [].forEach.call(step2Opts, function(el) {
      el.addEventListener("click", function(event) {
          gotoStep(3);
      });
    });

    next.addEventListener("click", function() {
        gotoStep(4);
    });

    publish.addEventListener("click", function() {
        gotoStep(1);
        Utils.gotoPage(Constants.pages.home);
    });
  }
};
