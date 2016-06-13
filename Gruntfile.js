module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat:{

      seajs: {
      files: {
      'dist/main.js': ['js/m1.js','js/m2.js','js/m3.js']

             }
         }
      },
    uglify: {
      seajs: {
          files: {
          'dist/main.min.js': ['js/m1.js','js/m2.js','js/m3.js']
             }
         }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Default task(s).
  grunt.registerTask('default', ['concat','uglify']);

};
