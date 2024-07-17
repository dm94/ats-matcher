import { AIConfig } from '@/types/Config';
import { createOpenAI, OpenAIProvider } from '@ai-sdk/openai';
import { CoreToolChoice, generateObject, generateText } from 'ai';

export const createAiInstance = (config: AIConfig): OpenAIProvider => createOpenAI(config);

export const generateTextResponse = async (config: AIConfig, prompt: string, tools?: any, toolChoice: CoreToolChoice<any> = "auto"): Promise<string> => {
  const openai = createAiInstance(config);

  const { text } = await generateText({
    model: openai.chat(config.model ?? "gpt-4o"),
    tools: tools,
    toolChoice, 
    prompt,
  });

  return text;
}

export const generateObjectResponse = async (config: AIConfig, prompt: string, schema: any): Promise<any> => {
  const openai = createAiInstance(config);

  const { object } = await generateObject({
    model: openai.chat(config.model ?? "gpt-4o"),
    schema,
    prompt,
  });

  return object;
}