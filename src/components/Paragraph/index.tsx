import React, { FC, ReactNode } from 'react';
import 'components/Paragraph/paragraph.less';

interface ParagraphProps {
    children: ReactNode;
}

const Paragraph: FC<ParagraphProps> = ({ children }) => <p className="gg-paragraph">{children}</p>;

export default Paragraph;
