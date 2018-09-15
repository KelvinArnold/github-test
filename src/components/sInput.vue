<template>
  <div class="s-form-input">
    <label :for="name">{{label}}</label>
    <input type="text"
      :class="{'disabled': disabled}"
      :value="value"
      :id="name"
      :name="name"
      :disabled="disabled"
      :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: 's-input',
  props: {
    name: {
      type: String,
      default: 'label',
    },
    label: {
      type: String,
      default: 'Label',
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style scoped lang="scss">
  .s {
    &-form {
      &-input {
        margin-bottom: .5em;
        margin-top: .5em;
        label {
          display: block;
          font-size: 12px;
          margin-left: .2em;
        }
        input {
          display: block;
          font-size: 14px;
          line-height: 32px;
          padding: .2em .6em;
          width: 100%;
          &.disabled {
            cursor: not-allowed;
            user-select: none;
          }
        }
      }
    }
  }
</style>
