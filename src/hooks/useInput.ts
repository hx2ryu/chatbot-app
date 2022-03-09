import { useState } from 'react';

const useInput = () => {
  const [value, setValue] = useState<string>('');
  const [sendVisible, setSendVisible] = useState<boolean>();
  const onChangeText = (text: string) => {
    setValue(text);
    setSendVisible(text !== '');
  };

  return { value, onChangeText, sendVisible };
};

export default useInput;
