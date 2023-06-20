import { Request, Response, NextFunction } from 'express';

import openai from '../config/openai.config';

export default {
  async newMessage(req: Request, res: Response, next: NextFunction) {
    const message = req.body.message;
    try {
      console.log('inside try block of newMessage.chatController');
      // const fetchOptions = {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      //   },
      //   body: JSON.stringify({
      //     model: 'gpt-3.5-turbo',
      //     prompt: `${req.body.message}`,
      //   }),
      // };

      const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
        stream: true,
      });
      // for await (const part of chatCompletion) {
      //   console.log(part.choices[0].delta);
      // }

      res.locals.chatCompletion = chatCompletion;
      return next();
    } catch (err) {
      return next(err);
    }
  },
};
