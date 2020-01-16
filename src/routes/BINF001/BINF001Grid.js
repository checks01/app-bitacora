import React, { Component } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import { formateaFecha } from '../../utils/FormUtil';

export default function BINF001Grid() {
  const [state] = React.useState({
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
    data: []
  });

  class BINF001Grid extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      axios.get('http://localhost:8085/usuarios')
        .then(response => {
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
                  newData.usuario = 'SYS';
                  newData.fechaActualizacion = formateaFecha(new Date());
                  axios.post('http://localhost:8085/usuarios', newData)
                    .then(response => {
                      axios.get('http://localhost:8085/usuarios')
                        .then(response => {
                          state.data = response.data._embedded.usuarioses;
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
                        axios.get('http://localhost:8085/usuarios')
                          .then(response => {
                            state.data = response.data._embedded.usuarioses;
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
                      axios.get('http://localhost:8085/usuarios')
                        .then(response => {
                          state.data = response.data._embedded.usuarioses;
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
  return <BINF001Grid />
}