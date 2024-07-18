import React from "react";
import { Text, View, Link } from "@react-pdf/renderer";
import { styles } from "../style";
import { CurriculumVidaeType } from "@/types/CurriculumVitae";

type Props = {
  resume: CurriculumVidaeType;
};

export const Header = ({ resume }: Readonly<Props>) => {
  const linkedin = (resume.socialLinks ?? []).find((link) =>
    link.website.includes("linkedin.com")
  );

  return (
    <View>
      <Text style={styles.fullName}>{resume?.fullName}</Text>
      <View style={styles.contactInfoContainer}>
        {resume?.contact?.location && (
          <>
            <Text style={styles.contactInfo}>{resume.contact.location}</Text>
            <Text style={styles.contactInfo}>·</Text>
          </>
        )}
        {linkedin && (
          <>
            <Link
              src={linkedin.website}
              style={[styles.contactInfo, styles.link]}
            >
              {linkedin.textToShow}
            </Link>
            <Text style={styles.contactInfo}>·</Text>
          </>
        )}
        {resume?.contact?.phoneNumber && (
          <>
            <Text style={styles.contactInfo}>{resume.contact.phoneNumber}</Text>
            <Text style={styles.contactInfo}>·</Text>
          </>
        )}
        {resume?.contact?.email && (
          <Text style={styles.contactInfo}>{resume.contact.email}</Text>
        )}
      </View>
      <View style={styles.separator} />
    </View>
  );
};
