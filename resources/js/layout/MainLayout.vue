<template>
    <v-card>
        <v-layout>
            <v-app-bar
                color="primary"
                prominent
            >
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title>My files</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn variant="text" icon="mdi-magnify"></v-btn>

                <v-btn variant="text" icon="mdi-filter"></v-btn>

                <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
            </v-app-bar>

            <v-navigation-drawer
                image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
                permanent
                theme="dark"
            >
                <v-list nav>
                    <v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox"></v-list-item>
                    <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Supervisors" value="supervisors"></v-list-item>
                    <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main style="height: 95vh;">
                <v-card-text>
                    The navigation drawer will appear from the bottom on smaller size screens.
                </v-card-text>
            </v-main>
        </v-layout>
    </v-card>
</template>

<script>
export default {
    name: "MainLayout"
}
</script>

<style scoped>

</style>
