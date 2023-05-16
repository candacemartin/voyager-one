import React, {useState} from 'react';
import { Button, FormControl, FormGroup, Input, InputLabel, OutlinedInput } from '@mui/material';


const useStyle = makeStyles({
    formStyle: {
        width: '50%'
    }
})

const NewCard = () => {
    const classes = useStyle();
    return (
        <div>
            <h1>Inputs</h1>
            <FormGroup className={classes.formStyle}>
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
                <Button variant="contained" color="secondary">
                    submit
                </Button>
            </FormGroup>
        </div>
    )
};

export default NewCard;