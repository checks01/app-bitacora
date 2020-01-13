import React from 'react';
import MaterialTable from 'material-table';

export default function BINF001Grid() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'ID usuario', field: 'idUsuario', hidden:true },
      { title: 'Clave usuario', field: 'cveUsuario' },
      { title: 'Password', field: 'password' },
      { title: 'Nombre', field: 'nombre' },
      { title: 'Email', field: 'email' },
      {
        title: 'Activo',
        field: 'activo',
        lookup: { 'S': 'Si', 'N': 'No' },
      },
      { title: 'Usuario', field: 'usuario', editable: false},
      { title: 'Fecha actualización', field: 'fechaActualizacion', editable: false}
    ],
    data: [
      { idUsuario: 1, cveUsuario: '000001', password: '123.Hola', nombre: 'Salvador Antonio Ayala Chávez', email: 'sayala002@accitesz.com', activo: 'S', usuario: 'ADMIN', fechaActualizacion: '13 Enero 2019 13:13:22'},
      { idUsuario: 2, cveUsuario: '000002', password: '123.Hola', nombre: 'Sergio Valle Alarcón', email: 'svalle016@accitesz.com', activo: 'S', usuario: 'ADMIN', fechaActualizacion: '13 Enero 2019 13:20:01'},
    ],
  });

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
                data.push(newData);
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