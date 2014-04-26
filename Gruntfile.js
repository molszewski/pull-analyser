module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [
                "Gruntfile.js",
                "src/**/*.js",
                "test/**/*.js"
            ],
            options: {
                // environments
                "browser": true,
                "devel": false,
                "node": true,
                // enforcing
                "bitwise": true,
                "camelcase": true,
                "curly": true,
                "eqeqeq": true,
                "es3": true,
                "forin": true,
                "freeze": true,
                "immed": true,
                "latedef": true,
                "newcap": true,
                "noarg": true,
                "noempty": true,
                "nonbsp": true,
                "nonew": true,
                "plusplus": true,
                "strict": false,
                "trailing": true,
                "undef": true,
                "unused": true,
                // relaxing
                "sub": true,
                "globals": {
                    "describe": false,
                    "it": false,
                    "expect": false
                }
            }
        },
        "jasmine_node": {
            options: {
                forceExit: true,
                matchall: false,
                jUnit: {
                    report: true,
                    savePath: "./build/reports/jasmine/",
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
    grunt.registerTask('test', ['jshint', 'jasmine_node']);
    // Default task.
    grunt.registerTask('default', ['test']);
};
