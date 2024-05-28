<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from './components/Layouts/MainHeader.vue'
import MainFooter from './components/Layouts/MainFooter.vue'
import router from './router'

// you can use other life cycle hooks like beforeEnter, afterEach etc
//  provided by navigation guards in vue router
router.beforeEach((to) => {
    // private and public route logic
    // routes having requiresAuth as 'true' in meta-data as its value are private routes and others are public routes
    if (to.meta.requiresAuth) {
        return false
    } else {
        return true
    }
})
</script>

<template>
    <MainHeader />
    <RouterView />
    <MainFooter />
</template>
