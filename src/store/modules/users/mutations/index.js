const mutations = {
  SET_USERS_LIST: (scope, { users }) => {
    scope.usersList = users;
  },
  SET_USER_DETAIL: (scope, { user }) => {
    scope.userDetail = user;
  },
  SET_REPOS: (scope, { repos }) => {
    scope.userRepos = repos;
  },
  SET_LOADING: (scope, { loading }) => {
    scope.loading = loading;
  },
}
// Export
export default mutations;