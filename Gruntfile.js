module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			perfJS: {
			    files: ['src/js/*.js'],
			    tasks: ['uglify']
			},
			mainJS: {
				files: ['src/views/js/*.js'],
				tasks: ['uglify']
			},
			html: {
				files: ['src/*.html', 'src/**/*.html'],
				tasks: ['htmlmin']
			},
			css: {
				files: ['src/css/*.css', 'src/**/*.css'],
				tasks: ['cssmin']
			}
		},
		uglify: {
			options: {
				mangle: false
			},
    		perfJS: {
      			files: {
        			'dist/js/perfmatters.js': ['src/js/perfmatters.js']
        		}
    		},
    		mainJS: {
    			files: {
    				'dist/views/js/main.js': ['src/views/js/main.js']
    			}
    		}
  		},
  		htmlmin: {
    		dist: {
      			options: {
        			removeComments: true,
        			collapseWhitespace: true
      			},
      			files: [{
			    	expand: true,
			    	cwd: 'src/',
			    	src: ['**/*.html'],
			    	dest: 'dist/'
			   	}]
    		}
  		},
  		imagemin: {
  			png: {
	    		options: {
	        		optimizationLevel: 3,
	      		},
			    files: [{
			    	expand: true,
			    	cwd: 'src/',
			    	src: ['**/*.png'],
			    	dest: 'dist/'
			   	}]
			},
  			jpg: {
	    		options: {
	        		optimizationLevel: 3,
	      		},
			    files: [{
			    	expand: true,
			    	cwd: 'src/',
			    	src: ['**/*.jpg'],
			    	dest: 'dist/'
			   	}]
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['**/*.css',],
					dest: 'dist/',
					ext: '.css'
				}]
			}
		},
		'gh-pages': {
			options: {
				base: 'dist',
			},
			src: ['**']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-gh-pages');
	grunt.registerTask('default', ['watch']);
};