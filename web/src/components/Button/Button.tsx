import React from 'react';

import { ClassesBuilder } from '../common/ClassesBuilder';

import './Button.css';

interface ButtonProps {
    // in case of undefined, 'button' will be set as default
    type?: 'button' | 'submit' | undefined,
    disabled?: boolean, 

    onClick?: React.MouseEventHandler,

    classes?: string,
    style?: {}
}

export const Button: React.FC<ButtonProps> = (props) => {

    const {type, disabled} = props;
    const {onClick} = props;
    const {children, classes, style} = props;

    var className = ClassesBuilder('Button', classes);

    return (
        <button
            type={type || 'button'} onClick={onClick}
            disabled={disabled} className={className} style={style}>

            {children}
            
        </button>
    );
}