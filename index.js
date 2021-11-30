const sass = require("sass");
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "main.scss");
const outPath = path.join(__dirname, "main.css");

const { css } = sass.renderSync({ file });

fs.writeFileSync(outPath, css);

console.log(`- compiled: \n   ${file} -> ${outPath}\n`)