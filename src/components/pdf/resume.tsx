"use client";

import React, { useEffect, useState } from "react";
import { Document, Page } from "@react-pdf/renderer";
import { Header } from "./sections/header";
import { Experience } from "./sections/experiencie";
import { About } from "./sections/about";
import { styles } from "./style";
import { Education } from "./sections/education";
import { store } from "@/store";
import { CurriculumVidaeType } from "@/types/CurriculumVitae";
import { AdditionalSkills } from "./sections/aditional-skills";
import { SocialLinks } from "./sections/social-links";

export const Resume = () => {
  const [curriculum, setCurriculum] = useState<CurriculumVidaeType>();

  useEffect(() => {
    const state = store.getState();

    setCurriculum(state.cv?.curriculumState);
  }, []);

  if (!curriculum) {
    return <Document></Document>;
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header resume={curriculum} />
        {curriculum?.about && <About message={curriculum.about} />}
        {curriculum?.experiencie && (
          <Experience
            position={curriculum.experiencie}
            title="PROFESSIONAL EXPERIENCE"
          />
        )}
        {curriculum?.education && (
          <Education educationList={curriculum.education} />
        )}
        {curriculum?.projects && (
          <Experience position={curriculum.projects} title="PROJECTS" />
        )}
        {curriculum?.aditionalInfo && (
          <AdditionalSkills infoList={curriculum.aditionalInfo} />
        )}
        {curriculum?.socialLinks && (
          <SocialLinks links={curriculum.socialLinks} />
        )}
      </Page>
    </Document>
  );
};
