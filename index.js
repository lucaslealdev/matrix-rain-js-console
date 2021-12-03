"use strict";
function ma(){return 9 * Math.random() | 0;}
function choosenOne(){return 50 * Math.random() | 0;}
function randFrom(items){return items[items.length * Math.random() | 0];}
let chars = Array.from('包任何口味的方便面汤匙酸奶油汤匙黄油洋葱和番茄切丁正常煮方便面锅中放入黄油番茄洋葱和方便面的调味粉翻炒均匀不要结块然后倒入奶油将酱汁与方便面混合');
setInterval(() => {
    let output = '';
    for (let coluna = 0; coluna < 60; coluna += 1) {
        let color = choosenOne()===0?"\x1b[5m":"\x1b[32m";
        output += ma()>0?'  ':color+randFrom(chars)+"\x1b[0m";
    }
    console.log(output);
}, 30);