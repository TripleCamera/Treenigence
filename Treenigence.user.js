// ==UserScript==
// @name         Treenigence
// @namespace    Treenigence
// @version      0.1
// @description  Enhancement for Treenity(智慧树).
// @author       TripleCamera2022, 14725
// @match        https://ainew.zhihuishu.com/*
// @grant        none
// @run-at       document-end
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    debugger;
    injectCSS(`
        .wrongLIST,
        .currentLIST {
            display: flex;
            overflow-x: auto;
        }

        .listTi {
            display: block !important;
            width: auto !important;
            border: 1px solid gray;
            margin-top: 15px !important;
        }

        .listTi .left {
            width: auto !important;
        }

        .listTi .right {
            width: auto !important;
        }

        .listTi .right .bottom {
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