<template>
    <v-layout id="layout">
        <v-main>
            <v-container fluid>
                <v-row dense>
                    <v-col v-for="n in 4" :key="n" cols="12">
                        <v-card
                            :title="`Content ${n}`"
                            :subtitle="`Subtitle for Content ${n}`"
                            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
                        ></v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-layout>
</template>
