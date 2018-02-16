/* eslint import/no-dynamic-require: "off" */
/* eslint global-require: "off" */
const cleanDeep = require('clean-deep');

exports.name = 'JTEN';

exports.readTemplate = filePath => require(filePath);

const cleanOptions = {
  emptyArrays: false,
  emptyObjects: false,
  emptyStrings: false,
};

exports.__express = (path, options, fn) => {
  const tmpl = exports.readTemplate(path);
  const res = tmpl(options);

  return fn(null, cleanDeep(res, cleanOptions));
};
