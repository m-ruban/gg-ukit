import React from 'react';
import FullSizeImage from 'components/Image/FullSizeImage';
import ColumnsWrapper from 'components/ColumnsWrapper';
import Column from 'components/Column';
import Paragraph from 'components/Paragraph';

import SliderComponent from 'components/Slider';
import { ImageKind } from 'components/Image';

const defaultSlideStyle = { height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' };
export const DefaultSlider = (args) => (
    <ColumnsWrapper>
        <Column l={7} m={8}>
            <SliderComponent
                {...args}
                slides={[
                    <div key="slide_1" style={defaultSlideStyle}>
                        <Paragraph>Slide 1</Paragraph>
                    </div>,
                    <div key="slide_2" style={defaultSlideStyle}>
                        <Paragraph>Slide 2</Paragraph>
                    </div>,
                ]}
            />
        </Column>
    </ColumnsWrapper>
);

export const ImageSlider = (args) => (
    <ColumnsWrapper>
        <Column l={7} m={8}>
            <SliderComponent
                {...args}
                slides={[
                    <FullSizeImage key="img_1" src="/assets/example_preload.jpeg" alt="test image 1" />,
                    <FullSizeImage key="img_2" src="/assets/example_preload_2.jpeg" alt="test image 2" />,
                ]}
            />
        </Column>
    </ColumnsWrapper>
);

export const NotedSlider = (args) => (
    <ColumnsWrapper>
        <Column l={7} m={8}>
            <SliderComponent
                {...args}
                slides={[
                    <FullSizeImage key="img_1" src="/assets/example_preload.jpeg" alt="test image 1" />,
                    <FullSizeImage key="img_2" src="/assets/example_preload_2.jpeg" alt="test image 2" />,
                ]}
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
