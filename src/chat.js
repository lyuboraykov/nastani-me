import {Constants} from './constants';
import {Utils} from './utils';

export var Chat = {
  initialize() {
    var backButton = document.getElementById("back-icon");

    backButton.addEventListener("click", function() {
      Utils.gotoPage(Constants.pages.home);
    });
  }
};
