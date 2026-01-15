import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


//Todo va dentro de la función
export const useCartStore = defineStore('CartStore', () => {
    const items = ref([])

    //El primero argumento es lo que envio desde el emit y el segundo la del $event
    function addItemCart(numItems, item) {

        const contador = parseInt(numItems)
        for (let index = 0; index < contador; index++) {

            items.value.push(item)//Envio los productos al array de useCarStore
        }
    }
    return { items, addItemCart }//Sin {} retorna todo el store
})
