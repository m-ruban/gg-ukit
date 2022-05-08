import React from 'react';
import CustomDocsPage from 'gg-ukit/stories/CustomDocsPage.utils';
import Paragraph from 'gg-ukit/components/Paragraph';
import ColumnComponent from 'gg-ukit/components/Column';

export const Column = (args) => (
    <ColumnComponent {...args}>
        <Paragraph>
            Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая герою
            инфраструктура и четыре большие локации расположены по четырём частям света. Каждый уровень имеет свой
            дизайн и тематику - будь то северные горы, болота или затопленный город. В конце каждой локации есть босс,
            который и даст вам необходимую часть ключа.
        </Paragraph>
    </ColumnComponent>
);

Column.args = {
    l: 12,
    m: 12,
    s: 6,
    xs: 4,
};

const DocsPage = () => (
    <CustomDocsPage
        description={
            <>
                <p>
                    Сетка служит для задания визуальной структуры страницы и разбиения страницы на блоки (строки и
                    колонки), внутри которых находится контент.
                </p>
                <p>В наличии следующие варианты сетки (зависит от ширины страницы):</p>
                <p>
                    <ul>
                        <li>До 630px - 4 колонки (тянутся по ширине)</li>
                        <li>От 630px до 929px - 6 колонок</li>
                        <li>От 930px до 1119px - 12 колонок</li>
                        <li>От 1200px — 12 колонок</li>
                    </ul>
                </p>
            </>
        }
    />
);

export default {
    title: 'Columns/Column',
    component: ColumnComponent,
    argTypes: {
        l: {
            description: 'Модификтор ширины на L экранах',
        },
        m: {
            description: 'Модификтор ширины на M экранах',
        },
        s: {
            description: 'Модификтор ширины на S экранах',
        },
        xs: {
            description: 'Модификтор ширины на XS экранах',
        },
    },
    parameters: {
        docs: {
            page: DocsPage,
        },
    },
};
