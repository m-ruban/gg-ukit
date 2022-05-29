import React from 'react';
import CustomDocsPage from 'gg-ukit/stories/CustomDocsPage.utils';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';
import ColumnComponent from 'gg-ukit/components/Column';

export const Column = (args) => (
    <ColumnsWrapper>
        <ColumnComponent {...args}>
            <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>test column</div>
        </ColumnComponent>
    </ColumnsWrapper>
);

Column.args = {
    l: 12,
    m: 12,
    s: 6,
    xs: 4,
};

export const Columns = () => (
    <div>
        <ColumnsWrapper>
            <ColumnComponent xs={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>xs</div>
            </ColumnComponent>
            <ColumnComponent xs={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>xs</div>
            </ColumnComponent>
            <ColumnComponent xs={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>xs</div>
            </ColumnComponent>
            <ColumnComponent xs={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>xs</div>
            </ColumnComponent>
        </ColumnsWrapper>
        <ColumnsWrapper>
            <ColumnComponent xs={4}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>4 xs</div>
            </ColumnComponent>
        </ColumnsWrapper>
        <ColumnsWrapper>
            <ColumnComponent s={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>s</div>
            </ColumnComponent>
            <ColumnComponent s={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>s</div>
            </ColumnComponent>
            <ColumnComponent s={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>s</div>
            </ColumnComponent>
            <ColumnComponent s={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>s</div>
            </ColumnComponent>
            <ColumnComponent s={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>s</div>
            </ColumnComponent>
            <ColumnComponent s={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>s</div>
            </ColumnComponent>
        </ColumnsWrapper>
        <ColumnsWrapper>
            <ColumnComponent s={6}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>6 s</div>
            </ColumnComponent>
        </ColumnsWrapper>
        <ColumnsWrapper>
            <ColumnComponent m={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>m</div>
            </ColumnComponent>
            <ColumnComponent m={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>m</div>
            </ColumnComponent>
            <ColumnComponent m={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>m</div>
            </ColumnComponent>
            <ColumnComponent m={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>m</div>
            </ColumnComponent>
            <ColumnComponent m={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>m</div>
            </ColumnComponent>
            <ColumnComponent m={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>m</div>
            </ColumnComponent>
            <ColumnComponent m={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>m</div>
            </ColumnComponent>
            <ColumnComponent m={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>m</div>
            </ColumnComponent>
            <ColumnComponent m={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>m</div>
            </ColumnComponent>
            <ColumnComponent m={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>m</div>
            </ColumnComponent>
            <ColumnComponent m={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>m</div>
            </ColumnComponent>
            <ColumnComponent m={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>m</div>
            </ColumnComponent>
        </ColumnsWrapper>
        <ColumnsWrapper>
            <ColumnComponent m={12}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>12 m</div>
            </ColumnComponent>
        </ColumnsWrapper>
        <ColumnsWrapper>
            <ColumnComponent l={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>l</div>
            </ColumnComponent>
            <ColumnComponent l={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>l</div>
            </ColumnComponent>
            <ColumnComponent l={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>l</div>
            </ColumnComponent>
            <ColumnComponent l={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>l</div>
            </ColumnComponent>
            <ColumnComponent l={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>l</div>
            </ColumnComponent>
            <ColumnComponent l={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>l</div>
            </ColumnComponent>
            <ColumnComponent l={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>l</div>
            </ColumnComponent>
            <ColumnComponent l={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>l</div>
            </ColumnComponent>
            <ColumnComponent l={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>l</div>
            </ColumnComponent>
            <ColumnComponent l={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>l</div>
            </ColumnComponent>
            <ColumnComponent l={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>l</div>
            </ColumnComponent>
            <ColumnComponent l={1}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>l</div>
            </ColumnComponent>
        </ColumnsWrapper>
        <ColumnsWrapper>
            <ColumnComponent l={12}>
                <div style={{ color: '#FFFFFF', border: '1px solid #FFFFFF' }}>12 l</div>
            </ColumnComponent>
        </ColumnsWrapper>
    </div>
);

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
        layout: 'fullscreen',
        docs: {
            page: DocsPage,
        },
    },
};
