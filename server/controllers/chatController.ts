import { Request, Response, NextFunction } from 'express';
// import Chat from '../models/ChatModel';

import openai from '../openai.config';
console.log('inside chatcontroller')
export default {
  async newMessage(req: Request, res: Response, next: NextFunction) {
    console.log('req.bod', req.body)
    try {
      console.log('we are in try block of chatController.newMessage', req.body);
      // const openAIKey = process.env.OPEN_AI_KEY!;
      // const openAIKey = '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'
      // const isInitialMessage = req.body.isInitialMessage;
      const message = req.body;
      //i think this is the system message
      let promptMessage = message;

      // Add the system level message for the first communication
      // if (isInitialMessage) {
      //   promptMessage = 'You are ChatGPT, a helpful assistant. ' + message;
      // }

      // const requestOptions = {
      //     method: 'POST',
      //     headers: {
      //       'Authorization': `Bearer ${openAIKey}`,
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({
      //       prompt: promptMessage,
      //       max_tokens: 60
      //     })
      // };
      // console.log('openai.createCompletion', openai.createCompletion)
      // const response = await openai.createChatCompletion({
      //   model: "gpt-3.5-turbo",
      //   prompt: promptMessage,
      //   max_tokens: 7,
      //   temperature: 0,

      // }, {
      //   headers: {
      //     'Authorization': `Bearer ${process.env.OPEN_AI_KEY!}`
      //   }
      // });
      const response = await openai.createChatCompletion(
        {
          model: 'text-davinci-003',
          "messages": [{"role": "user", "content": promptMessage}],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${openAIKey}`,
          },
        },
      );
      
      console.log('response', response.data.choices[0].message.content);
      if (response.ok) {
        res.locals.botMessage = response.data.choices[0].message.content;
        return next();
      }

      // fetch('https://api.openai.com/v1/engines/davinci-codex/completions', requestOptions)
      // .then(response => response.json())
      // .then(data => {
      //     const botMessage = data.choices[0].text.trim();
      //     res.locals.botMessage = botMessage;
      //     console.log(botMessage);
      //     return next();
      // })
      // .catch(error => {
      //     // Handle any errors here
      //     console.error(error);
      // });
    } catch (err) {
      console.log('api call error', err);
      res.status(500).json({ error: err });
    }
  },
};
