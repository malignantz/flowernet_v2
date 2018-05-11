function parseTSVString(tsv) {
  //console.log(tsv);
  return tsv
    .split("\n")
    .map(chunk => questionCreator(chunk.split("\t")))
    .slice(1);
}

function questionCreator(arr) {
  let [question, answer, tags, cat, rank] = arr;
  rank = rank.replace("\r", "");
  return { question, answer, tags, cat, rank };
}

var fs = require("fs");
let data = fs.readFileSync("src/lib/faq.tsv").toString("utf8");
console.log(parseTSVString(data));
