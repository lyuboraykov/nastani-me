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
  }
};
