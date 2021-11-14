import React, { useState } from 'react';
import CustomDocsPage from 'stories/utils/CustomDocsPage';
import Paragraph from 'components/Paragraph';
import Column from 'components/Column';
import ColumnsWrapper from 'components/ColumnsWrapper';
import Image, { ImageKind, FullSizeImage } from 'components/Image';
import SearchAdd from 'components/Icon/SearchAdd';
import ArrowForward from 'components/Icon/ArrowForward';
import ModalComponent from 'components/Modal';

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

const basicProps = {
    src: '/assets/example_preload.jpeg',
    alt: 'test image',
};

export const Basic = (args) => (
    <ColumnsWrapper>
        <Column l={7} m={8}>
            <Image {...basicProps} {...args} />
        </Column>
    </ColumnsWrapper>
);

export const NotedImage = (args) => (
    <ColumnsWrapper>
        <Column l={8} m={8}>
            <Image {...basicProps} {...args} />
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
                <Image {...basicProps} {...args} />
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
                <Image {...basicProps} {...args} />
            </Paragraph>
            <TextExample />
        </Column>
    </ColumnsWrapper>
);
RightImage.args = {
    kind: ImageKind.Right,
    note: 'Основой игры является исследование мира',
};

export const HoveredImage = (args) => (
    <ColumnsWrapper>
        <Column l={8} m={8}>
            <Paragraph>
                <Image {...basicProps} hoverView={<SearchAdd color="#DB9D39" scale={2} />} {...args} />
                Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая герою
                инфраструктура и четыре большие локации расположены по четырём частям света.
            </Paragraph>
            <TextExample />
        </Column>
    </ColumnsWrapper>
);
HoveredImage.args = {
    kind: ImageKind.Right,
    note: 'Основой игры является исследование мира',
};

export const LinkImage = (args) => (
    <ColumnsWrapper>
        <Column l={8} m={8}>
            <Paragraph>
                <Image {...basicProps} hoverView={<ArrowForward color="#DB9D39" scale={2} />} {...args} />
                Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая герою
                инфраструктура и четыре большие локации расположены по четырём частям света.
            </Paragraph>
            <TextExample />
        </Column>
    </ColumnsWrapper>
);
LinkImage.args = {
    kind: ImageKind.Right,
    note: 'Основой игры является исследование мира',
    onClick: () => {
        window.open('http://gamespirit.org/', '_blank');
    },
};

export const ModalImage = () => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <>
            <ModalComponent
                visible={show}
                onClose={() => {
                    setShow(!show);
                }}
            >
                <FullSizeImage src="/assets/example_origin.jpeg" alt="origin image" />
            </ModalComponent>
            <ColumnsWrapper>
                <Column l={8} m={8}>
                    <Paragraph>
                        <Image
                            {...basicProps}
                            kind={ImageKind.Right}
                            note="Основой игры является исследование мира"
                            hoverView={<SearchAdd color="#DB9D39" scale={2} />}
                            onClick={() => {
                                setShow(!show);
                            }}
                        />
                        Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая
                        герою инфраструктура и четыре большие локации расположены по четырём частям света.
                    </Paragraph>
                    <TextExample />
                </Column>
            </ColumnsWrapper>
        </>
    );
};

const DocsPage = () => (
    <CustomDocsPage
        description={
            <>
                <p>Компонент Image имеет два обязательных параметра src и alt.</p>
                <div>
                    Необязательные параметры:
                    <ul>
                        <li>lineColor - цвет линии при hover</li>
                        <li>hoverView - позволяет определить компонент, который будет отображаться при hover action</li>
                        <li>onClick - обработчик события click</li>
                        <li>
                            kind - тип изображения, default value - изображение по центру, допустимо использовать
                            Left/Right из enum ImageKind
                        </li>
                        <li>note - подпись для изображения</li>
                    </ul>
                </div>
            </>
        }
    />
);

export default {
    title: 'Image',
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
        lineColor: {
            description: 'Цвет линии наведнии',
            control: {
                type: 'color',
            },
        },
        hoverView: {
            description: 'Позволяет передать компонент, который будет отображаться при событии hover',
        },
        onClick: {
            description: 'Обработчик события click',
            action: 'clicked',
        },
    },
    parameters: {
        docs: {
            page: DocsPage,
        },
    },
};
