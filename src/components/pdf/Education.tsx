import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  school: {
    fontSize: 10,
  },
  degree: {
    fontSize: 10,
  },
  candidate: {
    fontSize: 10,
  },
});

const Education = () => (
  <View style={styles.container}>
    <Text style={styles.school}>Education</Text>
    <Text style={styles.school}>Jedi Academy</Text>
    <Text style={styles.degree}>Jedi Master</Text>
    <Text style={styles.candidate}>A long, long time ago</Text>
  </View>
);

export default Education;
