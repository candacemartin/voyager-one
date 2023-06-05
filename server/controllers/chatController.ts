import { Request, Response, NextFunction } from 'express';
// import Chat from '../models/ChatModel';

import openai from '../openai.config';

export default {
    async newMessage (req:Request, res: Response, next: NextFunction) {
        try {
            const openAIKey = process.env.OPEN_AI_KEY
            const isInitialMessage = req.body.isInitialMessage;
            const message = req.body.message;
            //i think this is the system message
            let promptMessage = message;
            
        
            // Add the system level message for the first communication
            if (isInitialMessage) {
              promptMessage = "You are ChatGPT, a helpful assistant. " + message;
            }

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

            const response = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: 'testing',
              max_tokens: 7,
              temperature: 0,
              
            }, {
              headers: {
                'Authorization': `Bearer ${process.env.OPEN_AI_KEY!}`
              }
            });

            if (response.ok) {
              res.locals.botMessage = response;
              return next()
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
            res.status(500).json({ error: err });
          }
        }
}