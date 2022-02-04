import {
  bindActionCreators,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Dialogue } from './types';
import { getResponse } from '@/utils/constants/dialogue';

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

        // test response for respresenting all kind of message types.
        const { value } = payload.messages[0];
        const message = getResponse(value);
        if (message) {
          state.push({
            sender: 'bot',
            messages: [message],
            timestamp: new Date().toISOString(),
          });
        }
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
