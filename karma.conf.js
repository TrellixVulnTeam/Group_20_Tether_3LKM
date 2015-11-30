// Karma configuration
// Generated on Sun Nov 22 2015 17:52:59 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../../../..',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../Group_20_Tether/Tether/www/bower_components/angular/angular.js',
      'Desktop/2015W/CPSC410/Group_20_Tether/Tether/www/bower_components/angular-cookies/angular-cookies.js',
      'Desktop/2015W/CPSC410/Group_20_Tether/Tether/www/bower_components/angular-resource/angular-resource.js',
      'Desktop/2015W/CPSC410/Group_20_Tether/Tether/www/bower_components/angular-sanitize/angular-sanitize.js',
      'Desktop/2015W/CPSC410/Group_20_Tether/Tether/www/bower_components/angular-route/angular-route.js',
      'Desktop/2015W/CPSC410/Group_20_Tether/Tether/www/angularUI_components/dist/js/mobile-angular-ui.core.js',
      'Desktop/2015W/CPSC410/Group_20_Tether/Tether/www/angularUI_components/dist/js/mobile-angular-ui.js',
      'Desktop/2015W/CPSC410/Group_20_Tether/Tether/www/bower_components/angular-mocks/angular-mocks.js',

      'Desktop/2015W/CPSC410/Group_20_Tether/Tether/www/scripts/app.js',
      'Desktop/2015W/CPSC410/Group_20_Tether/Tether/www/scripts/CordovaInit.js',
      'Desktop/2015W/CPSC410/Group_20_Tether/Tether/www/scripts/*/*.js'
    ],


    // list of files to exclude
    exclude: [
      'Desktop/2015W/CPSC410/Group_20_Tether/Tether/www/scripts/tests/contract_test.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'Desktop/2015W/CPSC410/Group_20_Tether/Tether/www/scripts/controllers/*.js': ['coverage'],
      'Desktop/2015W/CPSC410/Group_20_Tether/Tether/www/scripts/services/*.js': ['coverage']

    },


    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Safari'],


    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  });
};
