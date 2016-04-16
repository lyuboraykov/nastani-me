import {Constants} from './constants';
import {Utils} from './utils';

export var Invite = {
  initialize() {
    let backButton = document.getElementById("back-icon");

    backButton.addEventListener("click", () => {
      Utils.gotoPage(Constants.pages.home);
    });

  }
};
