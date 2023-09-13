import { Container, Flex, AspectRatio } from "@radix-ui/themes";
import ImageHotspot from "../ImageHotspot/ImageHotspot";
import LoremIpsum from "react-lorem-ipsum";

export default function ImageViewer({ src, hotspots }) {
  return (
    <Flex width={"100%"} position={"relative"}>
      <img
        src={src}
        style={{
          width: "100%",
          objectFit: "cover",
          borderRadius: "0.5rem",
        }}
      />
      {hotspots.map((spot) => (
        <ImageHotspot
          key={spot.title + spot.top + spot.left}
          top={spot.top}
          left={spot.left}
          title={spot.title}
          content={spot.content}
        />
      ))}
    </Flex>
  );
}
