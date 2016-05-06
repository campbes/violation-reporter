module.exports = function() {

	var MultiReporter = function(filenames, options) {
		options.templates = options.templates || {};
		this.filenames = filenames;
		this.options = options;
		this.reporters = [];
	};

	MultiReporter.prototype = {

		addReporter: function(ReporterConstructor) {
			this.reporters.push(new ReporterConstructor(this.filenames, this.options));
		},

		invoke: function(methodName, argumentsArray) {
			this.reporters.forEach(function(reporter) {
				if(!reporter[methodName]) {
					return;
				}
				reporter[methodName].apply(reporter, argumentsArray);
			});
		},

		violations: function(filepath, violations) {
			this.invoke('violations', [filepath, violations]);
		},

		start: function() {
			this.invoke('start');
		},

		finish: function() {
			this.invoke('finish');
		}

	};

	return MultiReporter;
};
