<script setup lang="ts">
const props = defineProps({
    labelName: { type: String, required: true },
    inputType: { type: String, required: true },
    // { type: String, required: true }
})
</script>

<template>
    <div class="mb-4">
        <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
        >
            {{ props.labelName }}
        </label>
        <input
            :id="props.labelName"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :type="props.inputType"
            :placeholder="props.labelName"
        />
    </div>
</template>
