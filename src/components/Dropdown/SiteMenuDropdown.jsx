import { List } from "@phosphor-icons/react";
import { DropdownMenu, IconButton } from "@radix-ui/themes";
import { Link as RouterLink } from "react-router-dom";

export function SiteMenuDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton
          variant="soft"
          color="jade"
          style={{ position: "absolute", left: "2rem", top: "1rem" }}
        >
          <List size={"1.5rem"} />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content variant="soft" color="cyan">
        <DropdownMenu.Item asChild>
          <RouterLink to={"/"}> Home</RouterLink>
        </DropdownMenu.Item>
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Projects</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item asChild>
              <RouterLink to={"/FAM"}> FAM</RouterLink>
            </DropdownMenu.Item>
            <DropdownMenu.Item>Title 1</DropdownMenu.Item>
            <DropdownMenu.Item>Title 2</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>About</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
