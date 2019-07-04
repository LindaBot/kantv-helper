import config from './package.json';

const banner = `// ==UserScript==
// @name         ${config.name}
// @namespace    im.mutoo.kantv-helper
// @website      ${config.homepage}
// @updateURL    https://mutoo.github.com/kantv-helper/dist/kantv-helper.meta.js
// @downloadURL  https://mutoo.github.com/kantv-helper/dist/kantv-helper.user.js
// @supportURL   ${config.bugs.url}
// @version      ${config.version}
// @description  ${config.description}
// @author       ${config.author}
// @match        http*://www.imkan.tv/tvdrama/*
// @match        http*://www.imkan.tv/movie/*
// @match        http*://www.imkan.tv/show/*
// @match        http*://www.imkan.tv/anime/*
// @match        http*://www.imkan.tv/child/*
// @match        http*://www.imkan.tv/documentary/*
// @run-at       document-end
// @grant        none
// ==/UserScript==
`;

export default [
    {
        input: 'src/banner.js',
        output: {
            file: 'dist/kantv-helper.meta.js',
            format: 'cjs',
            banner,
        },
        external: ['./src/index.js'],
    }, {
        input: 'src/index.js',
        output: {
            file: 'dist/kantv-helper.user.js',
            format: 'cjs',
            banner,
        },
    },
];
