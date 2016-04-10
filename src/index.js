import {Constants} from './constants';
import {Utils} from './utils';

export var Index = {
  initialize() {
    let initialPageButtons = document.querySelectorAll("#initial-page .login-buttons"),
        initialPage = document.getElementById("initial-page"),
        initialHeader = document.getElementById("main-header"),
        loginPage = document.getElementById("reg-login-page"),
        exitButton = document.getElementsByClassName("exit-button")[0],
        fbButton = document.getElementsByClassName("fb")[0];

    [].forEach.call(initialPageButtons, button => {
      button.addEventListener("click", event => {
        let buttonText = this.innerText;
        let action = Constants.indexActions.logIn;
        if (buttonText === 'Create an account') {
          action = Constants.indexActions.signUp;
        }
        let nameInputs = document.querySelectorAll('#login-email input[type="text"]');

        if (action === Constants.indexActions.logIn) {
          Utils.toggleClassOfElements(nameInputs, 'hidden');
        } else {
          Utils.toggleClassOfElements(nameInputs, 'hidden', Utils.classActions.remove);
        }

        document.getElementById("action").innerText = "Quickly " + action + " with:";
        initialPage.classList.add("blur-page");
        Utils.toggleClassOfElements(initialPageButtons, 'hidden');
        initialHeader.classList.add("hidden");
        loginPage.classList.remove("hidden");
      });
    });

    exitButton.addEventListener("click", () => {
      loginPage.classList.add("hidden");
      initialPage.classList.remove("blur-page");
      initialHeader.classList.remove("hidden");
      Utils.toggleClassOfElements(initialPageButtons, 'hidden', Utils.classActions.remove);
    });


    fbButton.addEventListener("click", () => {
      window.location.href = Constants.pages.home;
    });

  }
};
