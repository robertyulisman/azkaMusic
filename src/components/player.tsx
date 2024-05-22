import { PlayerControls } from '@src/components/PlayerControls';
import { colors, fontSize } from '@src/constants/tokens';
import { defaultStyles, utilsStyles } from '@src/customstyles';
import { useTrackPlayerFavorite } from '@src/hooks/useTrackPlayerFavorite';
import { FC } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Lyric } from 'react-native-lyric';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useActiveTrack } from 'react-native-track-player';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MovingText from './MovingText';
import { PlayerProgressBar } from './PlayerProgressbar';
import { PlayerRepeatToggle } from './PlayerRepeatToggle';
import { PlayerVolumeBar } from './PlayerVolumeBar';

const { height, width } = Dimensions.get('screen');

type PlayerScreenProps = {
  lrc: string;
  currentTime: number;
};
const PlayerScreen: FC<PlayerScreenProps> = ({ lrc, currentTime }) => {
  const activeTrack = useActiveTrack();
  // const { imageColors } = usePlayerBackground(activeTrack?.artwork ?? '');

  const { top, bottom } = useSafeAreaInsets();

  const { isFavorite, toggleFavorite } = useTrackPlayerFavorite();

  if (!activeTrack) {
    return (
      <View style={[defaultStyles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator color={colors.icon} />
      </View>
    );
  }

  // console.log('imageColors', imageColors);

  const lineRenderer = ({ lrcLine: { content }, active }: any) => {
    return (
      <Text
        style={{
          textAlign: 'center',
          fontFamily: active ? 'Manrope-ExtraBold' : 'Manrope-Regular',
          color: 'white',
          opacity: active ? 1 : 0.4,
          fontSize: active ? 16 : 12,
        }}
      >
        {content}
      </Text>
    );
  };

  return (
    <LinearGradient style={{ flex: 1, width }} colors={[colors.background, colors.primary]}>
      <View style={styles.overlayContainer}>
        <DismissPlayerSymbol />

        <View style={{ flex: 1, marginTop: top + 70, marginBottom: bottom }}>
          <View style={styles.artworkImageContainer}>
            <Lyric
              // style={{ height: 300 }}
              lrc={lrc}
              currentTime={currentTime}
              lineHeight={24}
              lineRenderer={lineRenderer}
              autoScroll={true}
              activeLineHeight={24}
              showsVerticalScrollIndicator={false}
            />
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.8)', colors.background]}
              style={{ width, height: 150, top: 0, position: 'absolute' }}
              start={{ x: 0.5, y: 1 }}
              end={{ x: 0.5, y: 0 }}
            />
          </View>

          <View style={{ flex: 1 }}>
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.8)', colors.background, colors.background]}
              style={{ width, height: height * 0.6, bottom: 0, position: 'absolute' }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
            />
            <View style={{ marginTop: 'auto', position: 'relative', paddingHorizontal: 16 }}>
              <View style={{ height: 60 }}>
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
                    color={isFavorite ? colors.primary : colors.icon}
                    style={{ marginHorizontal: 14 }}
                    onPress={toggleFavorite}
                  />
                </View>

                {/* Track artist */}
                {activeTrack.artist && (
                  <Text numberOfLines={1} style={[styles.trackArtistText, { marginTop: 6 }]}>
                    {activeTrack.artist}
                  </Text>
                )}
              </View>

              <PlayerProgressBar style={{ marginTop: 32 }} />

              <PlayerControls style={{ marginTop: 40 }} />
            </View>

            <View style={{ paddingHorizontal: 16, marginTop: 40, marginBottom: 22 }}>
              <PlayerVolumeBar style={{ marginTop: 'auto', marginBottom: 30 }} />
            </View>

            <View style={utilsStyles.centeredRow}>
              <PlayerRepeatToggle size={30} style={{ marginBottom: 6 }} />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
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
    // ...defaultStyles.container,
    // paddingHorizontal: screenPadding.horizontal,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  artworkImageContainer: {
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 11.0,
    flexDirection: 'row',
    justifyContent: 'center',
    height: '45%',
  },
  artworkImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 12,
  },
  trackTitleContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: 22,
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
