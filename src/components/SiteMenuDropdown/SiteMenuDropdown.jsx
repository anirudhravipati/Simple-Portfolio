import { List } from "@phosphor-icons/react";
import { DropdownMenu, IconButton } from "@radix-ui/themes";
import { Link as RouterLink } from "react-router-dom";

export function SiteMenuDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton
          variant="soft"
          style={{ position: "fixed", left: "1rem", top: "1rem" }}
        >
          <List size={"1.5rem"} />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content variant="soft">
        <DropdownMenu.Item asChild>
          <RouterLink to={"/"}> Home</RouterLink>
        </DropdownMenu.Item>

        <DropdownMenu.Separator />

        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>
            Digital Product Design
          </DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item asChild>
              <RouterLink to={"/LogManagement"}> Log Management</RouterLink>
            </DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>

        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>User Research</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item asChild>
              <RouterLink to={"/FAM"}> FAM</RouterLink>
            </DropdownMenu.Item>
            {/* <DropdownMenu.Item>Switch Twitch</DropdownMenu.Item> */}
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>

        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Creative Tech</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
          <DropdownMenu.Item asChild>
              <RouterLink to={"/Interlink"}> Interlink</RouterLink>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <RouterLink to={"/AlienRadio"}> Alien Radio</RouterLink>
            </DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>

        <DropdownMenu.Item asChild>
          <RouterLink to={"/SoftwareEngineering"}> Software Engineering</RouterLink>
        </DropdownMenu.Item>

        <DropdownMenu.Separator />

        <DropdownMenu.Item asChild>
          <RouterLink to={"/About"}> About</RouterLink>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
