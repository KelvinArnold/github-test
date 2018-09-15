<template>
  <div class="s-user-list">
    <table class="mb+">
      <thead>
        <tr>
          <th v-for="(col, index) in columns" :key="index">{{col}}</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="tdata.length">
        <tr
          v-for="(row, row_key) in tdata"
          :key="row_key">
          <td v-if="row.id">{{row.id}}</td>
          <td v-if="row.login">{{row.login}}</td>
          <td class="text-right">
            <s-button
              v-on:click="showUserDetail(row)"
              :size="'small'">
              Ver mais
            </s-button>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr class="text-center">
          <td :colspan="columns.length">{{customMessage}}</td>
        </tr>
      </tbody>
    </table>
    <s-pagination
      :disabled="false"
      v-on:next="nextPage"
      v-on:prev="prevPage">
    </s-pagination>
  </div>
</template>

<script>
import sButton from './sButton';
import sPagination from './sPagination';

export default {
  name: 's-user-list',
  data() {
    return {
      columns: [
        'Id',
        'Login',
      ],
      prevUser: [0],
      page: 1,
    }
  },
  props: {
    tdata: {
      type: Array,
      default: () => [],
    },
    customMessage: {
      type: String,
      default: 'Data not found',
    },
    actions: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    sButton,
    sPagination,
  },
  methods: {
    showUserDetail(_user) {
      this.$router.push({
        name: 'user',
        params: {
          id: _user.login,
        },
      })
    },
    nextPage(_page) {
      if (!this.prevUser.includes(this.last)) {
        this.prevUser.push(this.last);
      }
      this.$store.dispatch('ModuleUsers/GET_USERS', {
        last: this.last,
        page: _page,
        per_page: 10,
      });
    },
    prevPage(_page) {
      this.$store.dispatch('ModuleUsers/GET_USERS', {
        last: this.prevUser[_page - 1],
        page: _page,
        per_page: 10,
      });
    },
  },
  computed: {
    last() {
      const last = this.tdata[this.tdata.length - 1];
      return last ? last.id : 0;
    }
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
          font-size: 14px;
          padding: 0 6px;
          text-align: left;
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
          background-color: rgba($color: $grey, $alpha: .05);
          cursor: pointer;
        }
        td {
          font-size: 14px;
          padding: 0 6px;
        }
      }
    }
  }
</style>
