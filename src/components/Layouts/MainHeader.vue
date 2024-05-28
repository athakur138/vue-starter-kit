<script setup lang="ts"></script>
<template>
    <v-card maxWidth="448" class="mx-auto" color="grey-lighten-3">
        <v-layout>
            <v-app-bar
                color="teal-darken-4"
                image="https://picsum.photos/1920/1080?random"
            >
                <template #image>
                    <v-img
                        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
                    ></v-img>
                </template>

                <template #prepend>
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                </template>
                <router-link to="/">
                    <h3>Home</h3>
                </router-link>
                <router-link to="/dashboard">
                    <h3>Dashboard</h3>
                </router-link>
                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-app-bar>
        </v-layout>
    </v-card>
</template>
<style scoped>
a {
    text-decoration: none;
    color: white;
    margin: 2rem 2rem;
}
</style>
