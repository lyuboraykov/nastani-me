import {Constants} from './constants';
import {Utils} from './utils';

export var Reservation = {
  initialize() {
    var backButton = document.getElementById('back-icon'),
        increaseButton = document.getElementById('increase'),
        decreaseButton = document.getElementById('decrease'),
        numberGuestsDisplay = document.getElementById('number-guests'),
        numberGuests = 1,
        bookButton = document.getElementById('book-btn'),
        confirmDialog = document.getElementById('confirm-dialog'),
        dialogButtons = document.getElementsByClassName('dialog-btn');

    backButton.addEventListener('click', function() {
      Utils.gotoPage(Constants.pages.home);
    });

    bookButton.addEventListener('click', function() {
        confirmDialog.classList.remove('no-display');
    });

    [].forEach.call(dialogButtons, function(el) {
      el.addEventListener("click", function(event) {
          Utils.gotoPage(Constants.pages.home);
      });
    });

    increaseButton.addEventListener('click', function() {
        numberGuests += 1;
        numberGuestsDisplay.innerHTML = numberGuests + ' guests';
    });

    decreaseButton.addEventListener('click', function() {
        numberGuests = numberGuests != 1 ? numberGuests - 1 : 1;
        numberGuestsDisplay.innerHTML = numberGuests + ' guests';
    });
  }
};
