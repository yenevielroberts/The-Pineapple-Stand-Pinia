import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { groupBy } from 'lodash'


//Todo va dentro de la función
export const useCartStore = defineStore('CartStore', () => {
    //STATE
    const items = ref([])//array para guardas los productos que añado al carrito

    //GETTERS
    const count = computed(() => items.value.length)
    const isEmpty = computed(() => items.value === 0)//de vuelve un true o false
    const grouped = computed(() => groupBy(items.value, (item) => item.name))//primero argumento, el valor por el que quiero agrupar

    //ACTION
    //El primero argumento es lo que envio desde el emit y el segundo la del $event
    function addItemCart(numItems, item) {

        const contador = parseInt(numItems)
        for (let index = 0; index < contador; index++) {

            items.value.push(item)//Envio los productos al array de useCarStore
        }
    }
    return { items, addItemCart, count, isEmpty, grouped }//Sin {} retorna todo el store
})
