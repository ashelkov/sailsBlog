module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
		'jst:dev',
		'less:dev',
		'sync:dev',
		'jade:dev',
		'coffee:dev'
	]);
};
