/* eslint import/no-dynamic-require: "off" */
/* eslint global-require: "off" */
exports.name = 'JATE';

exports.readTemplate = filePath => require(filePath);

exports.__express = (path, options, fn) => {
  const tmpl = exports.readTemplate(path);
  const res = tmpl(options);
  return fn(null, res);
};
