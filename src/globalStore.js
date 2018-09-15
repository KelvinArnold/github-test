import store from './store';

const globalStore = {
  store,
  install(Vue) {
    const v = Vue;
    v.prototype.$store = store;
  },
};

export default globalStore;
