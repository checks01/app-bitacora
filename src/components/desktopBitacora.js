import React, { Component } from 'react'
import '../styles/desktopBitacora.css';
import HeaderBitacora from './headerBitacora';
import PanelFunciones from './panelFunciones';

export default class DesktopBitacora extends Component {
    render() {
        return (
            <div>
                <HeaderBitacora> </HeaderBitacora>
                <PanelFunciones></PanelFunciones>
            </div>
        )
    }
}
