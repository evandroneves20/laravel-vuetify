let mix = require('laravel-mix');

require('vuetifyjs-mix-extension')

mix.js('resources/js/app.js', 'public/js').vuetify().vue();