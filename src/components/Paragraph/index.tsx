import React, { FC, ReactNode } from 'react';
import 'gg-ukit/components/Paragraph/paragraph.less';

export interface ParagraphProps {
    children: ReactNode;
}

const Paragraph: FC<ParagraphProps> = ({ children }) => <div className="gg-paragraph">{children}</div>;

export default Paragraph;
