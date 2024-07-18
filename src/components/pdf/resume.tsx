"use client";

import React from "react";
import { Text, Page, View, Document } from "@react-pdf/renderer";

import Education from "./Education";

export const Resume = () => (
  <Document>
    <Page orientation="landscape" size="A4">
      <View>
        <View>
          <Education />
        </View>
      </View>
      <Text>This IS the candidate you are looking for</Text>
    </Page>
  </Document>
);
