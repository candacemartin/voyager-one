import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import ChatbotInput from './ChatbotInput';
import ChatbotButton from './ChatbotButton';
import ChatbotMessageDisplay from './ChatbotMessageDisplay';

// interface ChatbotStream extends ReadableStream<Uint8Array> {
//   [Symbol.asyncIterator](): AsyncIterator<Uint8Array>;
// }

export default function ChatbotContainer(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setMessages((prev) => [...prev, input]);
      setInput('');
      const res = await fetch('/api/chat/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (res.ok) {
        const reader = res.body?.getReader(); // reader for response body
        // // for await (const chunk of res.body as ChatbotStream) {
        // //   console.log(chunk);
        // // }

        // reader!.read().then(function processText({ done, value }): void {
        //   if (done) {
        //     console.log('complete');
        //     return;
        //   }

        //   console.log(value);

        //   return reader?.read().then(processText);
        // });

        // let reading = true;
        // while (reading) {
        //   setIsLoading(false);
        //   const chunk = await reader?.read();
        //   if (chunk?.done) {
        //     reading = false;
        //   }
        //   if (chunk?.value) {
        //     const text = new TextDecoder().decode(chunk?.value);
        //     setMessages((prevMessages) => [...prevMessages, text]);
        //   }
        // }

        function read() {
          return reader.read().then(({ done, value }) => {
            if (done) {
              // The stream has ended
              console.log('Stream finished');
              return;
            }

            // Process the chunk of data (Uint8Array or ArrayBuffer)
            console.log('Received data:', value);

            // Continue reading the stream
            return read();
          });
        }

        // Start reading the stream
        return read();
      }
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };

  return (
    <Box component='form' onSubmit={handleSubmit}>
      {messages.map((msg, i) => (
        <ChatbotMessageDisplay message={msg} key={i} />
      ))}
      <ChatbotInput input={input} setInput={setInput} />
      <ChatbotButton />
    </Box>
  );
}
