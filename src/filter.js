import { Constants } from './constants';
import { Utils } from './utils';

export var Filter = {
    initialize() {
        var saveBtn = document.getElementsByClassName("save")[0],
            bigButtons = document.getElementsByClassName("big-button");


        saveBtn.addEventListener("touchstart", function(event) {
            Utils.gotoPage(Constants.pages.search);
        });

        Array.prototype.slice.call(bigButtons).forEach(function(button) {
            button.addEventListener("touchstart", function() {
                Utils.gotoPage(Constants.pages.filter);

            });
        });
    }
};
