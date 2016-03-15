# JoyShare
Files sharing system that apply for meeting files sharing and real time files editing
<p align="center">
  <img src="https://github.com/yesuntianyi/JoyShare/blob/master/JoyShare_screenshot/files.jpg" width="270"/>
  <img src="https://github.com/yesuntianyi/JoyShare/blob/master/JoyShare_screenshot/share.jpg" width="270"/>
  <img src="https://github.com/yesuntianyi/JoyShare/blob/master/JoyShare_screenshot/userinfo.jpg" width="270"/>
</p>

#Frameworks

#### 1.  Ionic
#### 2.  Node.js
#### 3.  Angular.Js
#### 4.  Express.js
#### 5.  Mongoose for MongoDB

<p align="center">
  <img src="https://github.com/yesuntianyi/JoyShare/blob/master/JoyShare_screenshot/MEAN.jpg" width="800"/>
</p>


# What is Ionic?

[Ionic](http://ionicframework.com/) is the open source HTML5 Mobile Framework for building amazing, cross-platform hybrid native apps and mobile websites with HTML, JavaScript, and CSS. If you know how to build or design websites, you will be able to build a real mobile app with Ionic!

We built Ionic because we wanted a framework that focused on building high quality hybrid native apps and mobile web apps using open web technologies we loved. The same technology the world has been using for decades to build websites, desktop applications, and now mobile and tablet apps. We wanted this framework to be obsessive about great design and performance, and work on multiple platforms without changing a thing.

We rejected the idea that web mobile apps had to be clunky, slow, and non-native. We believed that we could bring the best of the web together with the best of the native platforms without sacrificing the power, accessibility, and portability of the open web.

Above all, we built Ionic to be the easiest way for the next generation of developers to get into mobile and start building apps that compete with the best on the app store, and do it affordably. 

Today, Ionic powers over 1.5 million mobile apps and websites (and even some desktop apps!), built by small startups up to Fortune 50 companies. Ionic developers come from hundreds of countries around the world, and have helped build a community that boasts hundreds of monthly meetings, conference talks, and workshops; an incredibly active [forum](http://forum.ionicframework.com) and [Theme and Plugin Marketplace](https://market.ionic.io); and some pretty [amazing apps](http://showcase.ionicframework.com/).

## Quick Start

To start using ionic, you have two options: copy over the built JS and CSS files, or
use the `ionic` tool ([ionic-cli](https://github.com/driftyco/ionic-cli)) which can be installed through npm (recommended): _(You may need to prefix the command with `sudo` depending on your OS and setup.)_

Additionally, we have a desktop GUI tool that we recently released called [Ionic Lab](http://lab.ionic.io). If you try it, let us know what you think!

To get started with the CLI flow, fire up your terminal and run:

```bash
npm install -g ionic
```

If you would like to use a visable Ionic GUI tool:

```bash
download Ionic Lab for windows/Mac OS
```

With the help of Ionic Lab, you can see immediately the changing, after you changed your codes:

```bash
Using Editor Webstrom or other editors
```

## Build and Run 

To add the platform

```bash
ionic platform android
```

To build 

```bash
ionic build android
```

To run (the best way to run it is directly on device android/ios phones,because emulator is extremely slow)

```bash
ionic run android
```
#Add Cordova camera plugin using ionic Lab

1.Create ionic framework sample using the below ionic lab, here we are creating ionic project

<p align="center">
  <img src="https://github.com/yesuntianyi/JoyShare/blob/master/JoyShare_screenshot/create-ionic-project.jpg" width="500"/>
</p>

2.Then add the android and iOS platforms using the below ionic commands.

```bash
ionic platform add android
ionic platform add ios
```

3.Next in this application we are integrating ngCordova library, if you are new to ngCordova framework here is simple description

###What is ng-Cordova?

“ngCordova is a collection of AngularJS services and extensions created by Ionic and driven by the community. These services make it easier to integrate Cordova plugins into Ionic applications”

Then, start downloading the latest ngcordvao library and place the ng-cordova.min.js file in your project’s www/js directory.

Add the ng-cordova.min.js reference above to the cordova.js file in the index.html as mentioned in the below.

```bash
    <script src="cordova.js"></script>
    <script src="js/ng-cordova.min.js"></script>
```

4.ng-cordova integration is still not over, now we need to include it for use in AngularJS.  Open your app.js file and alter the angular.module line to look like the following.

```bash
var app = angular.module('app', ['ionic', 'ngCordova','app.controllers', 'app.routes', 'app.services', 'app.directives'])
```

### Adding Codova plugin camera

5.The next thing we want to do is add the Apache Cordova camera plugin. This can be done by running the following step using ionic lab.

<p align="center">
  <img src="https://github.com/yesuntianyi/JoyShare/blob/master/JoyShare_screenshot/add-camera-plugin.jpg" width="700"/>
</p>
