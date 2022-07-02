import React, { FC, ReactNode, RefObject, useRef, useState, useCallback, useEffect, useMemo } from 'react';
import classnames from 'classnames';
import Arrows from 'gg-ukit/components/Slider/Arrows';
import 'gg-ukit/components/Slider/slider.less';

export interface Slide {
    view: ReactNode;
    preview?: ReactNode;
}

export interface SliderProps {
    slides: Slide[];
    note?: string;
}

const changeSlide = (slider: RefObject<HTMLDivElement>, statusLine: RefObject<HTMLDivElement>, selected: number) => {
    const translateX = 100 * selected;
    slider.current.style.transform = `translateX(${translateX * -1}%)`;
    statusLine.current.style.transform = `translateX(${translateX}%)`;
};

const Slider: FC<SliderProps> = ({ slides, note }) => {
    const isFirstRender = useRef<boolean>(true);
    const slider = useRef<HTMLDivElement>(null);
    const statusLine = useRef<HTMLDivElement>(null);
    const selectedSlide = useRef<HTMLDivElement>(null);
    const [selected, setSelected] = useState<number>(0);
    const showPreview = useMemo(() => slides.some((slide) => slide.preview), [slides]);

    // scroll to selected preview
    useEffect(() => {
        if (isFirstRender.current) {
            return;
        }
        if (showPreview) {
            selectedSlide.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
        }
    }, [showPreview, selected]);

    // status line width
    useEffect(() => {
        statusLine.current.style.width = `${100 / slides.length}%`;
    }, [slides]);

    useEffect(() => {
        isFirstRender.current = false;
    }, []);

    // slide animate
    const prevSlide = useCallback(() => {
        if (selected == 0) {
            return;
        }
        const value = selected - 1;
        setSelected(value);
        changeSlide(slider, statusLine, value);
    }, [selected]);
    const nextSlide = useCallback(() => {
        if (selected === slides.length - 1) {
            return;
        }
        const value = selected + 1;
        setSelected(value);
        changeSlide(slider, statusLine, value);
    }, [slides, selected]);

    // preview
    const onClickPreview = useCallback((id: number) => {
        setSelected(id);
        changeSlide(slider, statusLine, id);
    }, []);
    return (
        <div className="gg-slider">
            <div className="gg-slider-content">
                <div className="gg-slider-scroller-area">
                    <div ref={slider} className="gg-slider-items">
                        {slides.map((slide, index) => (
                            <div key={`view_${index}`} className="gg-slider-item">
                                {slide.view}
                            </div>
                        ))}
                    </div>
                    <div
                        ref={statusLine}
                        className={classnames('gg-slider-content__status-line', {
                            'gg-slider-content__status-line_previews': showPreview,
                        })}
                    />
                </div>
                {showPreview && (
                    <div className="gg-slider-items gg-slider-items_previews">
                        {slides.map((slide, index) => (
                            <div
                                ref={index === selected ? selectedSlide : null}
                                key={`preview_${index}`}
                                className={classnames('gg-slider-preview', {
                                    'gg-slider-preview_active': index === selected,
                                })}
                                onClick={() => {
                                    onClickPreview(index);
                                }}
                            >
                                {slide.preview}
                            </div>
                        ))}
                    </div>
                )}
                <Arrows nextSlide={nextSlide} prevSlide={prevSlide} />
            </div>
            {note && <div className="gg-slider-note">{note}</div>}
        </div>
    );
};

export default Slider;
