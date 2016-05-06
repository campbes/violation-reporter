var fs = require('fs');

module.exports = function(grunt) {

  var ConsoleReporter = function(filenames, options) {
    this.options = options;
    this.options.tpl = fs.readFileSync(__dirname +'/console.tpl').toString();
  };

  ConsoleReporter.prototype = {

    colors: {
      pass: 'green',
      info: 'white',
      warning: 'yellow',
      error: 'red'
    },

    violations: function(filepath, violations) {
      var colors = this.colors;
      var tpl = this.options.tpl;
      var log = this.log;

      log(filepath[colors[(violations.length ? 'info' : 'pass')]]);

      var message;
      violations.forEach(function(data) {
        message = grunt.template.process(tpl, {
          data: data
        });
        log(message[colors[data.severity]]);
      });
    },

    start: function() {
      this.log(' ');
    },

    finish: function() {},

    log: function(message) {
      message = message || '';
      grunt.log.writeln(message);
    }

  };

  return ConsoleReporter;
};
