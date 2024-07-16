export type AIConfig = {
  baseURL: string;
  apiKey: string;
  compatibility: "strict" | "compatible"
  model?: string;
}