import React, { ChangeEventHandler } from 'react';

import { InputProps } from '../Input';
import { InputPassword } from './products/InputPassword';
import { InputUsername } from './products/InputUsername';

interface InputFactoryProps extends InputProps{
    of: string,
    
    onChange?: ChangeEventHandler
}

export const InputFactory: React.FC<InputFactoryProps> = (props) => {

    switch (props.of) {
        case "username":
            return <InputUsername onChange={props.onChange}/>;

        case "password":
            return <InputPassword onChange={props.onChange}/>;
    
        default:
            return <>InputFactory: invalid key.</>;
    }
}