const fs = require('fs');
const path = require('path');
const csso = require('csso');

process.argv.splice(0, 2);

if(process.argv.length < 2){
    console.error("Invalid argument list!\nUsage: node build.js [input] [output]");
    return;
}

console.log(`Building ${process.argv[0]} ...`);
let start = Date.now();

let inDir = path.dirname(process.argv[0]);
let outDir = path.dirname(process.argv[1]);
let content = fs.readFileSync(process.argv[0]).toString();
let css = "";
while(true){
    let match = content.match(/@import "(.*)";?/);
    if(match == null) break;

    console.log(`Found import for ${match[1]}. Appending ...`);
    css += fs.readFileSync(path.join(inDir, match[1])).toString();
    content = content.substring(match.index + match[0].length, content.length);
}
console.log("Minifying css ...")
let result = csso.minify(css, {
    forceMediaMerge: true,
    sourceMap: true
});

if(fs.existsSync(outDir) == false){
    fs.mkdirSync(outDir, {recursive: true});
}
console.log(`Writing minified css to ${process.argv[1]} ...`);
fs.writeFileSync(process.argv[1], result.css);
if(result.map != null)
    fs.writeFileSync(process.argv[1] + ".map", result.map.toString());
let end = Date.now();
console.log(`Done in ${end - start}ms. Final file size: ${fs.statSync(process.argv[1]).size} bytes.`);