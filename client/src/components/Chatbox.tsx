import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// const openAIKey = process.env.OPENAI_KEY;


interface Message {
    message: string;
    sender: string;
}
export default function ChatBox() {
    const [input, setInput] = useState(''); 
    const [messages, setMessages] = useState<Message[]>([]);
    const [isInitialMessage, setIsInitialMessage] = useState(true);

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
        
    //     setMessages([...messages, {message: input, sender: 'user'}]);
        
    //     setInput('')

    //     try {
    //         const response = await fetch('/chat', {
    //         method: 'POST',
    //         headers: {
    //           'Authorization': `Bearer ${openAIKey}`,
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //           prompt: input,
    //           max_tokens: 60,
    //           isInitialMessage,
    //         })
    //       });
    //     console.log('bot response', response)
    //     if (response.ok) {
    //         const responseData = await response.json();
    //         const botMessage = responseData.message;
    //         setMessages([...messages, { message: botMessage, sender: 'bot' }]);
    //         setIsInitialMessage(false)
    //       } else {
    //         throw new Error('Request failed');
    //       }
    //             } catch (err){
    //         console.log(`error in chat: ${err}`);
    //     }
    // }
    
    return (
        // <Box sx={{width: '500px', height:'600px'}}>
        //     <TextField value={input} onChange={(e) => setInput(e.target.value)}  />
        //     <Button type='submit' >Submit</Button>
        // </Box>
        <h1>testing</h1>
    )
}