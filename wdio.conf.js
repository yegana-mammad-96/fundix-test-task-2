exports.config = {
  // Appium server details
  hostname: 'localhost',
  port: 4723,
  path: '/wd/hub',  // Default for Appium

  // Test files
  specs: ['./test/**/*.js'],

  // Capabilities for Android (one per test suite)
  capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': '9267514f',  // From 'adb devices'
    'appium:platformVersion': '14',
    'appium:appPackage': 'com.android.settings',  // Settings app
    'appium:appActivity': '.Settings'  // Launch activity
  }],

  // Framework and reporters
  framework: 'mocha',
  reporters: ['spec'],  // Console output

  // Mocha opts
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};