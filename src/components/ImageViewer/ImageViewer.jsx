import {Container, Flex, AspectRatio} from "@radix-ui/themes";
import ImageHotspot from "../ImageHotspot/ImageHotspot";
import LoremIpsum from "react-lorem-ipsum";

export default function ImageViewer({
                                        src, hotspots, style = {
        width: "100%",
        objectFit: "cover",
        borderRadius: "0.5rem",
    }
                                    }) {
    return (
        <Flex width={"100%"} position={"relative"}>
            <img
                src={src}
                style={{...style}}
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
