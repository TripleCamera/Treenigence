// ==UserScript==
// @name         Treenigence
// @namespace    Treenigence
// @version      0.2
// @description  Enhancement for Treenity(智慧树).
// @author       TripleCamera2022, 14725
// @match        https://ainew.zhihuishu.com/*
// @grant        none
// @run-at       document-end
// @license      MIT
// @require      https://html2canvas.hertzen.com/dist/html2canvas.min.js
// @require      https://unpkg.com/html-to-image@1.11.11/dist/html-to-image.js
// ==/UserScript==

(function() {
    'use strict';
    debugger;

    window.setTimeout(knowledgeAnalysis, 5000);
})();

function injectCSS(text)
{
    var styleEle = document.createElement("style");
    styleEle.innerHTML = text;
    document.documentElement.appendChild(styleEle);
}

function knowledgeAnalysis()
{
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

    // html2canvas(document.querySelector(".listTi")).then(canvas => {
    //     var link = document.createElement("a");
    //     link.download = 'test';
    //     link.href = canvas.toDataURL();
    //     link.click();
    // });

    htmlToImage.toPng(document.querySelector(".listTi")).then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });

    // 自动关闭提示
    document.querySelector('.Tips .ZHIHUISHU_QZMD').click();
}
