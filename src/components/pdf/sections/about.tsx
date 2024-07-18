import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "../style";

type Props = {
  message: string;
};

export const About = ({ message }: Readonly<Props>) => (
  <View>
    <Text style={styles.about}>{message}</Text>
  </View>
);
