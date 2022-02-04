import React from 'react';
import { QuickButton } from '@/store/dialogue/types';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { Text, TextButton } from '../atoms';
import { useDialougue } from '@/store/dialogue/slice';
import { COLORS } from '@/utils/theme';

type Props = {
  title: string;
  data?: QuickButton[];
};
const CardMessage: React.FC<Props> = ({ title, data }) => {
  const { messageSent } = useDialougue();
  const lastIndex = data && data.length > 0 ? data.length - 1 : -1;
  const renderButton = ({
    item: { content, message },
    index,
  }: ListRenderItemInfo<QuickButton>) => {
    const style: ViewStyle | undefined =
      index < lastIndex
        ? { borderBottomWidth: 0.3, borderBottomColor: COLORS.grayscale[300] }
        : undefined;

    return (
      <TextButton
        value={content}
        onPress={() => messageSent(message)}
        key={index}
        style={style}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text type={'blockQuote2'} style={styles.text}>
        {title}
      </Text>
      <FlatList
        data={data}
        renderItem={renderButton}
        style={styles.buttonContainer}
      />
    </View>
  );
};

export default CardMessage;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  text: {
    marginBottom: 20,
  },
  buttonContainer: {
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
  },
});
