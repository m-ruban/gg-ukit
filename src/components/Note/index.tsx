import React, { FC, ReactNode } from 'react';
import 'gg-ukit/components/Note/note.less';

export interface NoteProps {
    children: ReactNode;
}

const Note: FC<NoteProps> = ({ children }) => <div className="gg-note">{children}</div>;

export default Note;
