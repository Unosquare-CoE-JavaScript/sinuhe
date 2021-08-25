<template>
  <div class="about">
    <h1>{{ $route.params.member }}</h1>
  </div>
</template>
<script>
import { useRoute, useRouter } from 'vue-router';

export default {
  name: 'About',
  setup() {
    const route = useRoute();
    const router = useRouter();
    console.log(route.params.member);
    router.push({
      hash: '#test',
    });
  },
};
</script>
