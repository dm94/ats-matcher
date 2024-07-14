
export type SocialLink = {
  name: string;
  value: string;
}

export type Contact = {
  address?: string;
  city?: string;
  email?: string;
  phoneNumber?: string;
}

export type Education = {
  institution: string;
  title: string;
  endDate?: string;
  description?: string;
  location?: string;
}

export type Experiencie = {
  organization: string;
  positionTitle: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export type Language = {
  language: string;
  level: "A0" | "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "NATIVE";
}

export type CurriculumVidaeType = {
  fullName: string;
  position: string;
  contact: Contact;
  socialLinks: SocialLink[];
  about?: string;
  education: Education[];
  experiencie: Experiencie[];
  projects: Experiencie[];
  languages: Language[];
  skills: string[];
}