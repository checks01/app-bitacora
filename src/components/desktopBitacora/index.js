import React, { Component } from 'react'
import HeaderBitacora from './headerBitacora';
import PanelFunciones from './panelFunciones';
import PanelPantalla from './panelPantalla';
import './styles.css';

export default class DesktopBitacora extends Component {
    render() {
        return (
            <>
                <HeaderBitacora />
                <section id="sec">
                    <PanelFunciones />
                    <PanelPantalla />
                </section>
            </>
        )
    }
}
