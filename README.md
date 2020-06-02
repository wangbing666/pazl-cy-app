# demo

## 编码规范

编码规范遵循 [ESLint](https://eslint.bootcss.com/) 。

## 使用到的第三方库

|库名|用途|
|-------|-----------|
|[react-native](https://github.com/facebook/react-native)|React Native|
|[react](https://github.com/facebook/react)|React|
|[react-navigation](https://reactnavigation.org/)|页面导航|
|[rc-form](https://github.com/react-component/form)|react和react-native所使用的表单处理组件|

## 如何运行

首先参考官方文档 [Getting Started](https://reactnative.dev/docs/getting-started.html) 安装相关开发工具。

### iOS

仅支持macOS平台，需要先安装Xcode和CocoaPods, 请到平安软件超市下载 

Clone代码到本地，然后执行下面的命令。
```
> cd ReactNativeDemo
> yarn install
> cd ios
> pod install
> react-native run-ios或者将ios文件夹下的zkApp.xcworkspace文件夹放到xcode工具下后点击左上角的运行按钮
```

### Android

macOS和Windows平台均支持，需要先安装Android Studio，并确保在Android Studio里编译通过（主要是根据提示“Update Build Tools version and sync project”）。如果要使用模拟器来运行，在Android Studio里打开AVD Manager，创建一个模拟器并启动。如果要使用真实设备来运行，确保真实设备已通过数据线连接到电脑，并且设备已打开开发模式。  

Clone代码到本地，然后执行下面的命令。
```
> cd ReactNativeDemo
> yarn install
> react-native run-android或者将项目下的android文件夹放到Android Studio中，待编译完成后点击播放按钮
```

所有包含原生工程的包都已使用 `react-native link` 链接过，因此无需再次执行。

## 生成Release包

### iOS

在Xcode里打开项目下的ios工程，依次选择 Product => Archive，按照提示操作即可。

### Android

执行下面的命令来打包,或者使用build_android_pgy.sh脚本来打包，生成的APK文件路径为“android/app/build/outputs/apk/app-release.apk”。
```
> cd android
> ./gradlew assembleRelease
```