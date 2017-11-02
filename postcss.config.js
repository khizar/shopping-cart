/* eslint-disable */
const BEM_CONFIG = {
    defaultNamespace: undefined,
    style: 'bem',
    separators: {
        modifier: '--'
    },
    shortcuts: {
        component: 'b',
        descendent: 'e',
        modifier: 'm'
    }
};

const AUTOPREFIXER_CONFIG = {
    browsers: [
        'Android >= 4.1',
        'Chrome >= 28',
        'Firefox >= 38',
        'Explorer >= 10',
        'iOS >= 7',
        'Opera >= 40',
        'Edge >= 12',
        'Safari >= 7'
    ]
};
// eslint-disable-line global-require
module.exports = {
    plugins: [
        // Transfer @import rule by inlining content, e.g. @import "normalize.css"
        // https://github.com/postcss/postcss-import
        require('postcss-import'),
        require('postcss-url'),
        require('postcss-bem')(BEM_CONFIG),
        require('precss'),

        // W3C variables, e.g. :root { --color: red; } div { background: var(--color); }
        // https://github.com/postcss/postcss-custom-properties
        require('postcss-custom-properties')(),
        // W3C CSS Custom Media Queries, e.g. @custom-media --small-viewport (max-width: 30em);
        // https://github.com/postcss/postcss-custom-media
        require('postcss-custom-media')(),
        // CSS4 Media Queries, e.g. @media screen and (width >= 500px) and (width <= 1200px) { }
        // https://github.com/postcss/postcss-media-minmax
        require('postcss-media-minmax')(),
        // W3C CSS Custom Selectors, e.g. @custom-selector :--heading h1, h2, h3, h4, h5, h6;
        // https://github.com/postcss/postcss-custom-selectors
        require('postcss-custom-selectors')(),
        // W3C calc() function, e.g. div { height: calc(100px - 2em); }
        // https://github.com/postcss/postcss-calc
        require('postcss-calc')(),
        // Allows you to nest one style rule inside another
        // https://github.com/jonathantneal/postcss-nesting
        require('postcss-nesting')(),
        // W3C color() function, e.g. div { background: color(red alpha(90%)); }
        // https://github.com/postcss/postcss-color-function
        require('postcss-color-function')(),
        // W3C CSS Level4 :matches() pseudo class, e.g. p:matches(:first-child, .special) { }
        // https://github.com/postcss/postcss-selector-matches
        require('postcss-selector-matches')(),
        // Postcss flexbox bug fixer
        // https://github.com/luisrudge/postcss-flexbugs-fixes
        require('postcss-flexbugs-fixes')(),
        require('postcss-nested'),
        // Add vendor prefixes to CSS rules using values from caniuse.com
        // https://github.com/postcss/autoprefixer
        require('autoprefixer')(AUTOPREFIXER_CONFIG)
    ]
};
