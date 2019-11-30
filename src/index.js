const fs = require("fs");

const script = fs.readFileSync("./src/script.js", "utf8");
const script_webpack = fs.readFileSync("./dist/script_webpack.js", "utf8");

const res = new Function(script);
const res_webpack = new Function(script_webpack);

console.log("res : ", res());
console.log("webpack res : ", res_webpack());
