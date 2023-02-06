module.exports = {
  expo: {
    name: 'aethereus-app',
    slug: 'aethereus-app',
    platforms: ['ios', 'android'],
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: [
      '**/*',
    ],
    ios: {
      supportsTablet: true,
    },
    android: {
      package: 'com.myapp.example',
    },
    extra: {
      android: {
        "android:maxSdkVersion": 28,
        "android:targetSdkVersion": 28
      },
      eas: {
        projectId: "2e0c487a-2776-4b38-af67-97912ad0a2a5"
      }
    }
  },
};
      // {
      //   "expo": {
      //     "name": "aethereus-app",
      //     "slug": "aethereus-app",
      //     "sdkVersion": "37.0.0",
      //     "privacy": "public",
      //     "platforms": [
      //       "ios",
      //       "android",
      //       "web"
      //     ],
      //     "version": "1.0.0",
      //     "orientation": "portrait",
      //     "icon": "./assets/icon.png",
      //     "splash": {
      //       "image": "./assets/splash.png",
      //       "resizeMode": "contain",
      //       "backgroundColor": "#ffffff"
      //     },
      //     "updates": {
      //       "fallbackToCacheTimeout": 0
      //     },
      //     "assetBundlePatterns": [
      //       "**/*"
      //     ],
      //     "ios": {
      //       "supportsTablet": true
      //     },
      //     "description": "",
      
      //     "android": {
      //       "package": "com.yourcompany.yourappname",
      //       "versionCode": 1
      //     }
      