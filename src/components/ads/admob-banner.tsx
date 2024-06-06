import { admob, setting } from '@src/config';
import { SIZE } from '@src/constants/themes';
import React from 'react';
import { View } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

type Props = {
  type?: 'large' | 'banner';
};

const AdmobBanner = ({ type = 'banner' }: Props) => {
  const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : admob.adaptiveBanner;
  if (setting.showAds) {
    if (type === 'large')
      return (
        <View style={{ height: 250, width: SIZE.width, alignItems: 'center' }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.MEDIUM_RECTANGLE} />
        </View>
      );
    if (type === 'banner')
      return <BannerAd unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />;

    return null;
  }

  return null;
};

export default AdmobBanner;
