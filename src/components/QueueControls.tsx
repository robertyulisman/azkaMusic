import { COLORS } from '@src/constants/themes';
import { defaultStyles } from '@src/customstyles';
import { StyleSheet, View, ViewProps } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TrackPlayer, { Track } from 'react-native-track-player';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from './common';

type QueueControlsProps = {
  tracks: Track[];
} & ViewProps;

const QueueControls = ({ tracks, style, ...viewProps }: QueueControlsProps) => {
  const handlePlay = async () => {
    await TrackPlayer.setQueue(tracks);
    await TrackPlayer.play();
  };

  const handleShufflePlay = async () => {
    const shuffledTracks = [...tracks].sort(() => Math.random() - 0.5);

    await TrackPlayer.setQueue(shuffledTracks);
    await TrackPlayer.play();
  };

  return (
    <View style={[{ flexDirection: 'row', columnGap: 16 }, style]} {...viewProps}>
      {/* Play button */}
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={handlePlay} activeOpacity={0.8} style={styles.button}>
          <Ionicons name="play" size={22} color={COLORS.primary['500']} />

          <Text
            variant="heading-3"
            style={{
              color: COLORS.primary['500'],
            }}
          >
            Play
          </Text>
        </TouchableOpacity>
      </View>

      {/* Shuffle button */}
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={handleShufflePlay} activeOpacity={0.8} style={styles.button}>
          <Ionicons name={'shuffle-sharp'} size={24} color={COLORS.primary['500']} />
          <Text
            variant="heading-3"
            style={{
              color: COLORS.primary['500'],
            }}
          >
            Shuffle
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    backgroundColor: COLORS.dark['800'],
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 8,
  },
  buttonText: {
    ...defaultStyles.text,
    color: COLORS.primary['500'],
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default QueueControls;
