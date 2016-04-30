import {Constants} from './constants';
import {Utils} from './utils';

export var Profile = {
  initialize() {
    var backButton = document.getElementById("back-icon"),
        backEditButton = document.getElementById("back-edit-icon"),
        editButton = document.getElementById("edit-icon"),
        content = document.getElementById("profile-content"),
        edit = document.getElementById("profile-edit"),
        headerMain = document.getElementById("profile-header-main"),
        headerEdit = document.getElementById("profile-header-edit");

    backButton.addEventListener("click", function() {
      Utils.gotoPage(Constants.pages.home);
    });

    editButton.addEventListener("click", function() {
        edit.classList.remove("no-display");
        content.classList.add("no-display");

        headerMain.classList.add("no-display");
        headerEdit.classList.remove("no-display");
    });

    backEditButton.addEventListener("click", function() {
        edit.classList.add("no-display");
        content.classList.remove("no-display");

        headerMain.classList.remove("no-display");
        headerEdit.classList.add("no-display");
    });
  }
};
