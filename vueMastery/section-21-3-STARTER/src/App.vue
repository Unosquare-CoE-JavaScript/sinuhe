<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ double }}</p>
    <button @click.prevent="increment">Increment</button>
    <p>{{ name }}</p>
    <input type="text" v-model="phrase">
    <p>{{ reversePhrase }}</p>
    <Alert :user="user"></Alert>
    <button ref="btn">
      Button
    </button>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
} from 'vue';
import Alert from '@/components/Alert';
import { useNumber } from '@/hooks/number';
import { usePhrase } from '@/hooks/phrase';

export default {
  name: "App",
  components: {
    Alert,
  },
  setup() {
    const btn = ref(null);

    onBeforeMount(() => {
      console.log('Before mount');
    });

    onMounted(() => {
      console.log('Mounted');
      btn.value.addEventListener('click', () => {
        console.log('Butto clicked!!')
      });
    });

    const user = reactive({
      name: 'Sinuhe',
      age: 30,
    });

    setTimeout(() => {
      user.name = 'Luis';
    }, 3000);

    const { num, increment, double } = useNumber();
    const { phrase, reversePhrase, num: phraseNum } = usePhrase();
    return {
      num,
      increment,
      user,
      ...toRefs(user),
      phrase,
      reversePhrase,
      double,
      btn,
      phraseNum,
    };
  },
};
</script>
