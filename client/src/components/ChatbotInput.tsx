import TextField from '@mui/material/TextField';
import { Dispatch, SetStateAction } from 'react';

interface ChatbotInputProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

export default function ChatbotInput({
  input,
  setInput,
}: ChatbotInputProps): JSX.Element {
  return (
    <TextField
      required
      id='outlined-basic'
      variant='outlined'
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
}
