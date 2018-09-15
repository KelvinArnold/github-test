<template>
  <div class="view-user-detail pb+">
    <header>
      <small>
        <router-link
          :to="`/users/`">
          <i class="fas fa-arrow-left"></i> Back to User list
        </router-link>
      </small>
      <h4 class="tc-primary mt">User
        <strong>{{$route.params.id}}</strong>
      </h4>
    </header>
    <div class="s-flex-row s-flex-wrap mb+ mt">
      <s-input
        class="s-col-6"
        :disabled="true"
        :label="'Login'"
        :name="'label'"
        :value="user.login"></s-input>
      <s-input
        class="s-col-6"
        :disabled="true"
        :label="'Login Creation'"
        :name="'label'"
        :value="user.created_at"></s-input>
      <s-input
        class="s-col-12"
        :disabled="true"
        :label="'Url Profile'"
        :name="'label'"
        :value="user.html_url"></s-input>
    </div>
    <s-button
      v-on:click="showPosts($route.params.id)"
      :size="'small'">
      Show Posts <i class="ml fas fa-arrow-down"></i>
    </s-button>
    <router-view></router-view>
  </div>
</template>

<script>
import sButton from './../components/sButton';
import sInput from './../components/sInput';

export default {
  name: 'ViewUserDetail',
  components: {
    sButton,
    sInput,
  },
  methods: {
    showPosts(_id) {
      this.$store.dispatch(
        'ModuleUsers/GET_POST_BY_ID',
        {
          id: this.$route.params.id,
          page: 1,
          per_page: 10,
        });
      // Show Post
      this.$router.push({
        path: `/user/${_id}/posts/`,
      });
    },
  },
  mounted() {
    this.$store.dispatch(
      'ModuleUsers/GET_USER_BY_ID',
      this.$route.params.id);
  },
  computed: {
    user() {
      return this.$store.getters[
        'ModuleUsers/GET_USER_DETAIL'] || [];
    },
  },
}
</script>

<style scoped lang="scss">
  
</style>
