import TextField from '@mui/material/TextField';
import { Dispatch, SetStateAction } from 'react';

interface SignUpInputProps {
  inputType: string;
  value: string;
  handleChange: Dispatch<SetStateAction<string>>;
}

export default function SignUpInput({
  inputType,
  value,
  handleChange,
}: SignUpInputProps): React.JSX.Element {
  return (
    <TextField
      sx={{ mb: 1 }}
      type={`${inputType}`}
      required
      fullWidth
      id={`${inputType}-signup`}
      label={`${inputType}`}
      name={`${inputType}-signup`}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
