<template>
  <p>The user is {{ age }} years old</p>
  <p>Double age {{ ageDoubled }}</p>
  <button @click.prevent="onClickAge">Increase age</button>
  <button @click.prevent="ageChangedFn(5)">Increase age CB</button>
</template>
<script>
export default {
  name: 'User',
  props: {
    age: {
      type: Number,
      validator(value) {
        return value < 130
      }
    },
    ageChangedFn: Function
  },
  emits: ['ageChanged'],
  methods: {
    onClickAge() {
      this.$emit('ageChanged', 3)
    }
  },
  computed: {
    ageDoubled() {
      return this.age * 2
    }
  }
}
</script>