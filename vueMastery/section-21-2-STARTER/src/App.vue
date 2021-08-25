<template>
  <div id="app">
    <div class="scrollPosition">{{ offset }}</div>
  </div>
</template>

<script>
import mixin from './mixin';

export default {
  data() {
    return {
      offset: 1000,
    };
  },
  name: 'App',
  mixins: [mixin],
  mounted() {
    console.log('App mounted lifecycle');
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 3000px;
  position: relative;
}
.scrollPosition{
  position:fixed;
  left: 10px;
  right: 10px;
}
</style>
