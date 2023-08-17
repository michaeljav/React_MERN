import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
  cloud_name: 'journalappreact',
  api_key: '882413228935499',
  api_secret: '-pWRlpvQ_LRhDePnX5p8K3rQt1s',
  secure: true,
});

describe('Pruebas de fileUpload', () => {
  test('debe de subir el archivo correctamente a claudinary', async () => {
    const imageUrl =
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80';

    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], 'photo.jpg');

    const url = await fileUpload(file);
    // console.log(url);
    expect(typeof url).toBe('string');

    // console.log(url);
    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.jpg', '');
    // console.log('Michael ', imageId);

    const cloudResp = await cloudinary.api.delete_resources(
      'journal/' + [imageId],
      { resource_type: 'image' }
    );

    // console.log({ cloudResp });
  });

  test('debe de retornal null', async () => {
    const file = new File([], 'photo.jpg');

    const url = await fileUpload(file);
    // console.log(url);
    expect(url).toBe(null);
  });
});
