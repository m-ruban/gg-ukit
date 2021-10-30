import React, { FC } from 'react';
import BasicHeader, { HeaderTag, HeaderType, HeaderLine } from 'components/Header/BasicHeader';

interface HeaderProps {
    title: string;
    line?: HeaderLine;
    combineColor?: boolean;
}

/** Содержимое внутри строки*/
export const H1: FC<HeaderProps> = ({ title, line, combineColor }: HeaderProps) => (
    <BasicHeader Tag={HeaderTag.H1} type={HeaderType.H1} line={line} title={title} combineColor={combineColor} />
);

export const H2: FC<HeaderProps> = ({ title, line, combineColor }) => (
    <BasicHeader Tag={HeaderTag.H2} type={HeaderType.H2} line={line} title={title} combineColor={combineColor} />
);

export const H3: FC<HeaderProps> = ({ title, line, combineColor }) => (
    <BasicHeader Tag={HeaderTag.H3} type={HeaderType.H3} line={line} title={title} combineColor={combineColor} />
);

export const H4: FC<HeaderProps> = ({ title, line, combineColor }) => (
    <BasicHeader Tag={HeaderTag.H4} type={HeaderType.H4} line={line} title={title} combineColor={combineColor} />
);
