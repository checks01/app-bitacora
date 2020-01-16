import React, { Component } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

export default function BINF001Grid() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'ID usuario', field: 'idUsuario', hidden: true },
      { title: 'Clave usuario', field: 'cveUsuario' },
      { title: 'Password', field: 'password' },
      { title: 'Nombre', field: 'nombre' },
      { title: 'Email', field: 'email' },
      {
        title: 'Activo',
        field: 'activo',
        lookup: { 'S': 'Si', 'N': 'No' },
      },
      { title: 'Usuario', field: 'usuario', editable: false },
      { title: 'Fecha actualización', field: 'fechaActualizacion', editable: false }
    ],
    data: [],
  });

  class BINF001Grid extends Component {
    constructor(props) {
      super(props);
      this.state = { state };
    }

    componentDidMount() {
      console.log("peticion")
      axios.get('http://localhost:8085/usuarios')
        .then(response => {
          console.log('respuesta')
          state.data = response.data._embedded.usuarioses;
          this.setState({ state });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    render() {
      return (
        <MaterialTable
          title="Catálogo de usuarios"
          columns={state.columns}
          data={state.data}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setState(prevState => {
                    const data = [...prevState.data];
                    console.log('datos previos: ' + data);
                    data.push(newData);
                    console.log('nuevos datos: ' + newData)
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState(prevState => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setState(prevState => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
        />
      );
    }
  }
  return <BINF001Grid />
}