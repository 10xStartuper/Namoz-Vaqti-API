const { parse } = require("himalaya");
const { parce: nodeParse } = require("node-html-parser");
const converter = (parsableData) => {
  const newData = parsableData.data.content.rendered;
  const nodeHtml = nodeParse(newData).querySelector("table");
  console.log(nodeHtmlrs);
  return parse(newData);
};

module.exports = converter;
