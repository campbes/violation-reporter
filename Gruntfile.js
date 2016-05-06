/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    files: ['Gruntfile.js', 'tasks/**/*.js'],

    watch: {
      all: {
        files: '<%= files %>'
      }
    },

    jshint: {
      all: '<%= files %>'
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);

  // Used for testing only, you shouldn't add this to your code:
  grunt.loadTasks('tasks');

};
