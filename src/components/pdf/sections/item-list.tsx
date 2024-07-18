import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "../style";

type Props = {
  title: string;
  subtitle: string;
  location?: string;
  date?: string;
  description?: string;
};

export function ListItem({
  title,
  subtitle,
  location,
  date,
  description,
}: Readonly<Props>) {
  return (
    <View style={styles.itemListContainer}>
      <View style={styles.row}>
        <Text style={styles.itemListTitle}>{title}</Text>
        {location && <Text style={styles.itemListTitle}>{location}</Text>}
      </View>
      <View style={styles.row}>
        <Text>{subtitle}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );
}
