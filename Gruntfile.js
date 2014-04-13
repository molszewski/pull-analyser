module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });

    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt);

    // Default task.
    grunt.registerTask('default', []);
};
