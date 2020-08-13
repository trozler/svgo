var FS = require("fs");
var yaml = require("js-yaml");

var test = Object.assign(
    {},
    yaml.safeLoad(FS.readFileSync(__dirname + "/.svgo.yml", "utf8"))
);
console.log(JSON.stringify(test));

//run node trozlertest.js

// Output.
// var test = {
//     plugins: [
//         "removeDoctype",
//         "removeXMLProcInst",
//         "removeComments",
//         "removeMetadata",
//         "removeXMLNS",
//         "removeEditorsNSData",
//         "cleanupAttrs",
//         "inlineStyles",
//         "minifyStyles",
//         "convertStyleToAttrs",
//         "cleanupIDs",
//         "prefixIds",
//         "removeRasterImages",
//         "removeUselessDefs",
//         "cleanupNumericValues",
//         "cleanupListOfValues",
//         "convertColors",
//         "removeUnknownsAndDefaults",
//         "removeNonInheritableGroupAttrs",
//         "removeUselessStrokeAndFill",
//         "removeViewBox",
//         "cleanupEnableBackground",
//         "removeHiddenElems",
//         "removeEmptyText",
//         "convertShapeToPath",
//         "convertEllipseToCircle",
//         "moveElemsAttrsToGroup",
//         "moveGroupAttrsToElems",
//         "collapseGroups",
//         "convertPathData",
//         "convertTransform",
//         "removeEmptyAttrs",
//         "removeEmptyContainers",
//         "mergePaths",
//         "removeUnusedNS",
//         "sortAttrs",
//         "sortDefsChildren",
//         "removeTitle",
//         "removeDesc",
//         "removeDimensions",
//         "removeAttrs",
//         "removeAttributesBySelector",
//         "removeElementsByAttr",
//         "addClassesToSVGElement",
//         "removeStyleElement",
//         "removeScriptElement",
//         "addAttributesToSVGElement",
//         "removeOffCanvasPaths",
//         "reusePaths",
//     ],
// };
