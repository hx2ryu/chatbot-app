import React from 'react';
import { StyleSheet, TextInput, View, ViewProps } from 'react-native';
import { COLORS, FONTS, ICONS } from '@/utils/theme';
import { useInput } from '@/utils/hooks';
import { IconButton } from '../atoms';

interface Props extends ViewProps {}
const MessageSender: React.FC<Props> = ({ style }) => {
  const { value, onChangeText, sendVisible } = useInput();

  const handleSend = () => {
    onChangeText('');
  };

  return (
    <View style={[styles.root, style]}>
      <IconButton disabled iconSource={ICONS.add} iconStyle={styles.addIcon} />
      <View style={styles.inputWrapper}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.textinput}
          multiline
        />

        {sendVisible && (
          <IconButton
            onPress={handleSend}
            iconSource={ICONS.send}
            iconStyle={styles.sendIcon}
          />
        )}
      </View>
    </View>
  );
};

export default MessageSender;
const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: COLORS.primary,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    paddingLeft: 10,
    borderRadius: 15,
    minHeight: 30,
  },
  textinput: {
    ...FONTS.p,
    lineHeight: 0,
    width: '85%',
    marginVertical: 5,
  },
  addIcon: {
    tintColor: COLORS.grayscale[150],
    width: 30,
    height: 30,
    marginRight: 10,
    marginBottom: 2,
  },
  sendIcon: {
    height: 35,
    width: 35,
    tintColor: COLORS.primary,
  },
});
