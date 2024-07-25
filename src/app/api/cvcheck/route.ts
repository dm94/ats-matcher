'use server';

import { generateTextResponse } from '@/services/ai';
import { AIConfig } from '@/types/Config';
import { CurriculumVidaeType } from '@/types/CurriculumVitae';

const generatePrompt = (resume: CurriculumVidaeType, offer: string): string => {
  const { position, about, education, experiencie, projects, aditionalInfo } = resume;

  const resumeFiltered = {
    position, about, education, experiencie, projects, aditionalInfo
  }

  return `You are a recruitment specialist. I will give you a JSON-style CV and a job offer description. Please evaluate the CV and suggest specific improvements to make it more suitable for the job offer. 
Your response should be concise and focused on actionable changes.

CV: ${JSON.stringify(resumeFiltered)}
Job offer: '${offer}'
  `;
}

export async function POST(req: Request) {
  const { resume, config, offer }: { config: AIConfig, resume: CurriculumVidaeType, offer: string } = await req.json();

  const prompt = generatePrompt(resume, offer);

  try {
    const text = await generateTextResponse(config, prompt);
    return Response.json({ text });
  } catch(error) {
    return Response.json({ error });
  }
}