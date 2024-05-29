<script setup>
import { ref } from 'vue'
// Create a reactive reference to store the count value
const count = ref(0)

</script>

<template>
    <h1>Hi</h1>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>