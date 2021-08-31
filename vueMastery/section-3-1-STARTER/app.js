const vm = Vue.createApp({
    data () {
        return {
            xValue: 0,
            yValue: 0,
            zValue: 0,
            perspective: 100,
        }
    },
    computed: {
        rotateBox() {
            console.log({
                transform: `perspective(${this.perspective}px)
                    rotateX(${this.xValue}deg)
                    rotateY(${this.yValue}deg)
                    rotateZ(${this.zValue}deg)`
            })
            return {
                transform: `perspective(${this.perspective}px)
                    rotateX(${this.xValue}deg)
                    rotateY(${this.yValue}deg)
                    rotateZ(${this.zValue}deg)`
            }
        },
    },
    methods: {
        reset() {
            this.xValue = 0;
            this.yValue = 0;
            this.zValue = 0;
            this.perspective = 0;
        },
        copy() {
            const  element = document.createElement('textarea');
            element.setAttribute('readonly','')
            element.style.position = 'absolute'
            element.style.left = '-9999px'
            element.value = `transform: ${this.rotateBox.transform}`
            document.body.appendChild(element);
            element.select();
            document.execCommand('copy')
            document.body.removeChild(element)
        }
    }
}).mount('#app');