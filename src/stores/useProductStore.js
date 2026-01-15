import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import products from '@/data/products.json'

export const useProductStore = defineStore('ProductStore', () => {

    const productsRef = ref([]);//Tiene que ser reactivo para que pueda renderizar
    //const productsRef = ref(products) //otra forma de inicializar products=los datos que importe del json

    function fill() {
        productsRef.value = products;
    }

    return { productsRef, fill }//Sin {} retorna todo el store
})
