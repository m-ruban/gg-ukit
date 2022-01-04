import React, { useState } from 'react';
import Image, { BasicImageProps } from 'components/Image';
import ColumnsWrapper from 'components/ColumnsWrapper';
import Column from 'components/Column';
import Paragraph from 'components/Paragraph';
import Modal from 'components/Modal';
import HoveredImage from 'components/Image/HoveredImage';
import SearchAdd from 'components/Icon/SearchAdd';

import SliderComponent from 'components/Slider';

const slideStyleExample = { height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' };
export const DefaultSlider = (args) => (
    <ColumnsWrapper>
        <Column l={7} m={8}>
            <SliderComponent
                {...args}
                slides={[
                    <div key="slide_1" style={slideStyleExample}>
                        <Paragraph>Slide 1</Paragraph>
                    </div>,
                    <div key="slide_2" style={slideStyleExample}>
                        <Paragraph>Slide 2</Paragraph>
                    </div>,
                ]}
            />
        </Column>
    </ColumnsWrapper>
);

const emptyImg: BasicImageProps = { src: '', alt: '' };
const images: BasicImageProps[] = [
    { src: '/assets/example_preload.jpeg', alt: 'test image 1' },
    { src: '/assets/example_preload_2.jpeg', alt: 'test image 2' },
];

export const ImageSlider = (args) => {
    const [zoomImg, setZoomImg] = useState<{ show: boolean; img: BasicImageProps }>({
        show: false,
        img: { ...emptyImg },
    });
    return (
        <>
            <Modal
                visible={zoomImg.show}
                onClose={() => {
                    setZoomImg({ show: false, img: { ...emptyImg } });
                }}
            >
                <Image {...zoomImg.img} />
            </Modal>
            <ColumnsWrapper>
                <Column l={7} m={8}>
                    <SliderComponent
                        {...args}
                        slides={images.map((image, index) => (
                            <HoveredImage
                                key={index}
                                {...image}
                                hoverView={<SearchAdd color="#DB9D39" scale={2} />}
                                onHoverViewClick={() => {
                                    setZoomImg({ show: true, img: { ...image } });
                                }}
                            />
                        ))}
                    />
                </Column>
            </ColumnsWrapper>
        </>
    );
};

export const NotedSlider = (args) => (
    <ColumnsWrapper>
        <Column l={7} m={8}>
            <SliderComponent
                {...args}
                slides={images.map((image, index) => (
                    <div key={index} style={{ display: 'flex' }}>
                        <Image {...image} />
                    </div>
                ))}
            />
        </Column>
    </ColumnsWrapper>
);
NotedSlider.args = {
    note: 'Test note',
};

export default {
    title: 'Slider',
    component: SliderComponent,
    argTypes: {
        note: {
            description: 'Сноска для галереи',
            defaultValue: '',
            control: {
                type: 'text',
            },
        },
    },
};
