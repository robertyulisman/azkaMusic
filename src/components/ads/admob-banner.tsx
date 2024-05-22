import { admob, setting } from '@src/config';
import React from 'react';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

type Props = {};

const AdmobBanner = (props: Props) => {
  const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : admob.adaptiveBanner;
  if (setting.showAds) {
    return <BannerAd unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />;
  }

  return null;
};

export default AdmobBanner;
