'use server';

import { generateTextResponse } from '@/services/ai';
import { AIConfig } from '@/types/Config';
import { CurriculumVidaeType } from '@/types/CurriculumVitae';
import { z } from 'zod';

const ResponseSchema = z.object({
  ats: z.string().describe("ATS filter score"),
  improvements: z.string().describe("Improvements that can be made to the curriculum"),
});

const generatePrompt = (resume: CurriculumVidaeType, offer: string): string => {
  const { position, about, education, experiencie, projects, aditionalInfo } = resume;

  const resumeFiltered = {
    position, about, education, experiencie, projects, aditionalInfo
  }

  return `You are a specialist in job recruitment and therefore I am going to pass you a resume in json style and the description of a job offer so that you can calculate the ATS (Applicant Tracking System Score) and say what improvements can be made to the curriculum so that it can be chosen for that job offer. The answer should be short with less than 200 characters.
    curriculum: ${JSON.stringify(resumeFiltered)}
    offer: '${offer}'
  `;
}

export async function POST(req: Request) {
  const { resume, config, offer }: { config: AIConfig, resume: CurriculumVidaeType, offer: string } = await req.json();

  const prompt = generatePrompt(resume, offer);

  const text = await generateTextResponse(config, prompt);

  return Response.json({ text });
}