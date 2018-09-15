<template>
  <div class="view-user-post pt+">
    <h4 class="tc-primary">Public Repositories</h4>
    <table class="mt+">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Url Repository</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(rep, rep_key) in repos" :key="rep_key">
          <td v-if="rep.id">{{rep.id}}</td>
          <td v-if="rep.full_name">{{rep.full_name}}</td>
          <td v-if="rep.html_url">{{rep.html_url}}</td>
        </tr>
      </tbody>
    </table>
    <s-pagination
      :disabled="false">
    </s-pagination>
    <div class="text-right mt+">
      <small>
        <a @click="$router.back()"><i class="ml fas fa-arrow-up"></i> Hide Repositories </a>
      </small>
    </div>
  </div>
</template>

<script>
import sPagination from './../components/sPagination';

export default {
  name: 'view-user-repos',
  data() {
    return {
      prevUser: [0],
    }
  },
  components: {
    sPagination,
  },
  methods: {
    
  },
  computed: {
    repos() {
      return this.$store.getters['ModuleUsers/GET_USER_REPOS'] || [];
    },
  },
}
</script>

<style scoped lang="scss">
  table {
    width: 100%;
    thead {
      line-height: 40px;
      border-bottom: 1px solid rgba($color: $grey, $alpha: .4);
      tr {
        th {
          padding: 0 6px;
          text-align: left;
          font-size: 14px;
          &:last-child {
            text-align: right;
          }
        }
      }
    }
    tbody {
      tr {
        line-height: 40px;
        &:not(:last-child) {
          border-bottom: 1px solid rgba($color: $grey, $alpha: .2);
        }
        &:hover {
          background-color: rgba($color: $grey, $alpha: .1);
          cursor: pointer;
        }
        td {
          font-size: 14px;
          padding: 0 6px;
          &:last-child {
            text-align: right;
          }
        }
      }
    }
  }
</style>
