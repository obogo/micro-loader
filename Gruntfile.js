module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            // define the files to lint
            files: ['src/**/*.js']
        },
        uglify: {
            build: {
                options: {
                    mangle: false,
                    compress: false,
                    preserveComments: 'some',
                    beautify: true,
                    report: 'gzip'
                },
                files: {
                    'build/<%= pkg.name %>.js': [
                        'src/microloader.js'
                    ]
                }
            },
            build_min: {
                options: {
                    report: 'min',
                    compress: true
                },
                files: {
                    'build/<%= pkg.name %>.min.js': [
                        'build/<%= pkg.name %>.js'
                    ]
                }
            }
        },
        replace: {
            dist: {
                options: {
                    patterns: [
                        { match: 'name', replacement: '<%= pkg.name %>' },
                        { match: 'url', replacement: '<%= pkg.url %>' }
                    ]
                },
                files: [
                    { expand: true, flatten: true, src: ['build/*.js'], dest: 'build/' }
                ]
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-replace');

    grunt.registerTask('default', ['jshint', 'uglify', 'replace']);
};