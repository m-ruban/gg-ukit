import React, { useState } from 'react';
import CustomDocsPage from 'gg-ukit/stories/CustomDocsPage.utils';
import Column from 'gg-ukit/components/Column';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';
import Image from 'gg-ukit/components/Image';
import SearchAdd from 'gg-ukit/components/Icon/SearchAdd';
import Search from 'gg-ukit/components/Icon/Search';
import Modal from 'gg-ukit/components/Modal';
import Button, { ButtonKind } from 'gg-ukit/components/Button';
import Colors from 'modules/colors';

import HoveredImageComponent from 'components/Image/HoveredImage';

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
                        hoverView={
                            <Button
                                kind={ButtonKind.Promo}
                                onClick={() => {
                                    setShow(!show);
                                }}
                                icon={<Search color={Colors.Secondary} />}
                                rounded
                            />
                        }
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
    },
    parameters: {
        docs: {
            page: DocsPage,
        },
    },
};
