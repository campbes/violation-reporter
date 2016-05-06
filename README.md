## Synopsis

Generate a generic violation report from whatever tool you like and optionally generate a standard XML report.

## Code Example

    var MultiReporter = require('violation-reporter')(grunt);
    var XMLReporter = require('violation-reporter/tasks/XML')(grunt);
    var checkstyleReporter = require('violation-reporter/tasks/checkstyleXML')(grunt, XMLReporter);

    // create a new reporter and add checkstyle formatting
    var reporter = new MultiReporter(files, options);
    reporter.addReporter(checkstyleReporter);
    
    // create a new violation, from whatever data you like
    violations.push({
      filepath: file,
      line: 0,
      column: 0,
      name: key,
      rule: key,
      severity: severity,
      message: 'Too many',
      ratio: ratio,
      value: metrics[key] + ' ('+ options.analyzecss[key] + ')'
    });

    // register the violation with the reporter
    reporter.violations(file, violations); 
       

Real-world examples can be found in ([grunt-css-analysis](https://github.com/campbes/grunt-css-analysis)) and ([grunt-complexity-report](https://github.com/campbes/grunt-complexity-report))  
    

## Motivation

Jenkins has plugins to report on violations from a number of standard tools. There are many tools that are used to generate errors and issues, in a huge range of formats. 
Violation-reporter is designed as a way to take this data and transform it into one of the available standards.
Generally intended to be run from grunt or another build tool.

It currently only outputs to console, checkstyle and PMD format, but would be easy to extend to other XML formats.


## Installation

npm install violation-reporter

## Contributors

Stuart Campbell ([campbes](https://github.com/campbes))

## License

Released under the [MIT License](http://opensource.org/licenses/MIT)
