module.exports = function(grunt, XMLReporter) {
	var checkstyleReporter = function(filenames, options) {
		this.init(options, 'checkstyleXML', __dirname);
	};

	checkstyleReporter.prototype = new XMLReporter();

	checkstyleReporter.prototype.priorities = {
		'info' : 5,
		'warning' : 3,
		'error' : 1
	};

	checkstyleReporter.prototype.violations = function(filepath, violations) {

		violations = violations.map(function(data) {
			data.priority = this.priorities[data.severity];
			return data;
		}, this);

		var message = grunt.template.process(this.tpl.violation, {
			data: {
				filepath: filepath,
				escape: this.escape,
				violations: violations
			}
		});

		this.write(message);
	};

	return checkstyleReporter;
};
