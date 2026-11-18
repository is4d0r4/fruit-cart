import { ref } from 'vue'
import { defineStore } from 'pinia'
 
export const useCartStore = defineStore('fruitCart', () =>{
  const selectedFruits = ref<{ 
    id: number; 
    description: string; 
    value: number;
    quantity: number
}[]>([])  

  function addFruit(fruit: { id: number; description: string; value: number, quantity: number }) {

    if(selectedFruits.value.some(item => item.id === fruit.id)) {
        const item = selectedFruits.value.find(fruit => fruit.id === fruit.id)
        if (item) {
            item.quantity += 1
        }
    }else{
      selectedFruits.value.push(fruit)  
    } 

 }

  function removeFruit(fruit: { id: number; description: string; value: number; quantity: number }) {
    selectedFruits.value =  selectedFruits.value.filter(item => item.id !== fruit.id)
  }

  return { addFruit, removeFruit, selectedFruits }
})