module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-ts');

	grunt.initConfig({
		ts: {
			main:{
				src: ['typescript/*.ts'],
				//dest: 'javascript/',
				// combine all typescript files in on javascript file
				out: 'javascript/main.js'
			}
		}
	});

	grunt.registerTask('default',['ts']);
}
