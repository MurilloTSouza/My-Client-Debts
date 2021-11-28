import React from 'react';
import { FormFactory } from '../../components/Form/factory/FormFactory';

import image from '../../imgs/space.svg';

import './Login.css';

interface Props {

}
interface State {

}

export class Login extends React.Component<Props, State> {

    render() {
        return (
            <div className="Login cp_bg-dark">

                <div className="wrapper cp_surface cp_light-shadow">

                    <section id="section-img">
                        <img src={image} className="g_fit-cover"/>
                    </section>

                    <section id="section-form">
                        <FormFactory of="login"/>
                    </section>

                </div>

            </div>
        )
    }
}