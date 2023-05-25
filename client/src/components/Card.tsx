import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

const NewCard = () => {
  return (
    <div>
      <h1>Inputs</h1>
      <FormGroup>
        <FormControl>
          <InputLabel>grow label</InputLabel>
          <Input />
        </FormControl>
        <FormControl>
          <OutlinedInput />
        </FormControl>
        <FormControl>
          <InputLabel>shroom type</InputLabel>
          <Input />
        </FormControl>
        <FormControl>
          <OutlinedInput />
        </FormControl>
        <FormControl>
          <InputLabel>substrate</InputLabel>
          <Input />
        </FormControl>
        <FormControl>
          <OutlinedInput />
        </FormControl>
        <FormControl>
          <InputLabel>context</InputLabel>
          <Input />
        </FormControl>
        <FormControl>
          <OutlinedInput />
        </FormControl>
        <Button variant='contained' color='secondary'>
          submit
        </Button>
      </FormGroup>
    </div>
  );
};

export default NewCard;
