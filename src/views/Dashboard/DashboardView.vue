<template>
    <v-layout id="layout">
        <v-main>
            <v-container fluid>
                <v-row dense>
                    <v-col v-for="n in 4" :key="n" cols="12">
                        <v-card
                            :title="`Dashboard ${n}`"
                            :subtitle="`Subtitle for Dashboard ${n}`"
                            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
                        ></v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-layout>
</template>
<style scoped>
#layout {
    margin-top: 4rem;
}
</style>
