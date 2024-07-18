import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "../style";
import { AdditionalInfo } from "@/types/CurriculumVitae";

type Props = {
  infoList: AdditionalInfo[];
};

export const AdditionalSkills = ({ infoList }: Readonly<Props>) => {
  if (!infoList || infoList.length <= 0) {
    return <View></View>;
  }

  return (
    <View>
      <Text style={styles.sectionTitle}>ADDITIONAL SKILLS</Text>
      {infoList.map((info, index) => (
        <View
          key={`${info.title}-${index}`}
          style={styles.additionalSkillsContainer}
        >
          <Text style={styles.skillTitle}>{`${info.title}: `}</Text>
          <Text>{info.description}</Text>
        </View>
      ))}
    </View>
  );
};
