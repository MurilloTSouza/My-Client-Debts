import React from 'react';

import { LoginForm } from './products/LoginForm';

interface FormFactoryProps {
    of: string,

    onSubmit?: React.FormEventHandler
}

export const FormFactory: React.FC<FormFactoryProps> = (props) => {

    const {of} = props;
    
    const {onSubmit} = props;

    switch (of) {
        case "login":
            return <LoginForm onSubmit={onSubmit}/>;
    
        default:
            return <>InputFactory: invalid key.</>;
    }
}