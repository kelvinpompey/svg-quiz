import { useRef } from 'react';
import { Platform } from 'react-native';
import { BannerAd, TestIds, BannerAdSize, useForeground } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-3588440997094128/4609276572';

export const Banner = () => {
  const bannerRef = useRef<BannerAd>(null);

  // (iOS) WKWebView can terminate if app is in a "suspended state", resulting in an empty banner when app returns to foreground.
  // Therefore it's advised to "manually" request a new ad when the app is foregrounded (https://groups.google.com/g/google-admob-ads-sdk/c/rwBpqOUr8m8).
  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load();
  });

  return <BannerAd ref={bannerRef} unitId={adUnitId} size={BannerAdSize.BANNER} />;
};
