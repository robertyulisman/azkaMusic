import { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet';
import { QueueControls } from '@src/components';
import FloatingPlayer from '@src/components/FloatingPlayer';
import TracksListItem from '@src/components/TracksListItem';
import PlayerScreen from '@src/components/player';
import { colors } from '@src/constants/tokens';
import { defaultStyles } from '@src/customstyles';
import { generateTracksListId } from '@src/helpers/miscellaneous';
import { useQueue, useTracks } from '@src/store';
import { MotiView } from 'moti';
import { FC, useCallback, useMemo, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  FlatListProps,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TrackPlayer, { Track, useActiveTrack, useProgress } from 'react-native-track-player';

const { height, width } = Dimensions.get('screen');

export interface ITracksListProps extends FlatListProps<Track> {
  id: string;
  tracks: Track[];
  hideQueueControls?: boolean;
}

const ItemDivider = () => <View style={{ marginVertical: 9, marginLeft: 60 }} />;

const TracksList: FC<ITracksListProps> = ({ hideQueueControls = false, ...flatlistProps }) => {
  const [indexModal, setIndexModal] = useState<null | number>(null);
  const { position } = useProgress(250);
  const tracks = useTracks();
  const activeTrack = useActiveTrack();
  const trackIndex = tracks.findIndex((track) => track.title === activeTrack?.title);

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => [80, height], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
    setIndexModal(index);
  }, []);

  const id = generateTracksListId('songs');

  const queueOffset = useRef(0);
  const { activeQueueId, setActiveQueueId } = useQueue();

  const handleTrackSelect = async (selectedTrack: Track) => {
    handlePresentModalPress();

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
    <BottomSheetModalProvider>
      <View style={defaultStyles.container}>
        <StatusBar backgroundColor={colors.background} />
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

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          handleIndicatorStyle={{ height: 0, backgroundColor: 'red' }}
          handleStyle={{ padding: 0 }}
        >
          <BottomSheetView style={styles.contentContainer}>
            {indexModal !== null && indexModal === 0 ? (
              <FloatingPlayer />
            ) : (
              trackIndex >= 0 && (
                <MotiView
                  from={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 300 }}
                >
                  <PlayerScreen
                    currentTime={position * 1000}
                    lrc={
                      tracks[trackIndex]?.lrc !== null
                        ? tracks[trackIndex]?.lrc.trim()
                        : '[00:00.01]Lyrics doesn exist'
                    }
                  />
                </MotiView>
              )
            )}
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#252525',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    // paddingTop: 8,
  },
});

export default TracksList;
