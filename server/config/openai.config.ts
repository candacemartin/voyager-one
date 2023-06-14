const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

// openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "tell me the color of grass",
// }).then((res: any) => console.log(res.data.choices)).catch((err: Error) => console.log(err));



export default openai;