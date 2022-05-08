import React, { useState } from 'react';
import Image, { BasicImageProps } from 'gg-ukit/components/Image';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';
import Column from 'gg-ukit/components/Column';
import Paragraph from 'gg-ukit/components/Paragraph';
import Modal from 'gg-ukit/components/Modal';
import HoveredImage from 'gg-ukit/components/Image/HoveredImage';
import SearchAdd from 'gg-ukit/components/Icon/SearchAdd';

import SliderComponent from 'gg-ukit/components/Slider';

const slideStyleExample = { height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' };
export const DefaultSlider = (args) => (
    <ColumnsWrapper>
        <Column l={7} m={8}>
            <SliderComponent
                {...args}
                slides={[
                    {
                        view: (
                            <div key="slide_1" style={slideStyleExample}>
                                <Paragraph>Slide 1</Paragraph>
                            </div>
                        ),
                    },
                    {
                        view: (
                            <div key="slide_2" style={slideStyleExample}>
                                <Paragraph>Slide 2</Paragraph>
                            </div>
                        ),
                    },
                ]}
            />
        </Column>
    </ColumnsWrapper>
);

const emptyImg: BasicImageProps = { src: '', alt: '' };
const slide1 = { src: '/assets/example_preload.jpeg', alt: 'test image 1' };
const slide2 = { src: '/assets/example_preload_2.jpeg', alt: 'test image 2' };

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
                        slides={[slide1, slide2].map((image, index) => {
                            return {
                                view: (
                                    <HoveredImage
                                        {...image}
                                        hoverView={<SearchAdd color="#DB9D39" scale={2} />}
                                        onHoverViewClick={() => {
                                            setZoomImg({ show: true, img: { ...image } });
                                        }}
                                    />
                                ),
                                preview: <Image {...image} />,
                            };
                        })}
                    />
                </Column>
            </ColumnsWrapper>
        </>
    );
};

const notedSlidesExample = [
    {
        view: (
            <div style={{ display: 'flex' }}>
                <Image {...slide1} />
            </div>
        ),
        preview: <Image {...slide1} />,
    },
    {
        view: (
            <div style={{ display: 'flex' }}>
                <Image {...slide2} />
            </div>
        ),
        preview: <Image {...slide2} />,
    },
];

export const NotedSlider = (args) => (
    <ColumnsWrapper>
        <Column l={7} m={8}>
            <SliderComponent {...args} slides={notedSlidesExample} />
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
        slides: {
            table: {
                disable: true,
            },
        },
    },
};
