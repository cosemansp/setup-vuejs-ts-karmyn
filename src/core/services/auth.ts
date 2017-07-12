import { eventAggregator } from './eventAggregator';

export class AuthService {
  public identity = {
    name: 'anonymous',
    authenticated: false,
  };

  login(userName, passw) {
    //
    // add here custom logic to login
    //

    this.identity = {
      name: userName,
      authenticated: true,
    };
    eventAggregator.publish('USER_LOGIN', this.identity);
  }

  logout() {
    //
    // add here custom logic to logout
    //
    this.identity = {
      name: 'anonymous',
      authenticated: false,
    };
    eventAggregator.publish('USER_LOGOUT');
  }
}

export default new AuthService();
