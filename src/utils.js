export var Utils = {
  classActions: {
    add: 'add',
    remove: 'remove'
  },

  toggleClassOfElements(elements, cssClass, action = 'add') {
    [].forEach.call(elements, element => {
      if (action === this.classActions.add) {
        element.classList.add(cssClass);
      }
      else {
        element.classList.remove(cssClass);
      }
    });
  },

  isInPhoneGap() {
    const FILE_PROTOCOL = 'file:',
          HTTP_PROTOCOL = 'http:';  // not used, just for completeness
    let currentProtocol = window.location.protocol;
    if (currentProtocol === FILE_PROTOCOL) {
      return true;  // Yippee ki-yay, motherfucker
    }
    return false;
  },

  getCurrentPage() {
    if (this.isInPhoneGap()) {
      // we only live once
      let currentLocation = window.location.href,
          currentLocationElements = currentLocation.split('/');
      return '/' + currentLocationElements[currentLocationElements.length - 1];
    }
    return window.location.pathname.replace('/', '');
  },

  gotoPage(page) {
    if (this.isInPhoneGap()) {
      // GO HARDCORE GO
      let currentPage = this.getCurrentPage();
      window.location.href = window.location.href.replace(currentPage, page);
    }
    else {
      // we're in browser, things work normally
      window.location.href = page;
    }
  }
};
