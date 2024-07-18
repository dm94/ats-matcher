export type SocialLink = {
  textToShow: string;
  website: string;
}

export type Contact = {
  location?: string;
  email: string;
  phoneNumber?: string;
}

export type Education = {
  institution: string;
  title: string;
  endDate?: string;
  description?: string;
  location?: string;
}

export type Position = {
  organization: string;
  positionTitle: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export type AdditionalInfo = {
  title: string;
  description: string;
}

export type CurriculumVidaeType = {
  fullName: string;
  position: string;
  contact: Contact;
  socialLinks: SocialLink[];
  about?: string;
  education: Education[];
  experiencie: Position[];
  projects: Position[];
  aditionalInfo: AdditionalInfo[];
}