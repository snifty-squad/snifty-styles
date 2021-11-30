const sass = require("sass");
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "/src/main.scss");
const outPath = path.join(__dirname, "main.css");

const { css } = sass.renderSync({ file });

fs.writeFileSync(outPath, css);

module.exports = () => css.toString();