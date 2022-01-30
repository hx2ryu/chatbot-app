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
          messages: [{ type: 'text', value: message }],
          timestamp: new Date().toISOString(),
        } as Dialogue,
      }),
      reducer: (state, { payload }: PayloadAction<Dialogue>) => {
        state.push(payload);
        state.push({
          sender: 'bot',
          messages: [
            { type: 'text', value: '안녕하세요.' },
            { type: 'text', value: '반가워요' },
            {
              type: 'image',
              value:
                'https://cdn.pixabay.com/photo/2021/12/18/06/01/sunset-6878021_1280.jpg',
            },
          ],
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
