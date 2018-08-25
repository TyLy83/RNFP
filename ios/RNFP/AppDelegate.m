/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * AIzaSyCcoCNw7etF7x1MtRakDlqzo_C7d49OAns
 */
#import "RNSplashScreen.h"
#import "AppDelegate.h"

#import <Firebase.h>

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <GoogleMaps/GoogleMaps.h>
#import <FBSDKCoreKit/FBSDKCoreKit.h>

#import "RNGoogleSignin.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [FIRApp configure];
  NSURL *jsCodeLocation;
  
  [GMSServices provideAPIKey:@"AIzaSyCcoCNw7etF7x1MtRakDlqzo_C7d49OAns"];

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"RNFP"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  [[FBSDKApplicationDelegate sharedInstance] application:application
                           didFinishLaunchingWithOptions:launchOptions];

  [RNSplashScreen show];
  
  return YES;
}

- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication
         annotation:(id)annotation {
  
//  BOOL handled = [[FBSDKApplicationDelegate sharedInstance] application:application
//                                                                openURL:url
//                                                      sourceApplication:sourceApplication
//                                                             annotation:annotation
//                  ] || [RNGoogleSignin application:application
//                                              openURL:url
//                                    sourceApplication:sourceApplication
//                                           annotation:annotation
//                           ];
  
  // Add any custom logic here.
  
  return [[FBSDKApplicationDelegate sharedInstance] application:application
                                                                 openURL:url
                                                       sourceApplication:sourceApplication
                                                              annotation:annotation ]
          || [RNGoogleSignin application:application
                                 openURL:url
                       sourceApplication:sourceApplication
                              annotation:annotation
              ];
}

@end
