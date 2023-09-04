//PARA DESPLEGAR PROBLEMA CON  .ENV.META Y VITE

// export const getEnvVariables = () => {
//   ////este es un error de vite
//   ////debo de comentarlo y ponerlo  LA VARIABLES DE ENTORNO DE MANERA MANUAL
//   //import.meta.env;
//   return {
//     //...import.meta.env,
//     VITE_API_URL: import.meta.env.VITE_API_URL,
//   };
// };

//ESTO SOLO FUNCIONA EN DESARROLLO PARA DEPLOY DEBO USAR CODIGO DE ARRIBA
export const getEnvVariables = () => {
  import.meta.env;
  return {
    ...import.meta.env,
  };
};
