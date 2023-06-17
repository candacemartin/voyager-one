import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Dispatch, SetStateAction } from 'react';

interface SignUpEmailsProps {
  emailSignUp: boolean;
  handleChange: Dispatch<SetStateAction<boolean>>;
}

export default function SignUpEmails({
  emailSignUp,
  handleChange,
}: SignUpEmailsProps): React.JSX.Element {
  return (
    <FormControlLabel
      onChange={() => handleChange(!emailSignUp)}
      sx={{ mb: 1 }}
      control={<Checkbox checked={emailSignUp} />}
      label='click here if you want to receive inspiration, marketing promotions and updates via email :)'
    />
  );
}
