<template>
  <div class="s-pagination mt mb">
    <div class="s-flex-row s-justify-between pt+">
      <div class="s-pagination-info s-col-6 text-left">
        <small>Page <strong>{{page}}</strong></small>
      </div>
      <div class="s-pagination-pages s-col-6 text-right">
        <ul class="pages">
          <li @click.prevent="prevPage"><i class="fas fa-chevron-left"></i></li>
          <li @click.prevent="nextPage"><i class="fas fa-chevron-right"></i></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 's-pagination',
  data() {
    return {
      page: 1,
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    nextPage() {
      if (this.disabled) {
        return;
      }
      this.page += 1;
      this.$emit('next', this.page);
    },
    prevPage() {
      if (this.disabled) {
        return;
      }
      if (this.page === 1) {
        return;
      }
      this.page -= 1;
      this.$emit('prev', this.page);
    },
  }
}
</script>

<style lang="scss">
  .s-pagination {
    width: 100%;
    &-info {
      height: 35px;
      line-height: 35px;
    }
    &-pages {
      ul {
        list-style: none;
        height: 35px;
        line-height: 35px;
        li {
          display: inline-block;
          line-height: 35px;
          width: 35px;
          text-align: center;
          &:hover {
            background-color: rgba($color: $grey, $alpha: .1);
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
