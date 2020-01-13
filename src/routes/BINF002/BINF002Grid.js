import React from 'react';
import MaterialTable from 'material-table';

export default function BINF002Grid() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'ID funcion', field: 'idFuncion', hidden: true },
      { title: 'Clave función', field: 'cveFuncion' },
      { title: 'Función', field: 'descripcion' },
      { title: 'orden', field: 'orden' },
      { title: 'Usuario', field: 'usuario', editable: false},
      { title: 'Fecha actualización', field: 'fechaActualizacion',editable: false}
    ],
    data: [
      { idFuncion: 1, cveFuncion: 'BINF001', descripcion: 'Catálogo de usuarios', orden: '1', usuario: 'ADMIN', fechaActualizacion: '13 Enero 2019 14:05:01' },
      { idFuncion: 2, cveFuncion: 'BINF002', descripcion: 'Catálogo de funciones', orden: '2', usuario: 'ADMIN', fechaActualizacion: '13 Enero 2019 14:08:22' },
      { idFuncion: 3, cveFuncion: 'BINF003', descripcion: 'Validación de scripts', orden: '3', usuario: 'ADMIN', fechaActualizacion: '13 Enero 2019 14:15:06' },
      { idFuncion: 4, cveFuncion: 'BINF004', descripcion: 'Carga de paquetes', orden: '4', usuario: 'ADMIN', fechaActualizacion: '13 Enero 2019 14:17:14' },
      { idFuncion: 5, cveFuncion: 'BINF005', descripcion: 'Seguimiento de paquetes', orden: '5', usuario: 'ADMIN', fechaActualizacion: '13 Enero 2019 14:23:07' },
      { idFuncion: 6, cveFuncion: 'BINF006', descripcion: 'Consulta bitácora', orden: '6', usuario: 'ADMIN', fechaActualizacion: '13 Enero 2019 14:20:13' },
      { idFuncion: 7, cveFuncion: 'BINF007', descripcion: 'Mantenimiento pipeline', orden: '7', usuario: 'ADMIN', fechaActualizacion: '13 Enero 2019 14:22:56' },
      { idFuncion: 8, cveFuncion: 'BINF008', descripcion: 'Reportes', orden: '8', usuario: 'ADMIN', fechaActualizacion: '13 Enero 2019 14:24:19' }
    ]
  });

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