<template>
  <div class="result">
    <div class="title">{{ results[resultIndex].title }}</div>
    <div class="desc">
      {{ results[resultIndex].desc }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'Results',
  props: ['results', 'totalCorrect'],
  computed: {
    resultIndex() {
      let index = 0
      this.results.forEach((res, i) => {
        if (res.min <= this.totalCorrect && res.max >= this.totalCorrect) {
          index = i
        }
      });
      return index
    }
  }
}
</script>