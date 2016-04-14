import {Constants} from './constants';
import {Utils} from './utils';

export var Help = {
  initialize() {
    var backButtonMain = document.getElementById("back-icon-main"),
        backButton = document.getElementById("back-icon"),
        helpSuggestion = document.getElementById("help-suggestion"),
        helpCenterHeader = document.getElementById("help-center"),
        helpQuestionHeader = document.getElementById("help-question"),
        helpSuggestions = document.getElementById("help-suggestions"),
        helpAnswer = document.getElementById("help-answer");

    backButtonMain.addEventListener("click", function() {
      Utils.gotoPage(Constants.pages.home);
    });

    helpSuggestion.addEventListener("click", function() {
        helpCenterHeader.classList.add("no-display");
        helpQuestionHeader.classList.remove("no-display");
        helpSuggestions.classList.add("no-display");
        helpAnswer.classList.remove("no-display");
    });

    backButton.addEventListener("click", function() {
        helpCenterHeader.classList.remove("no-display");
        helpQuestionHeader.classList.add("no-display");
        helpSuggestions.classList.remove("no-display");
        helpAnswer.classList.add("no-display");
    });
  }
};

