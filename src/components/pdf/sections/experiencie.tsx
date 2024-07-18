import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { ListItem } from "./item-list";
import { styles } from "../style";
import { Position } from "@/types/CurriculumVitae";

type Props = {
  position: Position[];
  title: string;
};

export const Experience = ({ position, title }: Readonly<Props>) => {
  const getDate = (pos: Position) => {
    let date = "";

    if (pos?.startDate) {
      const startDate = new Date(pos.startDate).toLocaleDateString(undefined, {
        month: "short",
        year: "numeric",
      });

      date = startDate;
    }

    if (pos?.endDate) {
      const endDate = new Date(pos.endDate).toLocaleDateString(undefined, {
        month: "short",
        year: "numeric",
      });

      date = `${date} - ${endDate}`;
    }

    return date;
  };

  if (!position || position.length <= 0) {
    return <View></View>;
  }

  const listFormatted = position.map((item) => ({
    title: item.organization,
    location: item.location,
    subtitle: item.positionTitle,
    date: getDate(item),
    description: item.description,
  }));

  return (
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>
      {listFormatted.map((pos, index) => (
        <ListItem
          key={`${pos.title}-${index}`}
          title={pos.title}
          location={pos.location}
          subtitle={pos.subtitle}
          date={pos.date}
          description={pos.description}
        />
      ))}
    </View>
  );
};
