import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


const items = []
export const useCartStore = defineStore('CartStore', () => {

    return { items }//Sin {} retorna todo el store
})
