<template>
  <h1>About</h1>
</template>
<script>
import dummyModule from '@/store/modules/dummy';

export default {
  name: 'About',
  created() {
    this.$store.registerModule('dummy', dummyModule);
  },
}
</script>