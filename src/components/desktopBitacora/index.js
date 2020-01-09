import React, { Component } from 'react'
import HeaderBitacora from './headerBitacora';
import PanelFunciones from './panelFunciones';

export default class DesktopBitacora extends Component {
    constructor(props) {
        super(props);
        this.state = { open: true };
        this.fun = null; 
    }

    fnExpandeColapsaMenu = (valor) => {
        this.setState({ open: valor });
        console.log(valor);
    }

    fnSetFuncion = (func) => {
        this.fun = func;
    }

    render() { 

        return (
            <>
                <HeaderBitacora open={this.state.open} fnExpandeColapsaMenu={this.fnExpandeColapsaMenu} funcion={this.fun} />
                <PanelFunciones open={this.state.open} fnExpandeColapsaMenu={this.fnExpandeColapsaMenu} fnSetFuncion={this.fnSetFuncion}/>
            </>

        )
    }
}
