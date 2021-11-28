import React from 'react';

import { ClassesBuilder } from '../common/ClassesBuilder';

import './Form.css';

export interface FormProps {
    onSubmit?: React.FormEventHandler,

    classes?: string
}

/* 
    Works only as a 'wrapper'. The form contents
    (such as input, button, etc...) should be
    defined in children
*/
export const Form: React.FC<FormProps> = (props) => {

    const {onSubmit} = props;
    const {classes} = props;

    var className = ClassesBuilder('Form', classes);

    return (
        <form className={className} onSubmit={onSubmit}>
            {props.children}
        </form>
    );
}