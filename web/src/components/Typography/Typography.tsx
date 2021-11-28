import React from 'react';
import { ClassesBuilder } from '../common/ClassesBuilder';

import './Typography.css';

interface Props {
    component: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'p'|'label'|'span'|'div',
    
    // curretly only used to set class as .text or .neutral,
    // text color will change based on background class (see in color-pallete.css)
    text?: 'text' | 'neutral', 

    classes?: string
}

export const Typography: React.FC<Props> = (props) => {

    const {component, text} = props;

    const {classes, children} = props;

    // generating html tag dynamically based on level
    // Ex.: 1 -> <h1>, 2 -> <h2>, etc...
    const Tag: keyof JSX.IntrinsicElements = component;

    // generating classes
    // text will be: text -> cp_text, neutral -> cp_neutral
    var className = ClassesBuilder('Typography', 'cp_'+text, classes);

    return (
        <Tag className={className}>
            {children}
        </Tag>
    )
}