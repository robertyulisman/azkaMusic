import { useFocusEffect } from '@react-navigation/native';
import { AdmobBanner, QueueControls } from '@src/components';
import FloatingPlayer from '@src/components/FloatingPlayer';
import TracksListItem from '@src/components/TracksListItem';
import PlayerScreen from '@src/components/player';
import { defaultStyles } from '@src/customstyles';
import { generateTracksListId } from '@src/helpers/miscellaneous';
import { useQueue, useTracks } from '@src/store';
import { MotiView } from 'moti';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import {
  BackHandler,
  Dimensions,
  FlatList,
  FlatListProps,
  StatusBar,
  Text,
  View,
} from 'react-native';
import TrackPlayer, {
  Track,
  useActiveTrack,
  useIsPlaying,
  useProgress,
} from 'react-native-track-player';

const { height, width } = Dimensions.get('screen');

export interface ITracksListProps extends FlatListProps<Track> {
  id: string;
  tracks: Track[];
  hideQueueControls?: boolean;
}

const ItemDivider = () => <View style={{ marginVertical: 9, marginLeft: 60 }} />;
const TracksList: FC<ITracksListProps> = ({ hideQueueControls = false, ...flatlistProps }) => {
  const { position } = useProgress(250);
  const tracks = useTracks();
  const activeTrack = useActiveTrack();
  const trackIndex = tracks.findIndex((track) => track.title === activeTrack?.title);
  const { playing } = useIsPlaying();
  const id = generateTracksListId('songs');
  const queueOffset = useRef(0);
  const { activeQueueId, setActiveQueueId } = useQueue();

  const [showMiniPlayer, setShowMiniPlayer] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    if (playing) {
      setShowMiniPlayer(true);
    }
  }, [playing]);

  const handlePressMiniPlayer = () => {
    setShowMiniPlayer(false);
    setTimeout(() => {
      setShowPlayer(true);
    }, 500);
  };

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        setShowPlayer(false);
        if (playing) {
          setShowMiniPlayer(true);
        }

        return true;
      };

      const subscribe = BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => subscribe.remove();
    }, [playing]),
  );

  const handleTrackSelect = async (selectedTrack: Track) => {
    const trackIndex = tracks.findIndex((track) => track.url === selectedTrack.url);

    if (trackIndex === -1) return;

    const isChangingQueue = id !== activeQueueId;

    if (isChangingQueue) {
      const beforeTracks = tracks.slice(0, trackIndex);
      const afterTracks = tracks.slice(trackIndex + 1);

      await TrackPlayer.reset();

      // we construct the new queue
      await TrackPlayer.add(selectedTrack);
      await TrackPlayer.add(afterTracks);
      await TrackPlayer.add(beforeTracks);

      await TrackPlayer.play();

      queueOffset.current = trackIndex;
      setActiveQueueId(id);
    } else {
      const nextTrackIndex =
        trackIndex - queueOffset.current < 0
          ? tracks.length + trackIndex - queueOffset.current
          : trackIndex - queueOffset.current;

      await TrackPlayer.skip(nextTrackIndex);
      TrackPlayer.play();
    }
  };

  return (
    <View style={[{ paddingTop: 42 }, defaultStyles.container]}>
      <StatusBar backgroundColor={'transparent'} translucent />
      {!showPlayer && <AdmobBanner type="large" />}

      <View style={{ paddingHorizontal: 16, flex: 1 }}>
        <FlatList
          {...flatlistProps}
          data={tracks}
          contentContainerStyle={{ paddingTop: 30, paddingBottom: 128 }}
          ListHeaderComponent={
            !hideQueueControls ? (
              <QueueControls tracks={tracks} style={{ paddingBottom: 20 }} />
            ) : undefined
          }
          ListFooterComponent={ItemDivider}
          ItemSeparatorComponent={ItemDivider}
          ListEmptyComponent={
            <View>
              <Text>No songs found</Text>
            </View>
          }
          renderItem={({ item: track }) => (
            <TracksListItem track={track} onTrackSelect={handleTrackSelect} />
          )}
        />

        {showMiniPlayer && (
          <MotiView from={{ opacity: 0, translateY: 30 }} animate={{ opacity: 1, translateY: -16 }}>
            <FloatingPlayer onPress={handlePressMiniPlayer} />
          </MotiView>
        )}
        {showPlayer && (
          <MotiView
            from={{ opacity: 0, translateY: 130 }}
            animate={{ opacity: 1, translateY: 0 }}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <PlayerScreen
              playing={playing}
              currentTime={position * 1000}
              lrc={
                tracks[trackIndex]?.lrc !== null
                  ? tracks[trackIndex]?.lrc.trim()
                  : '[00:00.01]Lyrics doesn exist'
              }
            />
          </MotiView>
        )}
      </View>
    </View>
  );
};

export default TracksList;
