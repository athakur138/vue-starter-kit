<template>
    <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
    >
        {{ props.btnName }}
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    btnName: { type: String, required: true },
})
</script>
