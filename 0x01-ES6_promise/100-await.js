import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const upload = await uploadPhoto();
    const user = await createUser();
    return {
      photo: upload,
      user,
    };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
