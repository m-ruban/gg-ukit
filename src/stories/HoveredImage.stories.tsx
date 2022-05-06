import React, { useState } from 'react';
import CustomDocsPage from 'stories/CustomDocsPage.utils';
import Column from 'components/Column';
import ColumnsWrapper from 'components/ColumnsWrapper';
import Image from 'components/Image';
import SearchAdd from 'components/Icon/SearchAdd';
import Modal from 'components/Modal';

import HoveredImageComponent from 'components/Image/HoveredImage';
import Colors from 'modules/colors';

export const BasicImage = (args) => (
    <ColumnsWrapper>
        <Column l={7} m={8}>
            <HoveredImageComponent
                src="/assets/example_preload.jpeg"
                alt="test imag"
                hoverView={<SearchAdd color="#DB9D39" scale={2} />}
                {...args}
            />
        </Column>
    </ColumnsWrapper>
);

export const ModalImage = () => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <>
            <Modal
                visible={show}
                onClose={() => {
                    setShow(!show);
                }}
            >
                <Image src="/assets/example_origin.jpeg" alt="origin image" />
            </Modal>
            <ColumnsWrapper>
                <Column l={7} m={8}>
                    <HoveredImageComponent
                        src="/assets/example_preload.jpeg"
                        alt="test imag"
                        hoverView={<SearchAdd color="#DB9D39" scale={2} />}
                        onHoverViewClick={() => {
                            setShow(!show);
                        }}
                    />
                </Column>
            </ColumnsWrapper>
        </>
    );
};

const DocsPage = () => (
    <CustomDocsPage
        description={
            <>
                <p>Компонент HoveredImage имеет два обязательных параметра src и alt.</p>
            </>
        }
    />
);

export default {
    title: 'Image/Hovered Image',
    component: HoveredImageComponent,
    argTypes: {
        lineColor: {
            description: 'Цвет линии наведнии',
            control: {
                type: 'color',
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
        note: {
            description: 'Сноска для изображения',
            defaultValue: '',
            control: {
                type: 'text',
            },
        },
        onHoverViewClick: {
            description: 'Обработчик события click на hoverView',
            action: 'clicked',
        },
    },
    parameters: {
        docs: {
            page: DocsPage,
        },
    },
};
