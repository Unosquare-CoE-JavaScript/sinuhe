<template>
  <h1>Home</h1>
</template>
<script>
export default {
  name: 'Home',
  unmounted() {
    console.log('Home component unmounted')
  },
  activated() {
    console.log('Home activarted')
  },
  deactivated() {
    console.log('Home deactivarted')
  }
}
</script>