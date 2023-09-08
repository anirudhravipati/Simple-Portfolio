import { Container,Flex,AspectRatio } from "@radix-ui/themes"
import ImageHotspot from "../ImageHotspot/ImageHotspot"
import LoremIpsum from "react-lorem-ipsum"

export default function ImageViewer({size=4,src,hotspots}){
    return(
        <Container size={size}>
          <Flex position={"relative"}>
            <AspectRatio ratio={4 / 3}>
              <img
                src={src}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "0.5rem",
                }}
              />
            </AspectRatio>
            {
                hotspots.map((spot) => (
                    <ImageHotspot key={spot.title+spot.top+spot.left} top={spot.top} left={spot.left} title={spot.title} content={spot.content} />
                ))
            }
          </Flex>
        </Container>
    )
}