var tape = require('tape');
var minimatchAll = require('./');

tape('Match', function (t) {
  var patterns = [
    // match all js files
    '**/*.js',

    // except for files in the foo/ directory
    '!foo/**',

    // unless it's foo/bar.js
    'foo/bar.js',
  ];

  t.equals(
    minimatchAll('foo.js', patterns),
    true,
    'Match .js files');

  t.equals(
    minimatchAll('foo/foo.js', patterns),
    false,
    'Files in the foo/ directory should be excluded');

  t.equals(
    minimatchAll('foo/bar.js', patterns),
    true,
    'foo/bar.js is an exception to the rule');

  t.end();
});
