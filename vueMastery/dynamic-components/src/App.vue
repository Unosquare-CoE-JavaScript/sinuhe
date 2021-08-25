<template>
  <select v-model="componentName">
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>
  <keep-alive>
    <component :is="componentName"></component>
  </keep-alive>
</template>

<script>
import About from './components/About.vue'
import Home from './components/Home.vue'
export default {
  name: 'App',
  components: {
    About,
    Home
  },
  data() {
    return {
      componentName: 'Home'
    }
  }
}
</script>
