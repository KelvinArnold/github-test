<template>
  <div class="view-users">
    <header class="mb+">
      <h4 class="tc-primary">Github User list</h4>
    </header>
    <section class="body">
      <s-user-list
        :columns="['#', 'username']"
        :tdata="users">
      </s-user-list>
    </section>
  </div>
</template>

<script>
import sUserList from './../components/sUserList.vue';

export default {
  name: 'ViewUsers',
  data() {
    return {}
  },
  components: {
    sUserList,
  },
  mounted() {
    this.$store.dispatch('ModuleUsers/GET_USERS', {
      last: null,
      page: 1,
      per_page: 10,
    });
  },
  computed: {
    users() {
      return this.$store.getters['ModuleUsers/GET_USERS'] || [];
    },
  },
}
</script>

<style>

</style>
