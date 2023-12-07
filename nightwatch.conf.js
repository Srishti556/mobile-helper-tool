"test_settings": {
 // other envs above this line

 app: {
   selenium: {
     start_process: true,
     use_appium: true,
     host: 'localhost',
     port: 4723,
     server_path: '',
     // args to pass when starting the Appium server
     cli_args: [
       // automatically download the required chromedriver
       // '--allow-insecure=chromedriver_autodownload'
     ],
     // Remove below line if using Appium v1
     default_path_prefix: ''
   },
   webdriver: {
     timeout_options: {
       timeout: 150000,
       retry_attempts: 3
     },
     keep_alive: false,
     start_process: false
   }
 },

 'app.android.emulator': {
   extends: 'app',
   'desiredCapabilities': {
     // More capabilities can be found at https://github.com/appium/appium-uiautomator2-driver#capabilities
     browserName: null,
     platformName: 'android',
     // `appium:options` is not natively supported in Appium v1, but works with Nightwatch.
     // If copying these capabilities elsewhere while using Appium v1, make sure to remove `appium:options`
     // and add `appium:` prefix to each one of its capabilities, e.g. change 'app' to 'appium:app'.
     'appium:options': {
       automationName: 'UiAutomator2',
       // Android Virtual Device to run tests on
       avd: 'nightwatch-android-11',
       // While Appium v1 supports relative paths, it's more safe to use absolute paths instead.
       // Appium v2 does not support relative paths.
       app: `${__dirname}/wikipedia.apk`,
       appPackage: 'org.wikipedia',
       appActivity: 'org.wikipedia.main.MainActivity',
       appWaitActivity: 'org.wikipedia.onboarding.InitialOnboardingActivity',
       // chromedriver executable to use for testing web-views in hybrid apps.
       // add '.exe' at the end below (making it 'chromedriver.exe') if testing on windows.
       chromedriverExecutable: `${__dirname}/chromedriver-mobile/chromedriver`,
       newCommandTimeout: 0
     }
   }
 },

 'app.android.real': {
   extends: 'app',
   'desiredCapabilities': {
     // More capabilities can be found at https://github.com/appium/appium-uiautomator2-driver#capabilities
     browserName: null,
     platformName: 'android',
     // `appium:options` is not natively supported in Appium v1, but works with Nightwatch.
     // If copying these capabilities elsewhere while using Appium v1, make sure to remove `appium:options`
     // and add `appium:` prefix to each one of its capabilities, e.g. change 'app' to 'appium:app'.
     'appium:options': {
       automationName: 'UiAutomator2',
       // While Appium v1 supports relative paths, it's more safe to use absolute paths instead.
       // Appium v2 does not support relative paths.
       app: `${__dirname}/wikipedia.apk`,
       appPackage: 'org.wikipedia',
       appActivity: 'org.wikipedia.main.MainActivity',
       appWaitActivity: 'org.wikipedia.onboarding.InitialOnboardingActivity',
       // 'chromedriver' binary is required while testing hybrid mobile apps.
       // 
       // Set `chromedriverExecutable` to '' to use binary from `chromedriver` NPM package (if installed).
       // Or, put '--allow-insecure=chromedriver_autodownload' in `cli_args` property of `selenium`
       // config (see 'app' env above) to automatically download the required version of chromedriver
       // (delete `chromedriverExecutable` capability below in that case).
       chromedriverExecutable: '',
       newCommandTimeout: 0,
       // add device id of the device to run tests on, if multiple devices are online
       // Run command: `$ANDROID_HOME/platform-tools/adb devices` to get all connected devices
       // udid: '',
     }
   }
 },
}
