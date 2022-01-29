import React, { useRef } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import { getNewDate, transformDateString } from '@/utils/date';
import { MessageContainer } from '.';
import { Dialogue } from '@/store/dialogue/types';
import { useAppSelector } from '@/store';

const ChattingRoom: React.FC = () => {
  const dialogue = useAppSelector(state => state.dialogue);
  const listRef = useRef<FlatList>(null);
  const handleUpdateScrollPosition = () => {
    listRef.current?.scrollToEnd();
  };

  const renderItem = ({ item, index }: ListRenderItemInfo<Dialogue>) => {
    const prevIndex = index === 0 ? 0 : index - 1;
    const prev = dialogue[prevIndex];
    const { timestamp } = item;
    const newDateStr =
      index === 0
        ? transformDateString(timestamp)
        : getNewDate(prev.timestamp, timestamp);

    return <MessageContainer newDateStr={newDateStr} data={item} key={index} />;
  };

  return (
    <FlatList
      bounces={false}
      ref={listRef}
      style={styles.container}
      data={dialogue}
      renderItem={renderItem}
      onContentSizeChange={handleUpdateScrollPosition}
    />
  );
};

export default ChattingRoom;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  messagesWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
