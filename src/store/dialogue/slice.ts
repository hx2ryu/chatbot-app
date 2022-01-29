import {
  bindActionCreators,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Dialogue } from './types';

const dialogueSlice = createSlice({
  name: 'dialogue',
  initialState: [] as Dialogue[],
  reducers: {
    messageSent: {
      prepare: (message: string) => ({
        payload: {
          sender: 'me',
          messages: [message],
          timestamp: new Date().toISOString(),
        } as Dialogue,
      }),
      reducer: (state, { payload }: PayloadAction<Dialogue>) => {
        state.push(payload);
        state.push({
          sender: 'bot',
          messages: ['반가워요.', '테스트 메시지 입니다.'],
          timestamp: new Date().toISOString(),
        });
      },
    },
  },
});

export default dialogueSlice.reducer;
export const useDialougue = () => {
  const dispatch = useDispatch();
  return useMemo(
    () => bindActionCreators(dialogueSlice.actions, dispatch),
    [dispatch],
  );
};
