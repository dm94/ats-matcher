import { z } from 'zod';

export const ResponseSchema = z.object({
  ats: z.string().describe("ATS filter score"),
  improvements: z.string().describe("Improvements that can be made to the curriculum"),
});