import { TextStyle } from 'react-native';
import { COLORS } from './color';

type FontType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'blockQuote1'
  | 'blockQuote2'
  | 'blockQuote3';

const FONTS: Record<FontType, TextStyle> = {
  h1: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    fontSize: 24,
    lineHeight: 36,
    color: '#000000',
    fontWeight: 'bold',
  },
  h2: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    fontSize: 20,
    lineHeight: 30,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  h3: {
    fontFamily: 'SpoqaHanSansNeo-Regular',
    fontSize: 20,
    lineHeight: 30,
    color: COLORS.black,
    fontWeight: 'normal',
  },
  h4: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    fontSize: 18,
    lineHeight: 26,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  h5: {
    fontFamily: 'SpoqaHanSansNeo-Regular',
    fontSize: 18,
    lineHeight: 26,
    color: COLORS.black,
    fontWeight: 'normal',
  },
  h6: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  p: {
    fontFamily: 'SpoqaHanSansNeo-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.black,
    fontWeight: 'normal',
  },
  blockQuote1: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  blockQuote2: {
    fontFamily: 'SpoqaHanSansNeo-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.black,
    fontWeight: 'normal',
  },
  blockQuote3: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    fontSize: 12,
    lineHeight: 16,
    color: COLORS.black,
    fontWeight: 'bold',
  },
};

export { FONTS };
export type { FontType };
