const fs = require('fs');
const path = require('path');
const csso = require('csso');

const LICENCE = `/*!
* layout.css
* Copyright 2020-2021 Gergo Szasz-Varadi
* Licensed under MIT (https://github.com/gergoszaszvaradi/layout.css/blob/master/LICENSE)
*/`;

process.argv.splice(0, 2);
if(process.argv.length < 1){
    console.error("Invalid argument list!\nUsage: node build.js [input]");
    return;
}

const INPUT_FILE = process.argv[0];
const INPUT_DIR = path.dirname(INPUT_FILE);
const OUTPUT_DIR = "./dist";

console.log(`Building project ...`);
let start = Date.now();

let inputContent = fs.readFileSync(INPUT_FILE).toString();

let inputFiles = [];
let fullCss = "";

while(true){
    let match = inputContent.match(/@import "(.*)";?/);
    if(match == null) break;

    console.log(`Found import for ${match[1]}. Appending ...`);
    let importPath = path.join(INPUT_DIR, match[1]);
    let importContent = fs.readFileSync(importPath).toString();
    inputFiles.push({path: importPath, src: importContent});
    fullCss += importContent;
    inputContent = inputContent.substring(match.index + match[0].length, inputContent.length);
}
inputFiles.push({path: INPUT_FILE, src: fullCss});

console.log("Minifying css ...")
if(fs.existsSync(OUTPUT_DIR) == false){
    fs.mkdirSync(OUTPUT_DIR, {recursive: true});
}

for(let file of inputFiles) {
    let result = csso.minify(file.src, {
        forceMediaMerge: true,
        sourceMap: true
    });

    let outputCssPath = path.join(OUTPUT_DIR, path.basename(file.path).replace(/\.[^\/.]+$/, "") + ".min.css");
    let outputMapPath = outputCssPath + ".map";

    console.log(`Writing minified css to ${outputCssPath} ...`);
    fs.writeFileSync(outputCssPath, LICENCE + result.css);
    if(result.map != null)
        fs.writeFileSync(outputMapPath, result.map.toString());
}

let end = Date.now();
console.log(`Done in ${end - start}ms.`);