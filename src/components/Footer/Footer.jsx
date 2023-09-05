import { Section, Flex, Text, Separator, IconButton } from "@radix-ui/themes";
import {
  LinkedinLogo,
  Envelope,
  InstagramLogo,
  GithubLogo,
  Phone,
} from "@phosphor-icons/react";

export default function Footer() {
  const d = new Date();
let year = d.getFullYear();

  return (
    <Section size="1" position={"relative"} right={"0"} left={"0"} bottom={"0"}>
      <Separator mb="5" size={"4"} />
      <Flex align={"center"} justify={"center"} gap={"4"}>
        <a
          href="https://www.linkedin.com/in/anirudh-ravipati-13541bb5/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton variant="ghost">
            <LinkedinLogo aria-label="LinkedIn" size={"1.5rem"} />
          </IconButton>
        </a>

        <a
          href="mailto: ravipatianirudh@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton variant="ghost">
            <Envelope aria-label="e-mail" size={"1.5rem"} />
          </IconButton>
        </a>
        <a
          href="https://www.instagram.com/ani.shunya/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton variant="ghost">
            <InstagramLogo aria-label="Instagram" size={"1.5rem"} />{" "}
          </IconButton>
        </a>
        <a
          href="https://github.com/anirudhravipati"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton variant="ghost">
            {" "}
            <GithubLogo aria-label="Github" size={"1.5rem"} />
          </IconButton>
        </a>
        <a href="tel:+919985887990" target="_blank" rel="noreferrer">
          <IconButton variant="ghost">
            {" "}
            <Phone aria-label="Phone" size={"1.5rem"} />
          </IconButton>
        </a>
      </Flex>
      <Flex mt={"3"} direction={"column"}>
      <Text size="1" color="jade" align={"center"}>Copyright {year} Aniruddh Ravipati. All rights reserved.</Text>
      </Flex>
    </Section>
  );
}
