<template>
  <button
    :class="`btn btn-${size} btn-${type}`"
    :disabled="disabled"
    @click.prevent="callback($event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 's-button',
  props: {
    size: {
      type: String,
      default: 'md',
    },
    type: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    // Action
    onClick: {
      type: Function,
    },
  },
  methods: {
    callback(e) {
      this.$emit('click', e);
    }
  }
}
</script>

<style scoped lang="scss">
  .btn {
    border: none;
    border-radius: 2pt;
    cursor: pointer;
    font-weight: 600;
    // Colors
    &-primary {
      background-color: $primary;
      color: $white;
      &:hover {
        background-color: $primary-ho;
      }
    }
    &-default {
      background-color: $white;
      border: 1px solid rgba($color: $grey, $alpha: .1);
      color: $black;
    }
    // Sizes
    &-small {
      line-height: 16px;
      font-size: 12px;
      padding: .4em 1em;
    }
  }
</style>
