import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: "",
});


export async function POST(req: Request) {
  const { messages } = await req.json();
  console.log('[ messages ] >', messages)
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0125",
    stream: true,
    messages: [
      {role: "system", content: "你是一个专业的环保保护人士，请用简短50字左右生成关于环境保护的文字,用欢快搞笑的语气"},
    ],
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response, {
    onCompletion: (res) => {
      console.log('[ res ] >', res)
    }
  });
  // Respond with the stream
  return new StreamingTextResponse(stream);
}