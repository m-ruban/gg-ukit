import React, { FC } from 'react';
import Button, { ButtonKind } from 'gg-ukit/components/Button';
import Colors from 'gg-ukit/modules/colors';
import ArrowLeftAlt2 from 'gg-ukit/components/Icon/ArrowLeftAlt2';
import ArrowRightAlt2 from 'gg-ukit/components/Icon/ArrowRightAlt2';

export interface ArrowsProps {
    prevSlide: () => void;
    nextSlide: () => void;
}

const Arrows: FC<ArrowsProps> = ({ prevSlide, nextSlide }) => {
    return (
        <>
            <div className="gg-slider-content__arrow">
                <Button
                    kind={ButtonKind.Promo}
                    rounded
                    onClick={prevSlide}
                    icon={<ArrowLeftAlt2 color={Colors.Secondary} scale={1} />}
                />
            </div>
            <div className="gg-slider-content__arrow gg-slider-content__arrow_right">
                <Button
                    kind={ButtonKind.Promo}
                    rounded
                    onClick={nextSlide}
                    icon={<ArrowRightAlt2 color={Colors.Secondary} scale={1} />}
                />
            </div>
        </>
    );
};

export default Arrows;
