import {Constants} from './constants';
import {Chat} from './chat';
import {Help} from './help';
import {Home} from './home';
import {Index} from './index';
import {Invite} from './invite';
import {Search} from './search';
import {Profile} from './profile';
import {Listing} from './listing';
import {Utils} from './utils';

let app = {
  getCurrentPage() {
    return window.location.pathname;
  },

  initialize() {
    switch (Utils.getCurrentPage()) {
      case Constants.pages.index:
        Index.initialize();
        break;
      case Constants.pages.invite:
        Invite.initialize();
        break;
      case Constants.pages.home:
        Home.initialize();
        break;
      case Constants.pages.chat:
        Chat.initialize();
        break;
      case Constants.pages.help:
        Help.initialize();
        break;
      case Constants.pages.search:
        Search.initialize();
        break;
      case Constants.pages.profile:
        Profile.initialize();
        break;
      case Constants.pages.listing:
        Listing.initialize();
        break;
      default:
        Index.initialize();
        break;
    }
  }
};

app.initialize();
