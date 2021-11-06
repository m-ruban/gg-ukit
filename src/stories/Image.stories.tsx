import React from 'react';
import Paragraph from 'components/Paragraph';
import Column from 'components/Column';
import ColumnsWrapper from 'components/ColumnsWrapper';
import Image, { ImageKind } from 'components/Image';

const TextExample = () => (
    <>
        <Paragraph>
            Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая герою
            инфраструктура и четыре большие локации расположены по четырём частям света.
        </Paragraph>
        <Paragraph>
            Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая герою
            инфраструктура и четыре большие локации расположены по четырём частям света.
        </Paragraph>
    </>
);

export const Basic = (args) => (
    <ColumnsWrapper>
        <Column l={8} m={8}>
            <Paragraph>
                Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая герою
                инфраструктура и четыре большие локации расположены по четырём частям света.
                <Image src="/assets/example_preload.jpeg" alt="test image" {...args} />
            </Paragraph>
            <TextExample />
        </Column>
    </ColumnsWrapper>
);

export const NotedImage = (args) => (
    <ColumnsWrapper>
        <Column l={8} m={8}>
            <Paragraph>
                Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая герою
                инфраструктура и четыре большие локации расположены по четырём частям света.
                <Image src="/assets/example_preload.jpeg" alt="test image" {...args} />
            </Paragraph>
            <TextExample />
        </Column>
    </ColumnsWrapper>
);
NotedImage.args = {
    note: 'Основой игры является исследование мира',
};

export const LeftImage = (args) => (
    <ColumnsWrapper>
        <Column l={8} m={8}>
            <Paragraph>
                Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая герою
                инфраструктура и четыре большие локации расположены по четырём частям света.
                <Image src="/assets/example_preload.jpeg" alt="test image" {...args} />
            </Paragraph>
            <TextExample />
        </Column>
    </ColumnsWrapper>
);
LeftImage.args = {
    kind: ImageKind.Left,
    note: 'Основой игры является исследование мира',
};

export const RightImage = (args) => (
    <ColumnsWrapper>
        <Column l={8} m={8}>
            <Paragraph>
                Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая герою
                инфраструктура и четыре большие локации расположены по четырём частям света.
                <Image src="/assets/example_preload.jpeg" alt="test image" {...args} />
            </Paragraph>
            <TextExample />
        </Column>
    </ColumnsWrapper>
);
RightImage.args = {
    kind: ImageKind.Right,
    note: 'Основой игры является исследование мира',
};

export default {
    title: 'Images',
    component: Image,
    argTypes: {
        kind: {
            description: 'Тип изображения',
            control: {
                type: 'select',
                options: ImageKind,
            },
        },
        note: {
            description: 'Сноска для изображения',
            defaultValue: '',
            control: {
                type: 'text',
            },
        },
    },
};
