import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
// const openAIKey = process.env.OPENAI_KEY;

interface Message {
  message: string;
  sender: string;
}

export default function ChatBox() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  //   const [isInitialMessage, setIsInitialMessage] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessages([...messages, { message: input, sender: 'user' }]);

    setInput('');

    try {
      const response = await fetch('/api/chat/new', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${openAIKey}}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: input,
          max_tokens: 60,
        }),
      });
      console.log('bot response', response);
      if (response.ok) {
        const responseData = await response.json();
        const botMessage = responseData.message;
        setMessages([...messages, { message: botMessage, sender: 'bot' }]);
      } else {
        throw new Error('Request failed');
      }
    } catch (err) {
      console.log(`error in chat: ${err}`);
    }
  };

  return (
    <Grid container spacing={2} sx={{ flexDirection: 'column' }}>
      <Grid item xs={8}>
        <TextField />
      </Grid>
      <Grid item xs={4}>
        <TextField />
      </Grid>
      <Grid item xs={4}>
        <TextField value={input} onChange={(e) => setInput(e.target.value)} />
      </Grid>
      <Grid item xs={8}>
        <Button onClick={(event) => handleSubmit(event)}>Submit</Button>
      </Grid>
    </Grid>
  );
}
