import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    const countInitValue = 0
    const count = ref(countInitValue)
    const incrementOrder = 2
    const doubleCount = computed(() => count.value * incrementOrder)
    function increment(): void {
        count.value++
    }

    return { count, doubleCount, increment }
})
