import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageSlider.css"
import {
Flex,
Container,
Card
} from "@radix-ui/themes";



export default function SimpleSlider({images}) {
  return (
    <Flex>
      <Card className="simple-slider-card">  
      <ImageGallery showBullets showFullscreenButton={false} showPlayButton={false} items={images}/>
      </Card>
    </Flex>
  );
}
