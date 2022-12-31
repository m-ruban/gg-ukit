import React, { useState } from 'react';
import CustomDocsPage from 'gg-ukit/stories/CustomDocsPage.utils';
import SheetComponent, { SheetPositionType } from 'gg-ukit/components/Sheet';
import Button, { ButtonKind } from 'gg-ukit/components/Button';
import Paragraph from 'gg-ukit/components/Paragraph';
import Column from 'gg-ukit/components/Column';
import { H2 } from 'gg-ukit/components/Header';
import { HeaderLine } from 'gg-ukit/components/Header/BasicHeader';

export const Sheet = (args) => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Button
                onClick={() => {
                    setVisible(!visible);
                }}
                rounded
            >
                Open sheet
            </Button>
            <SheetComponent
                {...args}
                header={<H2 title="Sheet Header" line={HeaderLine.TertiaryDimmed} />}
                footer={
                    <Button kind={ButtonKind.Promo} rounded>
                        Action
                    </Button>
                }
                visible={visible}
                onClose={() => {
                    setVisible(false);
                }}
            >
                <Column l={6} m={8} s={5} xs={4} container>
                    <Paragraph>
                        Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая
                        герою инфраструктура и четыре большие локации расположены по четырём частям света. Каждый
                        уровень имеет свой дизайн и дизайн и дизайн и дизайн и дизайн и дизайн и дизайн и дизайн и
                        тематику - будь то северные горы, болота затопленный город. В конце каждой есть босс, который и
                        даст вам необходимую часть ключа.
                    </Paragraph>
                    <Paragraph>
                        Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая
                        герою инфраструктура и четыре большие локации расположены по четырём частям света. Каждый
                        уровень имеет свой дизайн и дизайн и дизайн и дизайн и дизайн и дизайн и дизайн и дизайн и
                        тематику - будь то северные горы, болота затопленный город. В конце каждой есть босс, который и
                        даст вам необходимую часть ключа.
                    </Paragraph>
                    <Paragraph>
                        Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая
                        герою инфраструктура и четыре большие локации расположены по четырём частям света. Каждый
                        уровень имеет свой дизайн и дизайн и дизайн и дизайн и дизайн и дизайн и дизайн и дизайн и
                        тематику - будь то северные горы, болота затопленный город. В конце каждой есть босс, который и
                        даст вам необходимую часть ключа.
                    </Paragraph>
                    <Paragraph>
                        Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая
                        герою инфраструктура и четыре большие локации расположены по четырём частям света. Каждый
                        уровень имеет свой дизайн и дизайн и дизайн и дизайн и дизайн и дизайн и дизайн и дизайн и
                        тематику - будь то северные горы, болота затопленный город. В конце каждой есть босс, который и
                        даст вам необходимую часть ключа.
                    </Paragraph>
                </Column>
            </SheetComponent>
        </>
    );
};
Sheet.args = {
    positionType: SheetPositionType.Left,
};

const DocsPage = () => (
    <CustomDocsPage
        description={
            <>
                <p>Sheet</p>
            </>
        }
    />
);

export default {
    title: 'Sheet',
    component: SheetComponent,
    argTypes: {
        positionType: {
            description: 'Позиция листа',
            control: {
                type: 'radio',
                options: SheetPositionType,
            },
        },
        header: {
            table: {
                disable: true,
            },
        },
        visible: {
            table: {
                disable: true,
            },
        },
        footer: {
            table: {
                disable: true,
            },
        },
        onClose: {
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
