const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Sinuhe',
            lastName: 'Gomez',
            middleName: '',
            url: 'https://google.com',
            rawUrl:'<a href="https://google.com">CLICK</a>',
            age: 22
        }
    },
    methods: {
        increment () {
          this.age++
        },
        updateLastName (msg, event) {
            // console.log(msg)
            this.lastName = event.target.value;
        },
        updateMiddleName (event) {
            this.middleName = event.target.value;
        }
    },
    computed: {
        fullName() {
            console.log('Full name triggered!')
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
        },
    },
    watch: {
        age(newVal, oldVal) {
            setTimeout(() => {
                this.age = 30
            }, 3000)
        }
    }
}).mount('#app');

// setTimeout(() => {
//     vm.firstName = 'Patrick'
// }, 2000);

// Vue.createApp({
//     data() {
//         return {
//             firstName: 'Yair',
//             lastName: 'Valencia'
//         }
//     }
// }).mount('#app2');