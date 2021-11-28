import React from 'react';

import { Button } from '../../../Button/Button';
import { InputFactory } from '../../../Input/factory/InputFactory';
import { Typography } from '../../../Typography/Typography';
import { Form } from '../../Form';
import { FormGroup } from '../../FormGroup';

interface Props {
    onSubmit?: React.FormEventHandler
}

export const LoginForm: React.FC<Props> = (props) => {

    const {onSubmit} = props;

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Typography component='h2' text='text'>
                    Welcome!
                </Typography>
                <Typography component='span' text='neutral'>
                    Please, login to your account.
                </Typography>
            </FormGroup>

            <FormGroup>
                <InputFactory of='username' />
            </FormGroup>

            <FormGroup>
                <InputFactory of='password' />
            </FormGroup>

            <FormGroup>
                <Button type='submit' classes="g_full-block">
                    Login
                </Button>
            </FormGroup>

            <FormGroup>
                <Typography component='span' text='text'>
                    Don't have an account? <a href="#">Register.</a>
                </Typography>
            </FormGroup>
        </Form>
    )
}