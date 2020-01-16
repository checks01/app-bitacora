import axios from 'axios';

export function formateaFecha(date) {
  var monthNames = [
    "Ene", "Feb", "Mar",
    "Abr", "May", "Jun", "Jul",
    "Ago", "Sep", "Oct",
    "Nov", "Dic"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
};

export function makeRequest(typeOfRequest, baseURI, path) {
  switch (typeOfRequest) {
    case 'read':
      axios.get(baseURI + path)
        .then(response => {
          return response.data._embedded.usuarioses;
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case 'post':
      axios.post(baseURI + path)
      .then(promise =>{
        return makeRequest('read', baseURI, path);
      });
      break;
    case 'put':
      axios.put(baseURI)
      .then(promise =>{
        return makeRequest('read', baseURI, path);
      });
      break;
    case 'delete':
      axios.delete(baseURI)
      .then(promise =>{
        return makeRequest('read', baseURI, path);
      })
      break;
  }
}





