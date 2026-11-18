<script setup lang="ts">
import { useCartStore } from '@/stores/cart'  

const frutas = [
  {
    id: 1,
    description: 'Kiwi',
    value: 10.00,
    quantity: 0,
  },
  {
    id: 2,
    description: 'Jambo',
    value: 15.00,
    quantity: 0
  },
  {
    id: 3,
    description: 'Laranja',
    value: 4.00,
    quantity: 0
  },
  {
    id: 4,
    description: 'Abacate',
    value: 8.00,
    quantity: 0
  }
]

function addItem(item: { id: number; description: string; value: number; quantity: number }) {
  useCartStore().addFruit(item)
}

function removeItem(item: { id: number; description: string; value: number; quantity: number }) {
  useCartStore().removeFruit(item)
}
  
</script>

<template> 

  <h2>Frutas na Bancada</h2>
  <li v-for="item in frutas" :key="item.id">
    {{ item.description }} --------
    <button @click="addItem(item)">adicionar</button>
  </li>

  <h2>Frutas no Carrinho:</h2>
  <h3 v-for="item in useCartStore().selectedFruits" :key="item.id">
    {{item.quantity != 0 ? item.quantity : ''}} {{ item.description }} - R${{ item.value }}  ---->

    <button @click="removeItem(item)">Remover Fruta</button>
  </h3> 
</template>
