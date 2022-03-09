import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { COLORS, FONTS, ICONS } from '@/theme';
import { useGetSafeAreaStyle, useInput } from '@/hooks';
import { IconButton } from '../atoms';
import { useDialougue } from '@/store/dialogue/slice';

const MessageSender: React.FC = () => {
  const { value, onChangeText, sendVisible } = useInput();
  const { messageSent } = useDialougue();
  const { bottomMarginStyle } = useGetSafeAreaStyle();
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

  const handleSend = () => {
    messageSent(value);
    onChangeText('');
  };

  return (
    <KeyboardAvoidingView style={styles.root} behavior={behavior}>
      <IconButton
        disabled
        iconSource={ICONS.add}
        iconStyle={styles.addIcon}
        style={bottomMarginStyle}
      />
      <View style={[styles.inputWrapper, bottomMarginStyle]}>
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
    </KeyboardAvoidingView>
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
