import React from "react";
import styles from "../../componentCSS/Home/home.module.css";

import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

export default function CarouselSlidesHome() {
  return (
    <div className={styles.carouselBox}>
      <CCarousel controls transition="folding">
        <CCarouselItem>
          <CImage src={"assets/images/cards/SR-001.jpg"} />
        </CCarouselItem>
        <CCarouselItem>
          <CImage src={"assets/images/cards/SR-001.jpg"} />
        </CCarouselItem>
        <CCarouselItem>
          <CImage src={"assets/images/cards/SR-001.jpg"} />
        </CCarouselItem>
      </CCarousel>
    </div>
  );
}
