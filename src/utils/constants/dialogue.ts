import { MessageType } from '@/store/dialogue/types';

export function getResponse(value: string): MessageType | undefined {
  if (value === '텍스트 메시지') {
    return {
      type: 'text',
      value: '텍스트 메시지 응답입니다.',
    };
  } else if (value === '이미지 메시지') {
    return {
      type: 'image',
      value:
        'https://cdn.pixabay.com/photo/2021/12/18/06/01/sunset-6878021_1280.jpg',
    };
  } else if (value === '카드형 메시지') {
    return {
      type: 'card',
      value: '카드형 메시지입니다.\n메시지 응답을 확인해보세요.',
      buttons: [
        {
          content: '텍스트 응답 확인',
          message: '텍스트 메시지',
        },
        {
          content: '이미지 응답 확인',
          message: '이미지 메시지',
        },
        {
          content: '카드 응답 확인',
          message: '카드형 메시지',
        },
      ],
    };
  } else {
    return undefined;
  }
}
