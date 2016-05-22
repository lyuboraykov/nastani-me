(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _constants = require('./constants');

var _chat = require('./chat');

var _help = require('./help');

var _home = require('./home');

var _index = require('./index');

var _invite = require('./invite');

var _search = require('./search');

var _profile = require('./profile');

var _listing = require('./listing');

var _reservation = require('./reservation');

var _filter = require('./filter');

var _utils = require('./utils');

var app = {
  getCurrentPage: function getCurrentPage() {
    return window.location.pathname;
  },
  initialize: function initialize() {
    switch (_utils.Utils.getCurrentPage()) {
      case _constants.Constants.pages.index:
        _index.Index.initialize();
        break;
      case _constants.Constants.pages.invite:
        _invite.Invite.initialize();
        break;
      case _constants.Constants.pages.home:
        _home.Home.initialize();
        break;
      case _constants.Constants.pages.chat:
        _chat.Chat.initialize();
        break;
      case _constants.Constants.pages.help:
        _help.Help.initialize();
        break;
      case _constants.Constants.pages.search:
        _search.Search.initialize();
        break;
      case _constants.Constants.pages.profile:
        _profile.Profile.initialize();
        break;
      case _constants.Constants.pages.listing:
        _listing.Listing.initialize();
        break;
      case _constants.Constants.pages.reservation:
        _reservation.Reservation.initialize();
        break;
      case _constants.Constants.pages.filter:
        _filter.Filter.initialize();
        break;
      default:
        _index.Index.initialize();
        break;
    }
  }
};

app.initialize();

},{"./chat":2,"./constants":3,"./filter":4,"./help":5,"./home":6,"./index":7,"./invite":8,"./listing":9,"./profile":10,"./reservation":11,"./search":12,"./utils":13}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chat = undefined;

var _constants = require('./constants');

var _utils = require('./utils');

var Chat = exports.Chat = {
  initialize: function initialize() {
    var backButton = document.getElementById("back-icon");

    backButton.addEventListener("click", function () {
      _utils.Utils.gotoPage(_constants.Constants.pages.home);
    });
  }
};

},{"./constants":3,"./utils":13}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Constants = exports.Constants = {
  indexActions: {
    logIn: 'log in',
    signUp: 'sign up'
  },

  pages: {
    home: 'home.html',
    chat: 'chat.html',
    help: 'help.html',
    invite: 'invite.html',
    search: 'search.html',
    profile: 'profile.html',
    listing: 'listing.html',
    reservation: 'reservation.html',
    filter: 'filter.html',
    index: ''
  },

  storageKey: "nastani.me.last.page"
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Filter = undefined;

var _constants = require('./constants');

var _utils = require('./utils');

var Filter = exports.Filter = {
    initialize: function initialize() {
        var saveBtn = document.getElementsByClassName("save")[0],
            bigButtons = document.getElementsByClassName("big-button");

        saveBtn.addEventListener("touchstart", function (event) {
            _utils.Utils.gotoPage(_constants.Constants.pages.search);
        });

        Array.prototype.slice.call(bigButtons).forEach(function (button) {
            button.addEventListener("touchstart", function () {
                _utils.Utils.gotoPage(_constants.Constants.pages.filter);
            });
        });
    }
};

},{"./constants":3,"./utils":13}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Help = undefined;

var _constants = require('./constants');

var _utils = require('./utils');

var Help = exports.Help = {
    initialize: function initialize() {
        var backButtonMain = document.getElementById("back-icon-main"),
            backButton = document.getElementById("back-icon"),
            helpSuggestion = document.getElementById("help-suggestion"),
            helpCenterHeader = document.getElementById("help-center"),
            helpQuestionHeader = document.getElementById("help-question"),
            helpSuggestions = document.getElementById("help-suggestions"),
            helpAnswer = document.getElementById("help-answer");

        backButtonMain.addEventListener("click", function () {
            _utils.Utils.gotoPage(_constants.Constants.pages.home);
        });

        helpSuggestion.addEventListener("click", function () {
            helpCenterHeader.classList.add("no-display");
            helpQuestionHeader.classList.remove("no-display");
            helpSuggestions.classList.add("no-display");
            helpAnswer.classList.remove("no-display");
        });

        backButton.addEventListener("click", function () {
            helpCenterHeader.classList.remove("no-display");
            helpQuestionHeader.classList.add("no-display");
            helpSuggestions.classList.remove("no-display");
            helpAnswer.classList.add("no-display");
        });
    }
};

},{"./constants":3,"./utils":13}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = undefined;

var _constants = require('./constants');

var _utils = require('./utils');

var Home = exports.Home = {
  initialize: function initialize() {
    var navIcons = document.getElementsByClassName("menu-icon"),
        pages = document.getElementsByClassName("page"),
        profile = document.getElementById("user-icon"),
        messagesThread = document.getElementById("thread1"),
        profileMenuItem = document.getElementById("profile-link"),
        listingMenuItem = document.getElementById("listing-link"),
        helpMenuItem = document.getElementById("help-link"),
        inviteMenuItem = document.getElementById("invite-link"),
        placeDetailsIcons = document.querySelectorAll(".place-preview > i"),
        detailsBack = document.getElementById("details-back"),
        swipeBackPages = document.getElementsByClassName("swipe-back"),
        searchIcon = document.getElementById("search-icon");

    [].forEach.call(navIcons, function (el) {
      el.addEventListener("touchstart", function (event) {
        if (event.target.id === "user-icon") {
          return;
        }

        [].forEach.call(pages, function (page) {
          page.classList.add("hidden");
        });
        document.getElementById(this.id.split("-")[0]).classList.remove("hidden");
        document.getElementById("place-details").classList.remove("bigger-index");
        document.getElementById("animate-details").classList.remove("details-animation");
        document.getElementsByClassName("reds-clicked")[0].classList.remove("reds-clicked");
        this.classList.add("reds-clicked");

        if (this.id !== "user-menu") {
          document.getElementById("user-menu").classList.remove("animate-user");
        }
      });
    });

    [].forEach.call(placeDetailsIcons, function (el) {
      el.addEventListener("touchstart", function (event) {
        var element = this.parentElement.parentElement.getElementsByClassName("place-location")[0],
            heading = document.getElementsByClassName("details-h1")[0],
            icon = heading.getElementsByTagName("i")[0];

        heading.innerHTML = "";
        heading.appendChild(icon);
        heading.innerHTML += element.textContent;

        document.getElementById("place-details").classList.add("bigger-index");
        document.getElementById("animate-details").classList.add("details-animation");
      });
    });

    document.getElementById("place-details-header").addEventListener("touchstart", function (event) {
      document.getElementById("animate-details").classList.remove("details-animation");
      // hacking the DOM is good skill to have
      setTimeout(function () {
        document.getElementById("place-details").classList.remove("bigger-index");
      }, 500);
    });

    profile.addEventListener("touchstart", function () {
      document.getElementById("animate-child").classList.add("animate-user");
      document.getElementById("home-main").classList.add("blur-page");
      document.getElementById("user-menu").classList.add("bigger-index");

      setTimeout(function () {
        document.getElementById("home-main").addEventListener("touchstart", blurListener);
      }, 0);
    });

    function blurListener(event) {
      document.getElementById("home-main").removeEventListener("touchstart", blurListener);

      if (event.target.id !== "user-menu") {
        document.getElementById("animate-child").classList.remove("animate-user");
        document.getElementById("home-main").classList.remove("blur-page");
        document.getElementById("user-menu").classList.remove("bigger-index");
      } else {
        return;
      }
    }

    messagesThread.addEventListener("touchstart", function () {
      localStorage.setItem(_constants.Constants.storageKey, "messages");
      _utils.Utils.gotoPage(_constants.Constants.pages.chat);
    });

    profileMenuItem.addEventListener("touchstart", function () {
      localStorage.setItem(_constants.Constants.storageKey, "user");
      _utils.Utils.gotoPage(_constants.Constants.pages.profile);
    });

    listingMenuItem.addEventListener("touchstart", function () {
      localStorage.setItem(_constants.Constants.storageKey, "user");
      _utils.Utils.gotoPage(_constants.Constants.pages.listing);
    });

    helpMenuItem.addEventListener("touchstart", function () {
      localStorage.setItem(_constants.Constants.storageKey, "user");
      _utils.Utils.gotoPage(_constants.Constants.pages.help);
    });

    inviteMenuItem.addEventListener("touchstart", function () {
      localStorage.setItem(_constants.Constants.storageKey, "user");
      _utils.Utils.gotoPage(_constants.Constants.pages.invite);
    });

    searchIcon.addEventListener("click", function () {
      _utils.Utils.gotoPage(_constants.Constants.pages.search);
      localStorage.setItem(_constants.Constants.storageKey, "home");
    });

    if (localStorage.getItem(_constants.Constants.storageKey)) {
      var value = localStorage.getItem(_constants.Constants.storageKey);
      document.getElementById(value + "-icon").click();
    }
  }
};

},{"./constants":3,"./utils":13}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Index = undefined;

var _constants = require('./constants');

var _utils = require('./utils');

var Index = exports.Index = {
  initialize: function initialize() {
    var _this = this;

    var initialPageButtons = document.querySelectorAll("#initial-page .login-buttons"),
        initialPage = document.getElementById("initial-page"),
        initialHeader = document.getElementById("main-header"),
        loginPage = document.getElementById("reg-login-page"),
        exitButton = document.getElementsByClassName("exit-button")[0],
        fbButton = document.getElementsByClassName("fb")[0];

    [].forEach.call(initialPageButtons, function (button) {
      button.addEventListener("click", function (event) {
        var buttonText = _this.innerText;
        var action = _constants.Constants.indexActions.logIn;
        if (buttonText === 'Create an account') {
          action = _constants.Constants.indexActions.signUp;
        }
        var nameInputs = document.querySelectorAll('#login-email input[type="text"]');

        if (action === _constants.Constants.indexActions.logIn) {
          _utils.Utils.toggleClassOfElements(nameInputs, 'hidden');
        } else {
          _utils.Utils.toggleClassOfElements(nameInputs, 'hidden', _utils.Utils.classActions.remove);
        }

        document.getElementById("action").innerText = "Quickly " + action + " with:";
        initialPage.classList.add("blur-page");
        _utils.Utils.toggleClassOfElements(initialPageButtons, 'hidden');
        initialHeader.classList.add("hidden");
        loginPage.classList.remove("hidden");
      });
    });

    exitButton.addEventListener("click", function () {
      loginPage.classList.add("hidden");
      initialPage.classList.remove("blur-page");
      initialHeader.classList.remove("hidden");
      _utils.Utils.toggleClassOfElements(initialPageButtons, 'hidden', _utils.Utils.classActions.remove);
    });

    fbButton.addEventListener("click", function () {
      _utils.Utils.gotoPage(_constants.Constants.pages.home);
    });
  }
};

},{"./constants":3,"./utils":13}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Invite = undefined;

var _constants = require('./constants');

var _utils = require('./utils');

var Invite = exports.Invite = {
  initialize: function initialize() {
    var backButton = document.getElementById("back-icon");

    backButton.addEventListener("click", function () {
      _utils.Utils.gotoPage(_constants.Constants.pages.home);
    });
  }
};

},{"./constants":3,"./utils":13}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Listing = undefined;

var _constants = require('./constants');

var _utils = require('./utils');

var Listing = exports.Listing = {
    initialize: function initialize() {
        var backButton = document.getElementById("back-icon"),
            step1Opts = document.getElementsByClassName("step1opt"),
            step2Opts = document.getElementsByClassName("step2opt"),
            next = document.getElementById("listing-next"),
            publish = document.getElementById("listing-publish"),
            currentStep = 1;

        function gotoStep(n) {
            var header = document.getElementById("listing-h1"),
                title = header.children[header.children.length - 1];
            if (n === 1) {
                title.innerHTML = "List your space";
            } else if (n === 2) {
                title.innerHTML = "Property type";
            } else if (n === 3) {
                title.innerHTML = "Location";
            } else if (n === 4) {
                title.innerHTML = "Rooms & beds";
            }

            for (var i = 1; i < 5; i++) {
                var step = document.getElementById("listing-step-" + i.toString());
                if (i === n) {
                    step.classList.remove("no-display");
                } else {
                    step.classList.add("no-display");
                }
            }
            currentStep = n;
        }

        backButton.addEventListener("click", function () {
            if (currentStep === 1) {
                _utils.Utils.gotoPage(_constants.Constants.pages.home);
            } else {
                gotoStep(currentStep - 1);
            }
        });

        [].forEach.call(step1Opts, function (el) {
            el.addEventListener("click", function (event) {
                var name = this.children[this.children.length - 1].innerHTML.toLowerCase(),
                    question2 = document.getElementById("q2");
                question2.innerHTML = "<h1>What type of place is your " + name + " in?</h1>";
                gotoStep(2);
            });
        });

        [].forEach.call(step2Opts, function (el) {
            el.addEventListener("click", function (event) {
                gotoStep(3);
            });
        });

        next.addEventListener("click", function () {
            gotoStep(4);
        });

        publish.addEventListener("click", function () {
            gotoStep(1);
            _utils.Utils.gotoPage(_constants.Constants.pages.home);
        });
    }
};

},{"./constants":3,"./utils":13}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Profile = undefined;

var _constants = require('./constants');

var _utils = require('./utils');

var Profile = exports.Profile = {
    initialize: function initialize() {
        var backButton = document.getElementById("back-icon"),
            backEditButton = document.getElementById("back-edit-icon"),
            editButton = document.getElementById("edit-icon"),
            content = document.getElementById("profile-content"),
            edit = document.getElementById("profile-edit"),
            headerMain = document.getElementById("profile-header-main"),
            headerEdit = document.getElementById("profile-header-edit");

        backButton.addEventListener("click", function () {
            _utils.Utils.gotoPage(_constants.Constants.pages.home);
        });

        editButton.addEventListener("click", function () {
            edit.classList.remove("no-display");
            content.classList.add("no-display");

            headerMain.classList.add("no-display");
            headerEdit.classList.remove("no-display");
        });

        backEditButton.addEventListener("click", function () {
            edit.classList.add("no-display");
            content.classList.remove("no-display");

            headerMain.classList.remove("no-display");
            headerEdit.classList.add("no-display");
        });
    }
};

},{"./constants":3,"./utils":13}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Reservation = undefined;

var _constants = require('./constants');

var _utils = require('./utils');

var Reservation = exports.Reservation = {
    initialize: function initialize() {
        var backButton = document.getElementById('back-icon'),
            increaseButton = document.getElementById('increase'),
            decreaseButton = document.getElementById('decrease'),
            numberGuestsDisplay = document.getElementById('number-guests'),
            numberGuests = 1,
            bookButton = document.getElementById('book-btn'),
            confirmDialog = document.getElementById('confirm-dialog'),
            dialogButtons = document.getElementsByClassName('dialog-btn');

        backButton.addEventListener('click', function () {
            _utils.Utils.gotoPage(_constants.Constants.pages.home);
        });

        bookButton.addEventListener('click', function () {
            confirmDialog.classList.remove('no-display');
        });

        [].forEach.call(dialogButtons, function (el) {
            el.addEventListener("click", function (event) {
                _utils.Utils.gotoPage(_constants.Constants.pages.home);
            });
        });

        increaseButton.addEventListener('click', function () {
            numberGuests += 1;
            numberGuestsDisplay.innerHTML = numberGuests + ' guests';
        });

        decreaseButton.addEventListener('click', function () {
            numberGuests = numberGuests != 1 ? numberGuests - 1 : 1;
            numberGuestsDisplay.innerHTML = numberGuests + ' guests';
        });
    }
};

},{"./constants":3,"./utils":13}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Search = undefined;

var _constants = require('./constants');

var _utils = require('./utils');

var Search = exports.Search = {
    initialize: function initialize() {
        var backButton = document.getElementById("back-icon"),
            searchfield = document.getElementById("searchfield"),
            searchButton = document.getElementById("search-nearby"),
            detailsPage = document.getElementById("search-details"),
            houseDetails = document.getElementById("house-details"),
            image = document.getElementsByClassName("post-image")[0],
            bookBtn = document.getElementsByClassName("book-btn")[0],
            bigButtons = document.getElementsByClassName("big-button"),
            houseDetailsBack = document.querySelectorAll("#house-details .fa-arrow-left")[0],
            detailsBack = document.querySelectorAll("#search-details .fa-arrow-left")[0];

        backButton.addEventListener("touchstart", function (event) {
            _utils.Utils.gotoPage(_constants.Constants.pages.home);
        });

        searchButton.addEventListener("touchstart", function (event) {
            detailsPage.classList.add("z-index");
            detailsPage.children[0].classList.add("animate-transform");
        });

        detailsBack.addEventListener("touchstart", function (event) {
            detailsPage.children[0].classList.remove("animate-transform");
            setTimeout(function () {
                detailsPage.classList.remove("z-index");
            }, 300);
        });

        image.addEventListener("touchstart", function (event) {
            houseDetails.classList.add("z-index");
            houseDetails.children[0].classList.add("animate-transform");
            houseDetails.children[0].style.backgroundColor = "#f0f0f0";
            setTimeout(function () {
                houseDetails.style.backgroundColor = "#f0f0f0";
            }, 300);
        });

        houseDetailsBack.addEventListener("touchstart", function (event) {
            houseDetails.style.backgroundColor = "transparent";
            houseDetails.children[0].classList.remove("animate-transform");
            setTimeout(function () {
                houseDetails.classList.remove("z-index");
            }, 300);
        });

        bookBtn.addEventListener("touchstart", function () {
            _utils.Utils.gotoPage(_constants.Constants.pages.reservation);
        });

        Array.prototype.slice.call(bigButtons).forEach(function (button) {
            button.addEventListener("touchstart", function () {
                _utils.Utils.gotoPage(_constants.Constants.pages.filter);
            });
        });
    }
};

},{"./constants":3,"./utils":13}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Utils = exports.Utils = {
  classActions: {
    add: 'add',
    remove: 'remove'
  },

  toggleClassOfElements: function toggleClassOfElements(elements, cssClass) {
    var _this = this;

    var action = arguments.length <= 2 || arguments[2] === undefined ? 'add' : arguments[2];

    [].forEach.call(elements, function (element) {
      if (action === _this.classActions.add) {
        element.classList.add(cssClass);
      } else {
        element.classList.remove(cssClass);
      }
    });
  },
  isInPhoneGap: function isInPhoneGap() {
    var FILE_PROTOCOL = 'file:',
        HTTP_PROTOCOL = 'http:'; // not used, just for completeness
    var currentProtocol = window.location.protocol;
    if (currentProtocol === FILE_PROTOCOL) {
      return true; // Yippee ki-yay, motherfucker
    }
    return false;
  },
  isInGhPages: function isInGhPages() {
    var pathName = window.location.pathname;
    return pathName.indexOf('nastani-me/') !== -1;
  },
  getCurrentPage: function getCurrentPage() {
    if (this.isInPhoneGap()) {
      // we only live once
      var currentLocation = window.location.href,
          currentLocationElements = currentLocation.split('/');
      return currentLocationElements[currentLocationElements.length - 1];
    }
    if (this.isInGhPages()) {
      return window.location.pathname.replace('/nastani-me/', '');
    }
    return window.location.pathname.replace('/', '');
  },
  gotoPage: function gotoPage(page) {
    if (this.isInPhoneGap()) {
      // GO HARDCORE GO
      var currentPage = this.getCurrentPage();
      window.location.href = window.location.href.replace(currentPage, page);
    } else {
      // we're in browser, things work normally
      window.location.href = page;
    }
  }
};

},{}]},{},[1]);
