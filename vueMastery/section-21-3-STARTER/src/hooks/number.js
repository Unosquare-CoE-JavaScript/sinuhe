import {computed, ref, isRef, isReactive, reactive} from "vue";

export const useNumber = () => {
    let num = ref(0);

    const accounts = reactive({
        checking: 2334,
        savings: 44,
    });

    console.log(isRef(num));
    console.log(isReactive(accounts));

    function increment() {
        num.value++;
    }
    const double = computed(() => {
        return num.value * 2;
    });

    return {
        num,
        increment,
        double,
    };
};