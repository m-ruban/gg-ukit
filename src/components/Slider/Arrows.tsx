import React, { FC } from 'react';
import Button, { ButtonKind } from 'components/Button';
import Colors from 'modules/colors';
import ArrowLeftAlt2 from 'components/Icon/ArrowLeftAlt2';
import ArrowRightAlt2 from 'components/Icon/ArrowRightAlt2';

interface ArrowsProps {
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
