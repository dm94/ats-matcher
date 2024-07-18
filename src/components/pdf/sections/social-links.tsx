import React from "react";
import { Link, View } from "@react-pdf/renderer";
import { styles } from "../style";
import { SocialLink } from "@/types/CurriculumVitae";

type Props = {
  links: SocialLink[];
};

export const SocialLinks = ({ links }: Readonly<Props>) => {
  if (!links || links.length <= 0) {
    return <View></View>;
  }

  const linksFiltered = links.filter(
    (link) => !link.website.includes("linkedin.com")
  );

  return (
    <View style={styles.itemListContainer}>
      {linksFiltered.map((link, index) => (
        <Link
          key={`${link.textToShow}-${index}`}
          src={link.website}
          style={styles.link}
        >
          {link.textToShow}
        </Link>
      ))}
    </View>
  );
};
