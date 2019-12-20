import React, { Component } from 'react'
import HeaderBitacora from './headerBitacora';
import PanelFunciones from './panelFunciones';

export default class DesktopBitacora extends Component {
    constructor(props) {
        super(props);
        this.state = { open: true };
    }

    fnExpandeColapsaMenu = (valor) => {
        this.setState({ open: valor });
        console.log(valor);
    }
    render() {

        return (
            <>
                <HeaderBitacora open={this.state.open} fnExpandeColapsaMenu={this.fnExpandeColapsaMenu} />
                <PanelFunciones open={this.state.open} fnExpandeColapsaMenu={this.fnExpandeColapsaMenu} />
            </>
        )
    }
}
