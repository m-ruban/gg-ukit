import React, { FC, ReactNode, useRef } from 'react';
import Button, { ButtonKind } from 'components/Button';
import Colors from 'modules/colors';
import ArrowLeftAlt2 from 'components/Icon/ArrowLeftAlt2';
import ArrowRightAlt2 from 'components/Icon/ArrowRightAlt2';
import 'components/Slider/slider.less';

interface SliderProps {
    slides: ReactNode[];
    note?: string;
}

const Slider: FC<SliderProps> = ({ slides, note }) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const statusLineRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef<number>(0);
    const prevSlide = () => {
        sliderRef.current.style.transform = 'translateX(0%)';
        statusLineRef.current.style.transform = 'translateX(0%)';
    };
    const nextSlide = () => {
        sliderRef.current.style.transform = 'translateX(-100%)';
        statusLineRef.current.style.transform = 'translateX(100%)';
    };
    return (
        <div className="gg-slider">
            <div className="gg-slider-content">
                <div className="gg-slider-scroller-area">
                    <div
                        ref={sliderRef}
                        className="gg-slider-items"
                        onTouchStart={(touchStartEvent) => {
                            touchStartX.current = touchStartEvent.changedTouches[0].screenX;
                        }}
                        onTouchEnd={(touchEndEvent) => {
                            const touchEndX = touchEndEvent.changedTouches[0].screenX;
                            if (touchEndX >= touchStartX.current) {
                                prevSlide();
                            } else {
                                nextSlide();
                            }
                        }}
                    >
                        {slides.map((slide, index) => (
                            <div key={index} className="gg-slider-item">
                                {slide}
                            </div>
                        ))}
                    </div>
                    <div ref={statusLineRef} className="gg-slider-controls_status-line" />
                </div>
                <div className="gg-slider-controls">
                    <div className="gg-slider-controls__arrow gg-slider-controls__arrow_left">
                        <Button
                            kind={ButtonKind.Promo}
                            rounded
                            onClick={prevSlide}
                            icon={<ArrowLeftAlt2 color={Colors.Secondary} scale={1} />}
                        />
                    </div>
                    <div className="gg-slider-controls__arrow gg-slider-controls__arrow_right">
                        <Button
                            kind={ButtonKind.Promo}
                            rounded
                            onClick={nextSlide}
                            icon={<ArrowRightAlt2 color={Colors.Secondary} scale={1} />}
                        />
                    </div>
                </div>
            </div>
            {note && <div className="gg-slider-note">{note}</div>}
        </div>
    );
};

export default Slider;
