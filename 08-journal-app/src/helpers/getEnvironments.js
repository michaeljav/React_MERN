export const getEnvironments = () => {
  //ESTO PARA CARGARLOS
  import.meta.env;
  return {
    //PARA RETORNARLOS
    ...import.meta.env,
  };
};
