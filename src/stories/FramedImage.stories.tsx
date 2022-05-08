import React from 'react';
import CustomDocsPage from 'gg-ukit/stories/CustomDocsPage.utils';
import Paragraph from 'gg-ukit/components/Paragraph';
import Column from 'gg-ukit/components/Column';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';

import FramedImageComponent, { FramedImageKind } from 'components/Image/FramedImage';

const TextExample = () => (
    <Paragraph>
        Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая герою
        инфраструктура и четыре большие локации расположены по четырём частям света.
    </Paragraph>
);

const basicProps = {
    src: '/assets/example_preload.jpeg',
    alt: 'test image',
};

export const BasicImage = (args) => (
    <ColumnsWrapper>
        <Column l={7} m={8}>
            <FramedImageComponent {...basicProps} {...args} />
        </Column>
    </ColumnsWrapper>
);

export const NotedImage = (args) => (
    <ColumnsWrapper>
        <Column l={7} m={8}>
            <FramedImageComponent {...basicProps} {...args} />
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
                <FramedImageComponent {...basicProps} {...args} />
            </Paragraph>
            <TextExample />
        </Column>
    </ColumnsWrapper>
);
LeftImage.args = {
    kind: FramedImageKind.Left,
    note: 'Основой игры является исследование мира',
};

export const RightImage = (args) => (
    <ColumnsWrapper>
        <Column l={8} m={8}>
            <Paragraph>
                Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая герою
                инфраструктура и четыре большие локации расположены по четырём частям света.
                <FramedImageComponent {...basicProps} {...args} />
            </Paragraph>
            <TextExample />
        </Column>
    </ColumnsWrapper>
);
RightImage.args = {
    kind: FramedImageKind.Right,
    note: 'Основой игры является исследование мира',
};

const DocsPage = () => (
    <CustomDocsPage
        description={
            <>
                <p>Компонент Framed Image имеет два обязательных параметра src и alt.</p>
            </>
        }
    />
);

export default {
    title: 'Image/Framed Image',
    component: FramedImageComponent,
    argTypes: {
        kind: {
            description: 'Тип изображения',
            control: {
                type: 'select',
                options: FramedImageKind,
            },
        },
        note: {
            description: 'Сноска для изображения',
            defaultValue: '',
            control: {
                type: 'text',
            },
        },
        hoverView: {
            table: {
                disable: true,
            },
        },
        src: {
            table: {
                disable: true,
            },
        },
        alt: {
            table: {
                disable: true,
            },
        },
    },
    parameters: {
        docs: {
            page: DocsPage,
        },
    },
};
