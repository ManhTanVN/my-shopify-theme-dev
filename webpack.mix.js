// webpack.mix.js

const mix = require('laravel-mix');

mix.js('src/scss/app.scss', 'assets')
    .sass('src/js/app.js', 'assets')
    .setPublicPath('assets');