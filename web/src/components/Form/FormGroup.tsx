import React from 'react';

import { ClassesBuilder } from '../common/ClassesBuilder';

import './FormGroup.css';

interface FormGroupProps {
    classes?: string
}

/*
    Only a wrapper to add margin between contents of Form
*/
export const FormGroup: React.FC<FormGroupProps> = (props) => {

    const {classes} = props;

    var className = ClassesBuilder('FormGroup', classes);

    return (
        <div className={className}>
            {props.children}
        </div>
    )
}