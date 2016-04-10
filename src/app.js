import {Constants} from './constants';
import {Index} from './index';
import {Chat} from './chat';
import {Home} from './home';

let app = {
  getCurrentPage() {
    return window.location.pathname;
  },

  initialize() {
    switch (this.getCurrentPage()) {
      case Constants.pages.index:
        Index.initialize();
        break;
      case Constants.pages.home:
        Home.initialize();
        break;
      case Constants.pages.chat:
        Chat.initialize();
        break;
      default:
        Index.initialize();
        break;
    }
  }
};

app.initialize();
