'use client';

import useEmblaCarousel from "embla-carousel-react";
import SlideItem from "./slide-item";
import { NextButton, PrevButton, usePrevNextButtons } from "./carousel-buttons";

export default function Carousel() {

    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, dragFree: true});

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
      } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container hover:cursor-pointer">
                    <div className="embla__slide"><SlideItem /></div>
                    <div className="embla__slide"><SlideItem /></div>
                    <div className="embla__slide"><SlideItem /></div>
                </div>
            </div>
    
            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </section>
    );
}