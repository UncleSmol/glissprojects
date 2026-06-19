"use client";

import { heroImages } from "@/data/hero-images";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import styles from "./HeroCarousel.module.scss";

export function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      duration: 30,
    },
    [
      Fade(),
      Autoplay({
        delay: 5200,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ],
  );

  return (
    <div className={styles["hero-carousel"]} aria-hidden="true">
      <div className={styles["hero-carousel__viewport"]} ref={emblaRef}>
        <div className={styles["hero-carousel__container"]}>
          {heroImages.map((image, index) => (
            <div className={styles["hero-carousel__slide"]} key={image.src.src}>
              <Image
                alt={image.alt}
                className={styles["hero-carousel__image"]}
                fill
                priority={index === 0}
                quality={82}
                sizes="100vw"
                src={image.src}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
