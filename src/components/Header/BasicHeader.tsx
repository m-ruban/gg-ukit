import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';
import 'components/Header/header.less';

export enum HeaderTag {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
}

export enum HeaderType {
    H1 = 1,
    H2 = 2,
    H3 = 3,
    H4 = 4,
}

export enum HeaderLine {
    Secondary = 'secondary',
    TertiaryDimmed = 'tertiary-dimmed',
}

const LABEL_SEPARATOR = ' ';

interface BasicHeaderProps {
    title: string;
    Tag: HeaderTag;
    type: HeaderType;
    combineColor?: boolean;
    line?: HeaderLine;
}

const BasicHeader: FC<BasicHeaderProps> = ({ Tag, combineColor, line, title, type, ...props }) => {
    let label: ReactNode = <>{title}</>;
    if (combineColor) {
        const parts = title.split(LABEL_SEPARATOR);
        const firstChar = parts.shift();
        const otherChars = parts.join(' ');
        label = (
            <>
                {firstChar}&nbsp;
                <span className="gg-header-latest-chars">{otherChars}</span>
            </>
        );
    }
    return (
        <Tag className={classnames('gg-header', `gg-header_${type}`, { 'gg-header_with-line': line })} {...props}>
            {label}
            {line && (
                <span
                    className={classnames('gg-header-line', `gg-header-line_${type}`, {
                        'gg-header-line_tertiary': line === HeaderLine.TertiaryDimmed,
                    })}
                />
            )}
        </Tag>
    );
};

export default BasicHeader;
