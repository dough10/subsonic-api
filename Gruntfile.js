
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-babel');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    "uglify": {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'es5/subsonic-api.js',
        dest: 'es5/subsonic-api.min.js'
      }
    },
    "babel": {
      options: {
        sourceMap: true,
        plugins: [
          "transform-es2015-arrow-functions",
          "transform-es2015-classes",
          "transform-es2015-block-scoping"
        ]
      },
      build: {
        files: {
          "es5/subsonic-api.js": "es6/subsonic-api.js"
        }
      }
    }
  });

  grunt.registerTask("default", ["babel", "uglify"]);
};
