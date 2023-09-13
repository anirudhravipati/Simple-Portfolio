import LoremIpsum from "react-lorem-ipsum";
import { Text } from "@radix-ui/themes";

const FAMBody = [
  {
    key: "intro",
    type: "text",
    content: (
      <Text>
        FAM is a self-help app that focuses on combating loneliness for people
        who are either new to a place or just shy. It combines an events app
        with a journal to help those that struggle with social anxiety
      </Text>
    ),
  },
  {
    key: "intro",
    type: "text",
    content: (
      <Text>
        FAM is a self-help app that focuses on combating loneliness for people
        who are either new to a place or just shy. It combines an events app
        with a journal to help those that struggle with social anxiety
      </Text>
    ),
  },
];

const FAMImage = {
  src: "https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80",
  hotspots: [
    {
      top: "30%",
      left: "20%",
      title: "Hello",
      content: <LoremIpsum p={3} />,
    },
    {
      top: "50%",
      left: "50%",
      title: "Hello",
      content: "content is here. content is here.content is here",
    },
  ],
};

export default FAMImage;
