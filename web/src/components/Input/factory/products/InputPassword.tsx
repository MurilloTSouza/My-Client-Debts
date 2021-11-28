import React, { ChangeEventHandler } from 'react';

import { Input } from '../../Input';
import * as Validators from '../../../common/Validators';

interface Props {
    onChange?: ChangeEventHandler
}

export const InputPassword: React.FC<Props> = (props) => {

    const {onChange} = props;

    const MIN_LENGTH = 4;
    const MAX_LENGTH = 24;

    const validators = [
        Validators.MinLenght( MIN_LENGTH ),
        Validators.MaxLenght( MAX_LENGTH )
    ]

    const message = `Between ${MIN_LENGTH} and ${MAX_LENGTH} characters.`;

    return <Input
        label="Password" name="password" type="password"
        maxLength={MAX_LENGTH} validators={validators}
        message={message} onChange={onChange}
    />;
}