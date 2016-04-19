(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _constants = require('./constants');

var _chat = require('./chat');

var _help = require('./help');

var _home = require('./home');

var _index = require('./index');

var _invite = require('./invite');

var _search = require('./search');

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
      default:
        _index.Index.initialize();
        break;
    }
  }
};

app.initialize();

},{"./chat":2,"./constants":3,"./help":4,"./home":5,"./index":6,"./invite":7,"./search":8,"./utils":9}],2:[function(require,module,exports){
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

},{"./constants":3,"./utils":9}],3:[function(require,module,exports){
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
    home: '/home.html',
    chat: '/chat.html',
    help: '/help.html',
    invite: '/invite.html',
    search: '/search.html',
    index: '/'
  },

  storageKey: "nastani.me.last.page"
};

},{}],4:[function(require,module,exports){
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

},{"./constants":3,"./utils":9}],5:[function(require,module,exports){
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
            heading = document.getElementsByClassName("details-h1")[0];

        heading.innerText = element.innerText;

        document.getElementById("place-details").classList.add("bigger-index");
        document.getElementById("animate-details").classList.add("details-animation");
      });
    });

    detailsBack.addEventListener("touchstart", function () {
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

},{"./constants":3,"./utils":9}],6:[function(require,module,exports){
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

},{"./constants":3,"./utils":9}],7:[function(require,module,exports){
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

},{"./constants":3,"./utils":9}],8:[function(require,module,exports){
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
        searchfield = document.getElementById("searchfield");

    backButton.addEventListener("click", function () {
      _utils.Utils.gotoPage(_constants.Constants.pages.home);
    });

    searchfield.addEventListener("input", function (event) {
      var value = event.target.value;

      if (value.toUpperCase() === "LONDON") {
        alert("hello");
      }
    });
  }
};

},{"./constants":3,"./utils":9}],9:[function(require,module,exports){
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
  getCurrentPage: function getCurrentPage() {
    if (this.isInPhoneGap()) {
      // we only live once
      var currentLocation = window.location.href,
          currentLocationElements = currentLocation.split('/');
      return '/' + currentLocationElements[currentLocationElements.length - 1];
    }
    return window.location.pathname;
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
