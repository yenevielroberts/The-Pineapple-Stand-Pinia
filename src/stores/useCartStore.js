import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { groupBy } from 'lodash'


//Todo va dentro de la función
export const useCartStore = defineStore('CartStore', () => {
    //STATE
    const items = ref([])//array para guardas los productos que añado al carrito

    //GETTERS
    const count = computed(() => items.value.length)
    const isempty = computed(() => items.value === 0)//de vuelve un true o false
    const grouped = computed(() => groupBy(items.value, (item) => item.name))//primero argumento, el valor por el que quiero agrupar
    const total = computed(() => items.value.reduce((acumulador, elemento) => acumulador + elemento.price, 0))
    //ACTION
    //El primero argumento es lo que envio desde el emit y el segundo la del $event
    function addItemCart(numItems, item) {

        const contador = parseInt(numItems)
        for (let index = 0; index < contador; index++) {

            items.value.push(item)//Envio los productos al array de useCarStore
        }
    }

    //Función  que vacia el carrito
    function $reset() {
        items.value = []
    }

    //Hago una comparación y si son diferentes lo guardo en items.value
    const clearItem = (itemName) => (items.value = items.value.filter((item) => item.name != itemName))

    const setItemCount = (item, count) => {
        //Actualizo mi lista, primero borro lo viejo y luego pongo lo que me ha dado
        clearItem(item.name)
        addItemCart(count, item)
    }

    return { items, addItemCart, count, isempty, grouped, $reset, total, clearItem, setItemCount }//Sin {} retorna todo el store
})
