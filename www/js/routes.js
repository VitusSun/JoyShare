angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.files'
      2) Using $state.go programatically:
        $state.go('tabsController.files');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab3/page2
      /page1/tab5/page2
      /page1/tab6/page2
  */
  .state('tabsController.files', {
    url: '/page2',
    views: {
      'tab3': {
        templateUrl: 'templates/files.html',
        controller: 'filesCtrl'
      },
      'tab5': {
        templateUrl: 'templates/files.html',
        controller: 'filesCtrl'
      },
      'tab6': {
        templateUrl: 'templates/files.html',
        controller: 'filesCtrl'
      }
    }
  })

  .state('tabsController.userInfo', {
    url: '/page3',
    views: {
      'tab6': {
        templateUrl: 'templates/userInfo.html',
        controller: 'userInfoCtrl'
      }
    }
  })

  .state('tabsController.friends', {
    url: '/page4',
    views: {
      'tab5': {
        templateUrl: 'templates/friends.html',
        controller: 'friendsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
          templateUrl: 'templates/login.html',
          controller: 'loginCtrl'
  })

  .state('tabsController.newAccount', {
    url: '/page6',
    views: {
      'tab6': {
        templateUrl: 'templates/newAccount.html',
        controller: 'newAccountCtrl'
      }
    }
  })

  .state('tabsController.addFriend', {
    url: '/page7',
    views: {
      'tab5': {
        templateUrl: 'templates/addFriend.html',
        controller: 'addFriendCtrl'
      }
    }
  })

  .state('tabsController.share', {
    url: '/page9',
    views: {
      'tab5': {
        templateUrl: 'templates/share.html',
        controller: 'shareCtrl'
      }
    }
  })

  .state('tabsController.cellphoneContact', {
    url: '/page10',
    views: {
      'tab5': {
        templateUrl: 'templates/cellphoneContact.html',
        controller: 'cellphoneContactCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.addFolder'
      2) Using $state.go programatically:
        $state.go('tabsController.addFolder');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab3/page11
      /page1/tab5/page11
      /page1/tab6/page11
  */
  .state('tabsController.addFolder', {
    url: '/page11',
    views: {
      'tab3': {
        templateUrl: 'templates/addFolder.html',
        controller: 'addFolderCtrl'
      },
      'tab5': {
        templateUrl: 'templates/addFolder.html',
        controller: 'addFolderCtrl'
      },
      'tab6': {
        templateUrl: 'templates/addFolder.html',
        controller: 'addFolderCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.camera'
      2) Using $state.go programatically:
        $state.go('tabsController.camera');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab3/page12
      /page1/tab5/page12
      /page1/tab6/page12
  */
  .state('tabsController.camera', {
    url: '/page12',
    views: {
      'tab3': {
        templateUrl: 'templates/camera.html',
        controller: 'cameraCtrl'
      },
      'tab5': {
        templateUrl: 'templates/camera.html',
        controller: 'cameraCtrl'
      },
      'tab6': {
        templateUrl: 'templates/camera.html',
        controller: 'cameraCtrl'
      }
    }
  })

  .state('tabsController.editYourInfos', {
    url: '/page13',
    views: {
      'tab6': {
        templateUrl: 'templates/editYourInfos.html',
        controller: 'editYourInfosCtrl'
      }
    }
  })

  .state('tabsController.settingPage', {
    url: '/page14',
    views: {
      'tab6': {
        templateUrl: 'templates/settingPage.html',
        controller: 'settingPageCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.searchYourImage'
      2) Using $state.go programatically:
        $state.go('tabsController.searchYourImage');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab3/page15
      /page1/tab5/page15
      /page1/tab6/page15
  */
  .state('tabsController.searchYourImage', {
    url: '/page15',
    views: {
      'tab3': {
        templateUrl: 'templates/searchYourImage.html',
        controller: 'searchYourImageCtrl'
      },
      'tab5': {
        templateUrl: 'templates/searchYourImage.html',
        controller: 'searchYourImageCtrl'
      },
      'tab6': {
        templateUrl: 'templates/searchYourImage.html',
        controller: 'searchYourImageCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.fileManager'
      2) Using $state.go programatically:
        $state.go('tabsController.fileManager');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab3/page16
      /page1/tab5/page16
      /page1/tab6/page16
  */
  .state('tabsController.fileManager', {
    url: '/page16',
    views: {
      'tab3': {
        templateUrl: 'templates/fileManager.html',
        controller: 'fileManagerCtrl'
      },
      'tab5': {
        templateUrl: 'templates/fileManager.html',
        controller: 'fileManagerCtrl'
      },
      'tab6': {
        templateUrl: 'templates/fileManager.html',
        controller: 'fileManagerCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/tab3/page2')



});
