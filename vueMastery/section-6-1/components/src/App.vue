<template>
  <h3>Hey!</h3>
  <Greeting :age="age"></Greeting>
  <User :age="age" @ageChanged="ageChanged" :ageChangedFn="ageChangedCB"></User>
</template>

<script>
import Greeting from './components/greeting.vue'
import User from './components/user.vue'

export default {
  components: {Greeting, User},
  name: 'App',
  data() {
    return {
      age: 20
    }
  },
  methods: {
    ageChanged(num) {
      this.age += num;
    },
    ageChangedCB(num) {
      this.age += num;
    }
  }
}
</script>
