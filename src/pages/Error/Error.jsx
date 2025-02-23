/* eslint-disable react/no-unescaped-entities */
import { HouseSimple } from "@phosphor-icons/react";
import { Flex, Heading, Text, Button, Theme } from "@radix-ui/themes";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Theme
      appearance="dark"
      accentColor="jade"
      grayColor="sand"
      panelBackground="solid"
    >
      <Flex
        justify={"center"}
        align={"center"}
        width={"100%"}
        style={{ height: "100vh" }}
        direction={"column"}
        gap={"3"}
      >
        <Heading size={"9"} color="tomato">404</Heading>
        <Text color="tomato" size="2">
          This is an invalid link or I didn't properly code my portfolio
        </Text>
        <Button color="tomato" asChild size={"3"}>
          <Link to={"/"}>
            <HouseSimple size={"1.5rem"} />
            <Text weight={"light"} size={"4"}>
              Home
            </Text>
          </Link>
        </Button>
      </Flex>
    </Theme>
  );
}
