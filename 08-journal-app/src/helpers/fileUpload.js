export const fileUpload = async (file) => {
  if (!file) throw new Error(`Not existing file`);

  const cloudUrl = 'https://api.cloudinary.com/v1_1/journalappreact/upload';
  try {
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData,
    });

    // console.log('Respuesta de envio ' + resp);

    if (!resp.ok) throw new Error('could not load image');

    const cloudResp = await resp.json();
    // console.log('cloudResp  ', cloudResp);

    return cloudResp.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
