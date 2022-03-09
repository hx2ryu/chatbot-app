import { StyleProp, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const useGetSafeAreaStyle = () => {
  const insets = useSafeAreaInsets();
  const { top, bottom } = {
    top: insets.top > 16 ? insets.top : 16,
    bottom: insets.bottom > 16 ? insets.bottom : 16,
  };

  return {
    top,
    bottom,
    topPaddingStyle: {
      paddingTop: top,
    } as StyleProp<ViewStyle>,
    bottomPaddingStyle: {
      paddingBottom: bottom,
    } as StyleProp<ViewStyle>,
    verticalPaddingStyle: {
      paddingTop: top,
      paddingBottom: bottom,
    } as StyleProp<ViewStyle>,
    topMarginStyle: {
      marginTop: top,
    } as StyleProp<ViewStyle>,
    bottomMarginStyle: {
      marginBottom: bottom,
    } as StyleProp<ViewStyle>,
    verticalMarginStyle: {
      marginTop: top,
      marginBottom: bottom,
    } as StyleProp<ViewStyle>,
  };
};

export default useGetSafeAreaStyle;
