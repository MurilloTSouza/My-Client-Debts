import React, { ChangeEvent, useState } from 'react';

import { ClassesBuilder } from '../common/ClassesBuilder';
import { Validator } from '../common/Validators';
import { Typography } from '../Typography/Typography';

import './Input.css';

export interface InputProps {
    label?: string,
    name?: string,

    type?: 'text' | 'password', // if not specified, text is set as default
    maxLength?: number, // only used as input propertie, don't have any validation

    validators?: Array<Validator>, // array of validation strategies
    message?: string,

    onChange?: React.ChangeEventHandler

    classes?: string
}

export const Input: React.FC<InputProps> = (props) => {

    const {label, name, type, maxLength} = props;
    const {validators, message} = props;
    const {onChange} = props;
    const {classes} = props;

    const [value, setValue] = useState("");
    const [invalid, setInvalid] = useState(true);
    const [visited, setVisited] = useState(false);
    const [focused, setFocused] = useState(false);

    const onFocus = () => { setFocused(true); }
    const onBlur = () => { setFocused(false); }

    // interfer input onChange to validate, based on validations.
    // this validation only affects css!
    const handleOnChange = (event: ChangeEvent) => {

        setVisited(true);

        /* setting input.value normally */
        const target = event.target as HTMLInputElement;
        const value = target.value;
        setValue(value);

        // set invalid = FALSE if every validations are TRUE
        // if any validation fails, then invalid = TRUE
        if(validators) {
            setInvalid(!validators.every(
                (validator) => validator.validate(value) 
            ));
        }
        
        //procedes to parent onChange, if any
        if(onChange){ onChange(event); };
    }

    // set as invalid if user visited input, lost focus and validators fail
    var isInvalid = invalid && visited && !focused ? 'invalid' : undefined ;
    var className = ClassesBuilder('Input', isInvalid, classes);

    return (
        <div className={className}>

            <input 
                value={value} name={name} type={type || 'text'}
                placeholder=" " autoComplete="off" maxLength={maxLength}
                onChange={handleOnChange} onBlur={onBlur} onFocus={onFocus}
                className="cp_text cp_border-neutral"
            />

            {/* 
                not using Typography to keep htmlFor, 
                also to prevent override on label:focus color,
                avoiding to use !important in css
            */}
            <label htmlFor={name} className="cp_neutral"> {label} </label>

            <Typography component='span' text='neutral'>
                {message}    
            </Typography>

        </div>
    )

}