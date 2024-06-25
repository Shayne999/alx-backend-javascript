import {uploadPhoto, createUser} from './utils.js';

async function asyncUploadUser() {

    try {
        const photoRes = await uploadPhoto();
        const userRes = await createUser();
        return {
            photo: photoRes,
            user: userRes
        };

    } catch (error) {
        return {
            photo: null,
            user: null
          };
    }

}