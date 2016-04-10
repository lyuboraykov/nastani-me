(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _constants = require('./constants');

var _index = require('./index');

var _chat = require('./chat');

var _home = require('./home');

var app = {
  getCurrentPage: function getCurrentPage() {
    return window.location.pathname;
  },
  initialize: function initialize() {
    switch (this.getCurrentPage()) {
      case _constants.Constants.pages.index:
        _index.Index.initialize();
        break;
      case _constants.Constants.pages.home:
        _home.Home.initialize();
        break;
      case _constants.Constants.pages.chat:
        _chat.Chat.initialize();
        break;
      default:
        _index.Index.initialize();
        break;
    }
  }
};

app.initialize();

},{"./chat":2,"./constants":3,"./home":4,"./index":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Chat = exports.Chat = {
  initialize: function initialize() {
    var backButton = document.getElementById("back-icon");

    backButton.addEventListener("click", function () {
      window.location.href = 'home.html';
    });
  }
};

},{}],3:[function(require,module,exports){
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
    index: '/'
  },

  storageKey: "nastani.me.last.page"
};

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = undefined;

var _constants = require("./constants");

var Home = exports.Home = {
  initialize: function initialize() {
    var navIcons = document.getElementsByClassName("menu-icon"),
        pages = document.getElementsByClassName("page"),
        profile = document.getElementById("user-icon"),
        messagesThread = document.getElementById("thread1");

    [].forEach.call(navIcons, function (el) {
      el.addEventListener("click", function (event) {
        if (event.target.id === "user-icon") {
          return;
        }

        [].forEach.call(pages, function (page) {
          page.classList.add("hidden");
        });
        document.getElementById(this.id.split("-")[0]).classList.remove("hidden");

        document.getElementsByClassName("reds-clicked")[0].classList.remove("reds-clicked");
        this.classList.add("reds-clicked");

        if (this.id !== "user-menu") {
          document.getElementById("user-menu").classList.remove("animate-user");
        }
      });
    });

    profile.addEventListener("click", function () {
      document.getElementById("animate-child").classList.add("animate-user");
      document.getElementById("home-main").classList.add("blur-page");
      document.getElementById("user-menu").classList.add("bigger-index");

      setTimeout(function () {
        document.getElementById("home-main").addEventListener("click", blurListener);
      }, 0);
    });

    function blurListener(event) {
      document.getElementById("home-main").removeEventListener("click", blurListener);

      if (event.target.id !== "user-menu") {
        document.getElementById("animate-child").classList.remove("animate-user");
        document.getElementById("home-main").classList.remove("blur-page");
        document.getElementById("user-menu").classList.remove("bigger-index");
      } else {
        return;
      }
    }

    messagesThread.addEventListener("click", function () {
      localStorage.setItem(_constants.Constants.storageKey, "messages");
      window.location.href = 'chat.html';
    });

    if (localStorage.getItem(_constants.Constants.storageKey)) {
      var value = localStorage.getItem(_constants.Constants.storageKey);
      document.getElementById(value + "-icon").click();
    }
  }
};

},{"./constants":3}],5:[function(require,module,exports){
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
      localStorage.setItem(_constants.Constants.storageKey, "home");
      window.location.href = _constants.Constants.pages.home;
    });
  }
};

},{"./constants":3,"./utils":6}],6:[function(require,module,exports){
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
  }
};

},{}]},{},[1]);
