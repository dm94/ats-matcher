'use server';

import { generateTextResponse } from '@/services/ai';
import { AIConfig } from '@/types/Config';
import { CurriculumVidaeType } from '@/types/CurriculumVitae';

const generatePrompt = (resume: CurriculumVidaeType, offer: string): string => {
  const { position, about, education, experiencie, projects, aditionalInfo } = resume;

  const resumeFiltered = {
    position, about, education, experiencie, projects, aditionalInfo
  }

  return `You are a recruitment specialist and so I am going to pass you a json-style curriculum vitae (CV) and the description of a job offer for you to evaluate it and say what improvements can be made to the CV so that it can be chosen for that job offer. 
  The response should be concise and briefly explain the improvements to be made.
  Check that the curriculum has the skills requested in the offer, that the about has interesting data for the position and in this case give some recommendation.
    CV: ${JSON.stringify(resumeFiltered)}
    offer: '${offer}'
  `;
}

export async function POST(req: Request) {
  const { resume, config, offer }: { config: AIConfig, resume: CurriculumVidaeType, offer: string } = await req.json();

  const prompt = generatePrompt(resume, offer);

  const text = await generateTextResponse(config, prompt);

  return Response.json({ text });
}