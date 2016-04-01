
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
        src: 'build/subsonic-api.js',
        dest: 'build/subsonic-api.min.js'
      }
    },
    "babel": {
      options: {
        sourceMap: true,
        plugins: [
          "transform-es2015-arrow-functions",
          "transform-es2015-classes",
          "check-es2015-constants",
          "transform-es2015-block-scoping"
        ]
      },
      build: {
        files: {
          "build/subsonic-api.js": "src/subsonic-api.js"
        }
      }
    }
  });

  grunt.registerTask("default", ["babel", "uglify"]);
};
