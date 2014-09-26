var minimatch = require('minimatch');

module.exports = function minimatchAll (path, patterns, opts) {
  var match = false;

  patterns.forEach(function (pattern) {
    // if we've already got a match, only re-test for exclusions
    if (match === true && pattern[0] !== '!') { return; }

      match = minimatch(path, pattern, opts);
  });
  return match;
};
