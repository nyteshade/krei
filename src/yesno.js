/*
 * yes-or-no-prompt.js: Simple example of using prompt.
 *
 * (C) 2012, Nodejitsu Inc.
 *
 */

var prompt = require('prompt');
var colors = require('colors');

//
// Start the prompt
//
prompt.start();
prompt.message = prompt.delimiter = '';

var property = {
  name: 'yesno',
  message: colors.reset(colors.bold('are you sure?')),
  validator: /y[es]*|n[o]?/,
  warning: 'Must respond yes or no',
  default: 'no',
  replace: (value) => v.charAt(0) == 'y' ? 'Yes' : 'No'
};

//
// Get the simple yes or no property
//
prompt.get(property, function (err, result) {
  //
  // Log the results.
  //
  console.log('Command-line input received:');
  console.log('  result: ' + result.yesno);
});
