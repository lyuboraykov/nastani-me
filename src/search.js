import {Constants} from './constants';
import {Utils} from './utils';

export var Search = {
  initialize() {
    var backButton = document.getElementById("back-icon"),
    	searchfield = document.getElementById("searchfield");

    backButton.addEventListener("click", function() {
      Utils.gotoPage(Constants.pages.home);
    });

    searchfield.addEventListener("input", function(event) {
    	var value = event.target.value;

    	if (value.toUpperCase() === "LONDON") {
    		alert("hello");
    	}
    });

  }
};
