// ==UserScript==
// @name         Treenigence
// @namespace    Treenigence
// @version      0.1
// @description  Enhancement for Treenity(智慧树).
// @author       TripleCamera2022
// @match        https://ainew.zhihuishu.com/*
// @grant        none
// @run-at       document-end
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    debugger;
    injectCSS(`
        .wrongLIST .listTi .right .bottom {
            height: auto !important;
        }
    `);
})();

function injectCSS(text)
{
    var styleEle = document.createElement("style");
    styleEle.innerHTML = text;
    document.documentElement.appendChild(styleEle);
}