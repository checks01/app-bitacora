import React, { Component } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import { formateaFecha } from '../../utils/FormUtil';

export default function BINF002Grid() {
  const [state] = React.useState({
    columns: [
      { title: 'ID funcion', field: 'idFuncion', hidden: true },
      { title: 'Clave función', field: 'cveFuncion' },
      { title: 'Función', field: 'descripcion' },
      { title: 'orden', field: 'orden' },
      { title: 'Usuario', field: 'usuario', editable: false },
      { title: 'Fecha actualización', field: 'fechaActualizacion', editable: false }
    ],
    data: []
  });

  class BINF002Grid extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      axios.get('http://localhost:8085/funciones')
        .then(response => {
          state.data = response.data._embedded.funcioneses;
          this.setState({ state });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    render() {
      return (
        <MaterialTable
          title="Catálogo de funciones"
          columns={state.columns}
          data={state.data}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  newData.usuario = 'SYS';
                  newData.fechaActualizacion = formateaFecha(new Date());
                  axios.post('http://localhost:8085/funciones', newData)
                    .then(response => {
                      axios.get('http://localhost:8085/funciones')
                        .then(response => {
                          state.data = response.data._embedded.funcioneses;
                          this.setState({ state });
                        })
                        .catch(function (error) {
                          console.log(error);
                        })
                    });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    newData.usuario = 'SYS';
                    newData.fechaActualizacion = formateaFecha(new Date());
                    axios.put(newData._links.self.href, newData)
                      .then(response => {
                        axios.get('http://localhost:8085/funciones')
                          .then(response => {
                            state.data = response.data._embedded.funcioneses;
                            this.setState({ state });
                          })
                          .catch(function (error) {
                            console.log(error);
                          })
                      });
                  }
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  axios.delete(oldData._links.self.href)
                    .then(response => {
                      axios.get('http://localhost:8085/funciones')
                        .then(response => {
                          state.data = response.data._embedded.funcioneses;
                          this.setState({ state });
                        })
                        .catch(function (error) {
                          console.log(error);
                        })
                    });
                }, 600);
              }),
          }}
        />
      );
    }
  }
  return <BINF002Grid />
}