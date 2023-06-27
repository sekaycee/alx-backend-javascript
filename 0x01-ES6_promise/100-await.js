import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  let response = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    response = { photo, user };
  } catch (error) {
    response = { photo: null, user: null };
  }
  return response;
}

export default asyncUploadUser;
