import HTTP from './../../../../service/http';

const actions = {
  async GET_USERS({commit}, pagination) {
    commit('SET_LOADING', { loading: true });
    const resp = await new Promise((resolve, reject) => {
      HTTP.get('/users', {
        params: {
          since: pagination.last,
          page: pagination.page,
          per_page: pagination.per_page,
          client_id: '13b5b5228d31eaee9909',
          client_secret: 'f5efea4e95bfb4a6e0b645ab24f425a24648d1c5'
        }
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(e => {
        reject(e);
      })
    });
    commit('SET_USERS_LIST', { users: resp });
    commit('SET_LOADING', { loading: false });
  },
  async GET_USER_BY_ID({commit}, id) {
    commit('SET_LOADING', { loading: true });
    const resp = await new Promise((resolve, reject) => {
      HTTP.get(`/users/${id}`, {
        params: {
          client_id: '13b5b5228d31eaee9909',
          client_secret: 'f5efea4e95bfb4a6e0b645ab24f425a24648d1c5'
        }
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(e => {
        reject(e);
      })
    });
    commit('SET_USER_DETAIL', { user: resp });
    commit('SET_LOADING', { loading: false });
  },
  async GET_POST_BY_ID({commit}, config) {
    commit('SET_LOADING', { loading: true });
    const resp = await new Promise((resolve, reject) => {
      HTTP.get(`/users/${config.id}/repos`, {
        params: {
          page: config.page,
          per_page: config.per_page,
          client_id: '13b5b5228d31eaee9909',
          client_secret: 'f5efea4e95bfb4a6e0b645ab24f425a24648d1c5'
        }
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(e => {
        reject(e);
      })
    });
    commit('SET_REPOS', { repos: resp });
    commit('SET_LOADING', { loading: false });
  },
}
// Export
export default actions;