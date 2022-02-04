import multer, { Multer } from 'multer';

export function getUploadPath(path: string): Multer {
  return multer({ dest: path });
}