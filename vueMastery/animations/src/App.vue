<template>
  <button type="button" @click="flag = !flag">Toggle</button>
<!--  <transition name="fade" mode="out-in">-->
<!--    <h2 v-if="flag" key="main">Hello world</h2>-->
<!--    <h2 v-else key="secondary">Another hello</h2>-->
<!--  </transition>-->
<!--  <transition name="zoom" type="animation" appear>-->
<!--    <h2 v-if="flag">Ciao</h2>-->
<!--  </transition>-->


<!--  <transition-->
<!--    @before-enter="beforeEnter"-->
<!--    @enter="enter"-->
<!--    @after-enter="afterEnter"-->
<!--    @before-leave="beforeLeave"-->
<!--    @leave="leave"-->
<!--    @after-leave="afterLeave"-->
<!--    :css="true"-->
<!--    name="fade"-->
<!--  >-->
<!--    <h2 v-if="flag">Alo</h2>-->
<!--  </transition>-->

  <button @click="addItem">Add</button>
  <ul>
    <transition-group name="fade"
      enter-active-class="animate__animated animate__flipInX"
      leave-active-class="animate__animated animate__flipOutX">
      <li v-for="(number, index) in numbers" :key="number" @click="removeItem(index)">
        {{ number }}
      </li>
    </transition-group>
  </ul>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      flag: true,
      numbers: [1,2,3,4,5,6,7,8,9]
    }
  },
  methods: {
    addItem() {
      let num = Math.floor(Math.random() * 100 + 1)
      let index = Math.floor(Math.random() * this.numbers.length)
      this.numbers.splice(index, 0, num)
    },
    removeItem(index) {
      this.numbers.splice(index, 1)
    },
    beforeEnter () {

    },
    enter () {
      // let animation = element.animate([
      //     { transform: 'scale3d(0, 0, 0)' },
      //     {}
      // ], {
      //   duration: 1000
      // })
      //
      // animation.onfinish = () => {
      //   done();
      // }
    },
    afterEnter () {

    },
    beforeLeave () {

    },
    leave () {
      // let animation = element.animate([
      //   {},
      //   { transform: 'scale3d(0, 0, 0)' }
      // ], {
      //   duration: 1000
      // })
      //
      // animation.onfinish = () => {
      //   done();
      // }
    },
    afterLeave () {

    },
  }
}
</script>
<style>
.animate__flipOutX {
  position: absolute;
}

.animate__animated {
  animation-duration: 1.5s;
}

h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}
li {
  font-size: 22px;
  cursor: pointer;
}
.fade-enter-from {
 opacity: 0;
}
.fade-enter-active {
  transition: all 0.25s linear;
}
.fade-leave-to {
  transition: all 0.25s linear;
  opacity: 0;
}
.fade-leave-active {
  position: absolute;
}
.fade-move {
  transition: all 0.25s linear;
}
.zoom-enter-active {
  animation: zoom-in 0.25s linear forwards;
  transition: all 0.5s linear;
}
.zoom-leave-active {
  animation: zoom-out 0.25s linear forwards;
  transition: all 0.5s linear;
}

.zoom-enter-from {
  opacity: 0;
}

.zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}
</style>