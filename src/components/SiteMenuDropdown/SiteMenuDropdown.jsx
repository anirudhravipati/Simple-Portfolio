import { Code, List, SealQuestion } from "@phosphor-icons/react";
import { CubeFocus, HouseSimple, Info } from "@phosphor-icons/react/dist/ssr";
import { Component1Icon } from "@radix-ui/react-icons";
import { DropdownMenu, Flex, IconButton } from "@radix-ui/themes";
import { Link as RouterLink } from "react-router-dom";

export function SiteMenuDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton
          variant="ghost"
          style={{ position: "fixed", left: "1rem", top: "1rem", zIndex: "1" }}
        >
          <List size={"1.5rem"} />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content variant="soft">
        <DropdownMenu.Item asChild>
          <RouterLink to={"/"}>
            {" "}
            <Flex align={"center"} gap={"2"}>
              <HouseSimple size="1rem" />
              Home
            </Flex>
          </RouterLink>
        </DropdownMenu.Item>

        <DropdownMenu.Separator />

        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>
            <Flex align={"center"} gap={"2"}>
              <Component1Icon size="1rem" />
              Digital Product Design
            </Flex>
          </DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item asChild>
              <RouterLink to={"/CodeReview"}> Code Review</RouterLink>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <RouterLink to={"/TestRCA"}> Test RCA</RouterLink>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <RouterLink to={"/LogManagement"}> Log Management</RouterLink>
            </DropdownMenu.Item>

          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>

        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>
            <Flex align={"center"} gap={"2"}>
              <SealQuestion size={"1rem"} />
              User Research
            </Flex>
          </DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item asChild>
              <RouterLink to={"/FAM"}> FAM</RouterLink>
            </DropdownMenu.Item>
            {/* <DropdownMenu.Item>Switch Twitch</DropdownMenu.Item> */}
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>

        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>
            <Flex align={"center"} gap={"2"}>
              <CubeFocus size={"1rem"} />
              Creative Tech
            </Flex>
          </DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item asChild>
              <RouterLink to={"/Shunya"}> Shunya</RouterLink>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <RouterLink to={"/Interlink"}> Interlink</RouterLink>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <RouterLink to={"/AlienRadio"}> Alien Radio</RouterLink>
            </DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>

        <DropdownMenu.Item asChild>
          <RouterLink to={"/SoftwareEngineering"}>
            <Flex align={"center"} gap={"2"}>
              <Code size={"1rem"} />
              Software Engineering
            </Flex>
          </RouterLink>
        </DropdownMenu.Item>

        <DropdownMenu.Separator />

        <DropdownMenu.Item asChild>
          <RouterLink to={"/About"}>
            <Flex align={"center"} gap={"2"}>
              <Info size={"1rem"} />
              About
            </Flex>
          </RouterLink>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
