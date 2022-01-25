import { StyleProp, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const useGetSafeAreaStyle = () => {
  const { top, bottom } = useSafeAreaInsets();
  return {
    topSafeAreaStyle: {
      paddingTop: top > 16 ? top : 16,
    } as StyleProp<ViewStyle>,
    bottomSafeAreaStyle: {
      paddingBottom: bottom > 16 ? bottom : 16,
    } as StyleProp<ViewStyle>,
    verticalSafeAreaStyle: {
      paddingTop: top > 16 ? top : 16,
      paddingBottom: bottom > 16 ? bottom : 16,
    } as StyleProp<ViewStyle>,
  };
};

export default useGetSafeAreaStyle;
