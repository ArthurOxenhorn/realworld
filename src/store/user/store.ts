import {makeAutoObservable} from 'mobx';

import {User} from './types';

class Store {
  isLoading = true;
  error?: string = undefined;
  user?: User = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  getUser() {
    return this.user;
  }

  setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setUser(user?: User) {
    this.user = user;
  }

  setError(error?: string) {
    this.error = error;
  }

  forgetUser() {
    this.user = undefined;
  }
}

export default new Store();
