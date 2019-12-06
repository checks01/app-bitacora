import React, { Component } from 'react'
import HeaderBitacora from './headerBitacora';
import PanelFunciones from './panelFunciones';
import './styles.css';

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
