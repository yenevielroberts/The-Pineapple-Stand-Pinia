<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
//import products from "@/data/products.json";
import {useProductStore} from '@/stores/useProductStore.js'
import { storeToRefs } from "pinia";
import { useCartStore } from "@/stores/useCartStore";

const productStore=useProductStore()//Esto devuelve todo lo que tenga dentro de mi store. Accedo a todo lo que esta dentro de mi store
productStore.fill()//Llamo la función que hice en el useProductStore
const {productsRef}=storeToRefs(useProductStore())//La función storeToRef necesita variables reactivas, cojo el array que retorno en useProductStore

const cartStore=useCartStore()
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <!--@addToCart="cartStore.items.push(product) agrego un producto al array que esta en useCartStore-->
      <ProductCard
        v-for="product in productsRef"
        :key="product.name"
        :product="product"
        @addToCart="cartStore.addItemCart($event, product)"
      />
      <!--$event contiene la información del evento, la que envio donde defino el emit-->
    </ul>
  </div>
</template>
