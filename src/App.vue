<template>
  <div class="app pb+">
    <div class="container pb+">
      <header class="p+">
        <h1>Shaw: Test Frontend</h1>
        <h4><i class="fab fa-github"></i> GitHub Users</h4>
      </header>
      <section class="body p+">
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">
  body {
    width: 100%;
  }
  .app {
    display: block;
    width: 100%;
    > .container {
      margin: 0 auto;
      width: 100%;
      @include mq($from: wide) {
        width: 960px;
      }
      @include mq($from: desktop, $until: wide) {
        width: 860px;
      }
      > .body {
        background-color: rgba($color: $grey, $alpha: .1);
      }
    }
  }
</style>
