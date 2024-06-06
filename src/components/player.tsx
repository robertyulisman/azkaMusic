import { PlayerControls } from '@src/components/PlayerControls';
import { COLORS, SIZE } from '@src/constants/themes';
import { colors, fontSize } from '@src/constants/tokens';
import { defaultStyles, utilsStyles } from '@src/customstyles';
import { useTrackPlayerFavorite } from '@src/hooks/useTrackPlayerFavorite';
import { FC } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LoaderKit from 'react-native-loader-kit';
import { Lyric } from 'react-native-lyric';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { useActiveTrack } from 'react-native-track-player';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MovingText from './MovingText';
import { PlayerProgressBar } from './PlayerProgressbar';
import { PlayerRepeatToggle } from './PlayerRepeatToggle';
import { PlayerVolumeBar } from './PlayerVolumeBar';
import { AdmobBanner } from './ads';
import { Text } from './common';

type PlayerScreenProps = {
  lrc: string;
  currentTime: number;
  playing: boolean | undefined;
};
const PlayerScreen: FC<PlayerScreenProps> = ({ lrc, currentTime, playing }) => {
  const activeTrack = useActiveTrack();

  const { top, bottom } = useSafeAreaInsets();

  const { isFavorite, toggleFavorite } = useTrackPlayerFavorite();

  if (!activeTrack) {
    return (
      <View style={[defaultStyles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator color={colors.icon} />
      </View>
    );
  }

  const lineRenderer = ({ lrcLine: { content }, active }: any) => {
    return (
      <Text
        variant={active ? 'label-1' : 'body-2'}
        style={{
          textAlign: 'center',
          color: active ? COLORS.warning['100'] : COLORS.warning['200'],
          opacity: active ? 1 : 0.4,
        }}
      >
        {content}
      </Text>
    );
  };

  return (
    <View style={styles.overlayContainer}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View
        style={{
          position: 'absolute',
          top: 20,
          alignSelf: 'center',
          alignItems: 'center',
          zIndex: 999,
        }}
      >
        <FastImage
          style={{
            width: 140,
            height: 140,
            borderRadius: 70,
            opacity: 0.5,
          }}
          source={{ uri: activeTrack.artwork }}
        />
        {playing && playing !== undefined && (
          <LoaderKit
            style={{ position: 'absolute', top: 35, width: 60, height: 60 }}
            name="LineScalePulseOut"
            color={colors.icon}
          />
        )}
      </View>

      <View style={{ flex: 1, marginTop: 24 }}>
        <View>
          <Lyric
            style={{ paddingHorizontal: 16 }}
            lrc={lrc}
            currentTime={currentTime}
            lineHeight={24}
            lineRenderer={lineRenderer}
            autoScroll={true}
            activeLineHeight={24}
            showsVerticalScrollIndicator={false}
          />
          <Svg
            style={{ position: 'absolute', left: 0, right: 0, top: 0 }}
            width={SIZE.width}
            height={200}
          >
            <Defs>
              <LinearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                <Stop offset="50%" stopColor={COLORS.dark['900']} />
                <Stop offset="100%" stopColor={COLORS.primary['500']} stopOpacity={0} />
              </LinearGradient>
            </Defs>
            <Rect fill="url(#a)" width={SIZE.width} height={200} />
          </Svg>
          <Svg
            style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}
            width={SIZE.width}
            height={200}
          >
            <Defs>
              <LinearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                <Stop offset="0%" stopColor={'transparent'} stopOpacity={0} />
                <Stop offset="80%" stopColor={COLORS.dark['900']} />
              </LinearGradient>
            </Defs>
            <Rect fill="url(#a)" width={SIZE.width} height={200} />
          </Svg>
        </View>

        <View style={{ flex: 1 }}>
          <View style={{ marginTop: 'auto', position: 'relative', paddingHorizontal: 16 }}>
            <View style={{ marginBottom: 22 }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {/* Track title */}
                <View style={styles.trackTitleContainer}>
                  <MovingText
                    text={activeTrack.title ?? ''}
                    animationThreshold={30}
                    style={styles.trackTitleText}
                  />
                </View>

                {/* Favorite button icon */}
                <FontAwesome
                  name={isFavorite ? 'heart' : 'heart-o'}
                  size={20}
                  color={isFavorite ? COLORS.primary['500'] : COLORS.light['100']}
                  style={{ marginHorizontal: 14 }}
                  onPress={toggleFavorite}
                />
              </View>

              {/* Track artist */}
              {/* {activeTrack.artist && (
                <Text variant="body-1" numberOfLines={1} style={[{ marginTop: 6 }]}>
                  {activeTrack.artist}
                </Text>
              )} */}
            </View>

            <PlayerProgressBar />
            <PlayerControls style={{ marginTop: 22 }} />
          </View>

          <View style={{ paddingHorizontal: 16, marginTop: 40, marginBottom: 22 }}>
            <PlayerVolumeBar style={{ marginTop: 'auto', marginBottom: 10 }} />
          </View>

          <View style={utilsStyles.centeredRow}>
            <PlayerRepeatToggle size={30} style={{ marginBottom: 32 }} />
          </View>
        </View>
        <AdmobBanner />
      </View>
    </View>
  );
};

const DismissPlayerSymbol = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{
        position: 'absolute',
        top: top + 8,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <View
        accessible={false}
        style={{
          width: 50,
          height: 8,
          borderRadius: 8,
          backgroundColor: '#fff',
          opacity: 0.7,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    flex: 1,
    backgroundColor: COLORS.dark['900'],
  },
  trackTitleContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: 16,
    fontFamily: 'Manrope-ExtraBold',
  },
  trackArtistText: {
    ...defaultStyles.text,
    fontSize: fontSize.base,
    opacity: 0.8,
    maxWidth: '90%',
    fontFamily: 'Manrope-Regular',
  },
});

export default PlayerScreen;
