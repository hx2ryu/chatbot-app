import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  PressableProps,
  StyleProp,
} from 'react-native';

interface Props extends PressableProps {
  iconSource: ImageSourcePropType;
  iconStyle: StyleProp<ImageStyle>;
}
const IconButton: React.FC<Props> = ({
  onPress,
  disabled,
  iconSource,
  iconStyle,
  style,
}) => {
  return (
    <Pressable onPress={onPress} disabled={disabled} style={style}>
      <Image source={iconSource} style={iconStyle} />
    </Pressable>
  );
};

export default IconButton;
