import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
  },
  section: {
    marginBottom: 10,
  },
  text: {
    fontSize: 10,
    marginBottom: 5,
  },
  separator: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  link: {
    color: "blue",
    textDecoration: "underline",
  },
  sectionTitle: {
    fontSize: 11,
    marginBottom: 10,
    fontWeight: 700,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    textTransform: "uppercase",
  },
  title: {
    fontSize: 14,
    marginBottom: 5,
  },
  about: {
    fontSize: 10.5,
    fontStyle: "italic",
    marginBottom: 10,
  },
  itemListContainer: {
    marginBottom: 20,
    fontSize: 11,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
    marginTop: 1,
  },
  itemListTitle: {
    fontWeight: "bold",
  },
  date: {
    fontStyle: "italic",
  },
  description: {
    marginTop: 5,
    marginLeft: 15,
  },
  fullName: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  contactInfoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    fontSize: 11,
    marginTop: 10,
  },
  additionalSkillsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    fontSize: 11,
  },
  skillTitle: {
    fontWeight: "bold",
  },
  contactInfo: {
    marginHorizontal: 5,
  },
});
