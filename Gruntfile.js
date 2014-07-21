

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        options: {
              style: 'compressed', 
              compass: true
        },
        files: {
              'src/css/justified-image-grid.css': 'src/sass/justified-image-grid.scss'
        }
      }
    },
  watch: {
    css: {
        files: ['src/**/*.scss'],
        tasks: ['sass','htmlbuild']
    },
    html:{
      files: ['src/*.*'],
      tasks: ['htmlbuild']

    }
  },  
  copy:{
    html:{
       files: [{expand: true, cwd: 'src/', src: ['*.html'], dest: 'build/'}]
    }
  },

  'gh-pages': {
    options: {
      base: 'build'
    },
    src: ['**']
  },

  htmlbuild: {
        dist: {
            src: 'src/index.html',
            dest: 'build/',
            options: {
                styles: {
                    mediaqueries: 'src/css/justified-image-grid.css'
                }
            }
        }
    }

});



  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-html-build');



  // default Task for compiling SCSS and build docu (cross browser test)
  grunt.registerTask('default', ['sass', 'htmlbuild','watch']);
  
};
