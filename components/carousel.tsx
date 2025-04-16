'use client';

import useEmblaCarousel from "embla-carousel-react";
import SlideItem from "./slide-item";

export default function Carousel() {

    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide"><SlideItem /></div>
                <div className="embla__slide"><SlideItem /></div>
                <div className="embla__slide"><SlideItem /></div>
            </div>
        </div>
    );
}