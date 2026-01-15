import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


//Todo va dentro de la función
export const useCartStore = defineStore('CartStore', () => {
    const items = ref([])
    return { items }//Sin {} retorna todo el store
})
