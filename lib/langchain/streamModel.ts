import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({ model: "gpt-4" });

export async function streamModel(input: string) {
  const messages = [
    new SystemMessage("Assist the user in their query."),
    new HumanMessage(input),
  ];
  await model.invoke(messages);
  const stream = await model.stream(messages);
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
    console.log(`${chunk.content}|`);
  }
}