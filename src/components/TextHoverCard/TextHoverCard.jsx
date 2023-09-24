import { HoverCard,Flex,Text, Em } from "@radix-ui/themes";

export default function TextHoverCard({trigger,content, size=2})
{
    return(
        <HoverCard.Root>
        <HoverCard.Trigger>
            <Text size={size} color="plum"><Em>{trigger}</Em></Text>
        </HoverCard.Trigger>
        <HoverCard.Content>
          <Flex gap="2" style={{minWidth: "350px", maxWidth: "30vw"}}>
            <Text size={size}>
                {content}
            </Text>
          </Flex>
        </HoverCard.Content>
      </HoverCard.Root>
    
    )
}