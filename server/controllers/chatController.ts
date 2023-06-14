import { Request, Response, NextFunction } from 'express';

import openai from '../config/openai.config';

export default {
  async newMessage(req: Request, res: Response, next: NextFunction) {
    console.log('req.bod', req.body)
    try {
      console.log('we are in try block of chatController.newMessage', req.body);
      const message = req.body;
      let promptMessage = message;

      const response = await openai.createChatCompletion(
        {
          model: 'text-davinci-003',
          "messages": [{"role": "user", "content": promptMessage}],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      console.log('response', response.data.choices[0].message.content);
      if (response.ok) {
        res.locals.botMessage = response.data.choices[0].message.content;
        return next();
      }
    } catch (err) {
      console.log('api call error', err);
      res.status(500).json({ error: err });
    }
  },
};
