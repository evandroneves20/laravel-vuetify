/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';

const app = createApp({});

import router from "./router";
app.use(router);

///Vuetify
import 'vuetify/styles'
import {createVuetify} from "vuetify";
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives
})

app.use(vuetify);

app.mount('#app');
