import multer from 'multer';

import uploadConfig from '../config/multer';


const upload_images = multer(uploadConfig.upload("images"));

export {upload_images}
