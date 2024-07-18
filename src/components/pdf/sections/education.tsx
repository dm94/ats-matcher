import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { ListItem } from "./item-list";
import { styles } from "../style";
import { type Education as EducationType } from "@/types/CurriculumVitae";

type Props = {
  educationList: EducationType[];
};

export const Education = ({ educationList }: Readonly<Props>) => {
  const getDate = (ed: EducationType) => {
    let date = "";

    if (ed?.endDate) {
      const endDate = new Date(ed.endDate).toLocaleDateString(undefined, {
        month: "short",
        year: "numeric",
      });

      date = endDate;
    }

    return date;
  };

  if (!educationList || educationList.length <= 0) {
    return <View></View>;
  }

  const listFormatted = educationList.map((item) => ({
    title: item.institution,
    location: item.location,
    subtitle: item.title,
    date: getDate(item),
    description: item.description,
  }));

  return (
    <View>
      <Text style={styles.sectionTitle}>EDUCATION</Text>
      {listFormatted.map((ed, index) => (
        <ListItem
          key={`${ed.title}-${index}`}
          title={ed.title}
          location={ed.location}
          subtitle={ed.subtitle}
          date={ed.date}
          description={ed.description}
        />
      ))}
    </View>
  );
};
