import { Popover,Flex,Heading,IconButton,Box,Text,ScrollArea } from "@radix-ui/themes";
import { Plus } from "@phosphor-icons/react";

function ImageHotspot({ top, left, title, content }) {
    return (
      <Popover.Root>
        <Popover.Trigger style={{ position: "absolute", top, left }}>
          <IconButton color="bronze" radius="full" size={"2"} variant="solid">
            <Plus size={"1rem"} weight="bold" />
          </IconButton>
        </Popover.Trigger>
        <Popover.Content size="3" className="hotspot-content">
          <Flex direction={"column"}>
            <Heading>{title}</Heading>
            <ScrollArea
              size={"1"}
              type="always"
              scrollbars="vertical"
              style={{ marginTop:"1rem", height: "fit-content", maxHeight: "20vh" }}
            >
              <Box pr={"3"}>
                <Text size={"3"}>{content}</Text>
              </Box>
            </ScrollArea>
          </Flex>
        </Popover.Content>
      </Popover.Root>
    );
  }
  
  export default ImageHotspot;