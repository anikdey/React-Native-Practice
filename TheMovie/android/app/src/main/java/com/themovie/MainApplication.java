package com.themovie;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.reactnativeandroidmediaplayer.mediaplayer.MediaPlayerPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.remobile.splashscreen.RCTSplashScreenPackage;
import java.util.Arrays;
import java.util.List;
//import com.wog.videoplayer.VideoPlayerPackage;
import com.brentvatne.react.ReactVideoPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
              new MainReactPackage(),
            new MediaPlayerPackage(),
              new RCTSplashScreenPackage(MainActivity.activity),
              new ReactVideoPackage()

      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }




    //new RCTSplashScreenPackage(MainActivity.activity);      // <------ add here


}




