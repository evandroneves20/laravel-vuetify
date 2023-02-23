<template>
    <v-card>
        <v-layout>
            <v-theme-provider theme="dark" with-background>
                <v-navigation-drawer
                    v-model="drawer"
                    :rail="rail"
                    permanent
                    @click="rail = false"
                    width="220"
                >
                    <v-container>
                        <v-row
                            align="center"
                            no-gutters
                            :style="rail === false ? 'height: 90px;' : ''"
                        >
                            <v-col cols="12" align="center">
                                <v-img
                                    :width="100"
                                    aspect-ratio="16/9"
                                    cover
                                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                                ></v-img>
                            </v-col>
                        </v-row>
                        <v-row
                            align="center"
                            no-gutters
                        >
                            <v-col cols="12" align="center" :class="rail ? 'd-none' : ''">
                                <b>Fulano da Silva</b><br/>
                                <small>Administrador</small>
                            </v-col>
                        </v-row>
                    </v-container>

                    <v-list density="compact" nav>
                        <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" active></v-list-item>
                        <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
                        <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
                    </v-list>
                </v-navigation-drawer>
            </v-theme-provider>
            <v-main>
                <v-card color="grey-lighten-3">
                    <v-layout>
                        <v-app-bar
                            color="teal-darken-4"
                            image="https://picsum.photos/1920/1080?random"
                        >
                            <template v-slot:image>
                                <v-img
                                    gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
                                ></v-img>
                            </template>

                            <template v-slot:prepend>
                                <v-app-bar-nav-icon @click.stop="rail = !rail"></v-app-bar-nav-icon>
                            </template>

                            <v-app-bar-title>Title</v-app-bar-title>

                            <v-spacer></v-spacer>

                            <v-btn icon>
                                <v-icon>mdi-power</v-icon>
                            </v-btn>
                        </v-app-bar>

                        <v-main>
                            <v-card title="Página de exemplo" color="white" height="80" :rounded="0">
                                <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']" style="padding-top: 0"></v-breadcrumbs>
                            </v-card>
                            <v-container fluid>
                                <v-row dense>
                                    <v-col
                                        v-for="n in 4"
                                        :key="n"
                                        cols="12"
                                    >
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
                </v-card>
            </v-main>
        </v-layout>
    </v-card>
</template>

<script>
export default {
    name: "MainLayout",
    data () {
        return {
            drawer: true,
            items: [
                { title: 'Home', icon: 'mdi-home-city' },
                { title: 'My Account', icon: 'mdi-account' },
                { title: 'Users', icon: 'mdi-account-group-outline' },
            ],
            rail: false,
        }
    },
}
</script>

<style scoped>

</style>
