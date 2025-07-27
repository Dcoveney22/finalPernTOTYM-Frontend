import React from "react";
import styles from "../../componentCSS/Home/home.module.css";
import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import { Link } from "react-router";

export default function CarouselSlidesHome() {
  return (
    <div className={styles.carouselBox}>
      <CCarousel controls transition="folding">
        <CCarouselItem>
          <Link to="/trades/7">
            <CImage src={"assets/images/cards/SR-001.jpg"} />
            <CCarouselCaption className={styles.carouselCaption}>
              <h5 className={styles.carouseCaptionItem}>Card of the Week #1</h5>
              <p className={styles.carouseCaptionItem}>trade available from</p>
              <h4 className={styles.carouseCaptionItem}>totymuser22</h4>
            </CCarouselCaption>
          </Link>
        </CCarouselItem>

        <CCarouselItem>
          <Link to="/trades/7">
            <CImage src={"assets/images/cards/SR-001.jpg"} />
            <CCarouselCaption className={styles.carouselCaption}>
              <h5 className={styles.carouseCaptionItem}>Card of the Week #2</h5>
              <p className={styles.carouseCaptionItem}>trade available from</p>
              <h4 className={styles.carouseCaptionItem}>totymuser22</h4>
            </CCarouselCaption>
          </Link>
        </CCarouselItem>
        <CCarouselItem>
          <Link to="/trades/7">
            <CImage src={"assets/images/cards/SR-001.jpg"} />
            <CCarouselCaption className={styles.carouselCaption}>
              <h5 className={styles.carouseCaptionItem}>Card of the Week #3</h5>
              <p className={styles.carouseCaptionItem}>trade available from</p>
              <h4 className={styles.carouseCaptionItem}>totymuser22</h4>
            </CCarouselCaption>
          </Link>
        </CCarouselItem>
      </CCarousel>
    </div>
  );
}
