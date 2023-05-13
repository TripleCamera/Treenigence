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
            padding: 12px !important;
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

        .listTi .right .bottom .el-scrollbar__wrap {
            /* 去除滚动条 */
            overflow: auto !important;
            margin: 0 !important;
        }
    `);

    // htmlToImage.toPng(document.querySelector(".listTi")).then(function (dataUrl) {
    //     var link = document.createElement('a');
    //     link.download = 'my-image-name.png';
    //     link.href = dataUrl;
    //     link.click();
    // });

    var listTi = document.querySelectorAll('.listTi');
    for (var i = 0; i < listTi.length; i++)
    {
        var button = document.createElement('button');
        button.innerHTML = '保存';
        button.style.float = "right";
        button.onclick = function (event) {
            htmlToImage.toPng(event.target.parentNode).then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'Treenigence_screenshot.png';
                link.href = dataUrl;
                link.click();
            });
            htmlToImage.toSvg(event.target.parentNode).then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'Treenigence_screenshot.svg';
                link.href = dataUrl;
                link.click();
            });
        }
        listTi[i].insertBefore(button, listTi[i].firstChild);
    }
    // 自动关闭提示
    document.querySelector('.Tips .ZHIHUISHU_QZMD').click();
}
