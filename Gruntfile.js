module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine_node: {
            options: {
                forceExit: true,
                matchall: false,
                jUnit: {
                    report: true,
                    savePath : "./build/reports/jasmine/",
                    useDotNotation: true,
                    consolidate: true
                }
            },
            all: ['test/']
        }
    });

    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt);

    // Test task
    grunt.registerTask('test', ['jasmine_node']);
    // Default task.
    grunt.registerTask('default', ['test']);
};
