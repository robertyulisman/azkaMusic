import { COLORS } from '@src/constants/themes';
import { defaultStyles } from '@src/customstyles';
import { useLastActiveTrack } from '@src/hooks/useLastActiveTrack';
import { StyleSheet, TouchableOpacity, View, ViewProps } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useActiveTrack } from 'react-native-track-player';
import MovingText from './MovingText';
import { PlayPauseButton, SkipToNextButton } from './PlayerControls';

const FloatingPlayer = ({ style, onPress }: ViewProps) => {
  // const router = useRouter()

  const activeTrack = useActiveTrack();

  const lastActiveTrack = useLastActiveTrack();

  const displayedTrack = activeTrack ?? lastActiveTrack;

  if (!displayedTrack) return null;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={[styles.container, style]}>
      <>
        <FastImage
          source={{
            uri: displayedTrack.artwork,
          }}
          style={styles.trackArtworkImage}
        />

        <View style={styles.trackTitleContainer}>
          <MovingText
            style={styles.trackTitle}
            text={displayedTrack.title ?? ''}
            animationThreshold={25}
          />
        </View>

        <View style={styles.trackControlsContainer}>
          <PlayPauseButton iconSize={24} />
          <SkipToNextButton iconSize={22} />
        </View>
      </>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.dark['800'],
    padding: 8,
    borderRadius: 12,
    paddingVertical: 10,
  },
  trackArtworkImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  trackTitleContainer: {
    flex: 1,
    overflow: 'hidden',
    marginLeft: 10,
  },
  trackTitle: {
    ...defaultStyles.text,
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 10,
  },
  trackControlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
    marginRight: 16,
    paddingLeft: 16,
  },
});

export default FloatingPlayer;
